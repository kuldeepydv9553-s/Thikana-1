import { formatCurrency } from '../../lib/utils'
import { useOrderTracking } from '../../hooks/useOrder'
import { useLocation } from 'react-router-dom'
import { DeliveryTrackingMap } from '../../components/map/DeliveryTrackingMap'
import { demoDropoffCoordinates } from '../../lib/maps'

export function OrderTrackingPage() {
  const { step, statusList, progress, secondsRemaining } = useOrderTracking()
  const location = useLocation()
  const deliveryLocation = location.state?.deliveryLocation || demoDropoffCoordinates
  const orderNumber = location.state?.orderNumber || '#BRL-1048'

  return (
    <div className="container page-shell tracking-shell">
      <div className="page-header narrow-heading">
        <div>
          <p className="eyebrow">Live tracker</p>
          <h1>Track your order.</h1>
        </div>
      </div>

      <div className="tracking-card">
        <div className="tracking-summary">
          <div>
            <span>Order Number</span>
            <strong>{orderNumber}</strong>
          </div>
          <div>
            <span>Items</span>
            <strong>3 items</strong>
          </div>
          <div>
            <span>Total</span>
            <strong>{formatCurrency(1480)}</strong>
          </div>
          <div>
            <span>ETA</span>
            <strong>{secondsRemaining > 0 ? `~${secondsRemaining}s` : 'Arriving now'}</strong>
          </div>
        </div>

        <DeliveryTrackingMap destination={deliveryLocation} progress={progress} />
        <p className="demo-tracking-note">
          Demo tracking only — the delivery rider marker is simulated and does not show a real driver’s live location.
        </p>

        <div className="timeline">
          {statusList.map((label, index) => (
            <div key={label} className={`timeline-step ${index <= step ? 'active' : ''}`}>
              <span className="timeline-dot" />
              <div>
                <strong>{label}</strong>
                {index === 0 && <small>Placed 12:15 PM</small>}
                {index === 1 && <small>Kitchen in progress</small>}
                {index === 2 && <small>Ready to serve</small>}
                {index === 3 && <small>Heading your way</small>}
                {index === 4 && <small>Enjoy your meal</small>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
