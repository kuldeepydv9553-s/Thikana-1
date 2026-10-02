import { restaurantInfo } from '../data/restaurant'
import type { Coordinates } from '../types/order'

export const restaurantCoordinates: Coordinates = [restaurantInfo.lat, restaurantInfo.lng]

export const demoDropoffCoordinates: Coordinates = [
  restaurantInfo.lat + 0.012,
  restaurantInfo.lng + 0.009,
]

export const restaurantMapConfig = {
  center: restaurantCoordinates,
  zoom: 16,
  pathOptions: {
    color: '#cf9b52',
    fillColor: '#cf9b52',
    fillOpacity: 0.8,
  },
}

export const getDirectionsUrl = () =>
  `https://www.google.com/maps/dir/?api=1&destination=${restaurantInfo.lat},${restaurantInfo.lng}`
