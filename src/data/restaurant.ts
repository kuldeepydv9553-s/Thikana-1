import type { ReservationSlot, RestaurantInfo } from '../types/restaurant'

export const restaurantInfo: RestaurantInfo = {
  name: 'Thikana',
  tagline: 'Modern Indian fine-dining in the heart of Bareilly',
  description:
    'A warm, story-led dining experience blending heritage recipes, slow-cooked comfort, and contemporary plating.',
  status: 'Open Today · 11:00 AM – 11:00 PM',
  cuisine: 'Modern Indian Cuisine',
  location: 'Bareilly, Uttar Pradesh',
  address: '15 Sharda Road, Bareilly, Uttar Pradesh',
  phone: '+91 98765 43210',
  email: 'hello@thikana.in',
  lat: 28.3673,
  lng: 79.4304,
}

export const reservationSlots: ReservationSlot[] = [
  { time: '12:00 PM', status: 'Available' },
  { time: '12:30 PM', status: 'Limited' },
  { time: '1:00 PM', status: 'Unavailable' },
  { time: '7:00 PM', status: 'Available' },
  { time: '7:30 PM', status: 'Limited' },
  { time: '8:00 PM', status: 'Available' },
  { time: '8:30 PM', status: 'Unavailable' },
  { time: '9:00 PM', status: 'Available' },
]

export const galleryImages = [
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80',
  'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80',
]

export const testimonials = [
  {
    quote: 'Inventive, deeply comforting food and a room that feels quietly luxurious.',
    name: 'Aisha Mehra',
  },
  {
    quote: 'A rare balance of elegance and warmth. Every plate feels thoughtfully composed.',
    name: 'Vivek Sharma',
  },
  {
    quote: 'The ambience is polished but intimate, and the flavours stay with you for days.',
    name: 'Naina Gupta',
  },
]
