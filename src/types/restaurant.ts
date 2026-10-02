export type RestaurantInfo = {
  name: string
  tagline: string
  description: string
  status: string
  cuisine: string
  location: string
  address: string
  phone: string
  email: string
  lat: number
  lng: number
}

export type NavItem = {
  to: string
  label: string
}

export type ReservationSlot = {
  time: string
  status: 'Available' | 'Limited' | 'Unavailable'
}
