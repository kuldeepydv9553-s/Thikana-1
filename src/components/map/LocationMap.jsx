import { CircleMarker, MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { restaurantMapConfig } from '../../lib/maps'

export function LocationMap() {
  return (
    <MapContainer
      center={restaurantMapConfig.center}
      zoom={restaurantMapConfig.zoom}
      scrollWheelZoom={false}
      className="restaurant-map"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      <CircleMarker center={restaurantMapConfig.center} radius={14} pathOptions={restaurantMapConfig.pathOptions} />
    </MapContainer>
  )
}
