export type ReservationForm = {
  name: string
  phone: string
  email: string
  guests: number
  date: string
  time: string
  occasion: string
}

export type ReservationErrors = Partial<Record<keyof ReservationForm, string>>
