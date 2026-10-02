import { useEffect, useMemo } from 'react'
import { divIcon, latLngBounds } from 'leaflet'
import { CircleMarker, MapContainer, Marker, Polyline, TileLayer, Tooltip, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { restaurantCoordinates } from '../../lib/maps'

const riderIcon = divIcon({
  className: 'delivery-rider-marker',
  html: '<span aria-label="Simulated delivery rider">🛵</span>',
  iconSize: [40, 40],
  iconAnchor: [20, 20],
})

function FitRoute({ bounds }) {
  const map = useMap()

  useEffect(() => {
    map.fitBounds(bounds, { padding: [36, 36], maxZoom: 15 })
  }, [bounds, map])

  return null
}

export function DeliveryTrackingMap({ destination, progress }) {
  const bounds = useMemo(
    () => latLngBounds([restaurantCoordinates, destination]),
    [destination],
  )
  const riderPosition = [
    restaurantCoordinates[0] + (destination[0] - restaurantCoordinates[0]) * progress,
    restaurantCoordinates[1] + (destination[1] - restaurantCoordinates[1]) * progress,
  ]

  return (
    <div className="delivery-map-wrap">
      <MapContainer
        bounds={bounds}
        boundsOptions={{ padding: [36, 36], maxZoom: 15 }}
        scrollWheelZoom={false}
        className="delivery-map"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
        <FitRoute bounds={bounds} />
        <Polyline
          positions={[restaurantCoordinates, destination]}
          pathOptions={{ color: '#cf9b52', weight: 5, opacity: 0.7, dashArray: '8 10' }}
        />
        <CircleMarker
          center={restaurantCoordinates}
          radius={10}
          pathOptions={{ color: '#17110d', fillColor: '#e7c57c', fillOpacity: 1, weight: 3 }}
        >
          <Tooltip permanent direction="top">Thikana</Tooltip>
        </CircleMarker>
        <CircleMarker
          center={destination}
          radius={8}
          pathOptions={{ color: '#fff', fillColor: '#d76b50', fillOpacity: 1, weight: 3 }}
        >
          <Tooltip permanent direction="top">Drop-off</Tooltip>
        </CircleMarker>
        <Marker position={riderPosition} icon={riderIcon} zIndexOffset={1000}>
          <Tooltip direction="top">Demo rider · {Math.round(progress * 100)}%</Tooltip>
        </Marker>
      </MapContainer>
      <div className="delivery-map-legend">
        <span><i className="legend-restaurant" /> Restaurant</span>
        <span><i className="legend-rider">🛵</i> Simulated rider</span>
        <span><i className="legend-destination" /> Drop-off</span>
      </div>
    </div>
  )
}
