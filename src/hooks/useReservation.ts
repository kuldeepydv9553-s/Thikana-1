import { useState } from 'react'
import type { ReservationErrors, ReservationForm } from '../types/reservation'

const defaultForm: ReservationForm = {
  name: '',
  phone: '',
  email: '',
  guests: 2,
  date: '',
  time: '7:00 PM',
  occasion: 'Dinner',
}

export function useReservation() {
  const [form, setForm] = useState<ReservationForm>(defaultForm)
  const [errors, setErrors] = useState<ReservationErrors>({})
  const [reservationCode, setReservationCode] = useState('')

  const updateField = <K extends keyof ReservationForm>(field: K, value: ReservationForm[K]) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const submitReservation = () => {
    const nextErrors: ReservationErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Please add your name.'
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (!form.date) nextErrors.date = 'Select a date.'
    if (!form.time) nextErrors.time = 'Select a time.'

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      return { ok: false }
    }

    const code = `R-${Math.floor(1000 + Math.random() * 9000)}`
    setErrors({})
    setReservationCode(code)
    return { ok: true, reservationCode: code }
  }

  return {
    form,
    errors,
    reservationCode,
    updateField,
    submitReservation,
  }
}
