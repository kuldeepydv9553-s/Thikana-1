import type { MenuItem } from './menu'

export type CartEntry = MenuItem & {
  quantity: number
}

export type CheckoutForm = {
  name: string
  phone: string
  email: string
  orderType: 'Delivery' | 'Pickup'
  address: string
  landmark: string
  city: string
  pincode: string
  coupon: string
  method: 'Cash on Delivery' | 'UPI' | 'Card'
}

export type OrderState = {
  orderNumber: string
}

export type Coordinates = [latitude: number, longitude: number]
