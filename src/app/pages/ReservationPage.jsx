import { Link } from 'react-router-dom'
import { reservationSlots } from '../../data/restaurant'
import { ReservationForm } from '../../components/reservation/ReservationForm'
import { useReservation } from '../../hooks/useReservation'

export function ReservationPage() {
  const { form, errors, updateField, submitReservation, reservationCode } = useReservation()

  return (
    <div className="container page-shell reservation-shell">
      <div className="page-header narrow-heading">
        <div>
          <p className="eyebrow">Reserve a table</p>
          <h1>Plan your evening at Thikana.</h1>
        </div>
      </div>

      <div className="reservation-layout">
        <ReservationForm
          form={form}
          errors={errors}
          updateField={updateField}
          submitReservation={submitReservation}
          reservationCode={reservationCode}
        />

        <aside className="reservation-sidepanel">
          <div className="quick-info-card">
            <h3>Available slots</h3>
            <div className="slot-list">
              {reservationSlots.map((slot) => (
                <div key={slot.time} className="slot-item">
                  <span>{slot.time}</span>
                  <strong className={`status-${slot.status.toLowerCase()}`}>{slot.status}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="quick-info-card">
            <h3>Dining details</h3>
            <p>For intimate dinners, celebratory evenings, and family gatherings.</p>
            <Link to="/contact" className="btn btn-secondary block-button">
              Contact us
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
