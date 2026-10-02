import { motion } from 'framer-motion'
import { reservationSlots } from '../../data/restaurant'
import { formatDateInput } from '../../lib/utils'

export function ReservationForm({ form, errors, updateField, submitReservation, reservationCode }) {
  const today = formatDateInput(new Date())

  const handleSubmit = (event) => {
    event.preventDefault()
    submitReservation()
  }

  return (
    <form className="reservation-form" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label className="field">
          <span>Full Name</span>
          <input type="text" value={form.name} onChange={(event) => updateField('name', event.target.value)} />
          {errors.name && <small>{errors.name}</small>}
        </label>
        <label className="field">
          <span>Phone</span>
          <input type="tel" value={form.phone} onChange={(event) => updateField('phone', event.target.value)} />
          {errors.phone && <small>{errors.phone}</small>}
        </label>
      </div>

      <label className="field">
        <span>Email</span>
        <input type="email" value={form.email} onChange={(event) => updateField('email', event.target.value)} />
        {errors.email && <small>{errors.email}</small>}
      </label>

      <div className="field-grid">
        <label className="field">
          <span>Guests</span>
          <select value={form.guests} onChange={(event) => updateField('guests', Number(event.target.value))}>
            {[2, 4, 6, 8, 10].map((count) => (
              <option key={count} value={count}>{count} guests</option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Date</span>
          <input type="date" min={today} value={form.date} onChange={(event) => updateField('date', event.target.value)} />
          {errors.date && <small>{errors.date}</small>}
        </label>
      </div>

      <div className="field-grid">
        <label className="field">
          <span>Time</span>
          <select value={form.time} onChange={(event) => updateField('time', event.target.value)}>
            {reservationSlots.map((slot) => (
              <option key={slot.time} value={slot.time} disabled={slot.status === 'Unavailable'}>
                {slot.time} {slot.status === 'Unavailable' ? 'Unavailable' : ''}
              </option>
            ))}
          </select>
        </label>
        <label className="field">
          <span>Occasion</span>
          <select value={form.occasion} onChange={(event) => updateField('occasion', event.target.value)}>
            {['Dinner', 'Birthday', 'Anniversary', 'Business'].map((occasion) => (
              <option key={occasion} value={occasion}>{occasion}</option>
            ))}
          </select>
        </label>
      </div>

      {reservationCode && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="reservation-confirmation">
          <strong>Reservation confirmed</strong>
          <span>{reservationCode}</span>
        </motion.div>
      )}

      <button type="submit" className="btn btn-primary block-button">
        Reserve Table
      </button>
    </form>
  )
}
