import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export function OrderConfirmationPage() {
  const location = useLocation()
  const orderNumber = location.state?.orderNumber || '#BRL-1048'
  const deliveryLocation = location.state?.deliveryLocation

  return (
    <div className="container confirmation-shell">
      <motion.div
        className="confirmation-card"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="confirmation-icon"><Check size={24} /></div>
        <p className="eyebrow">Order confirmed</p>
        <h1>{orderNumber}</h1>
        <p>Your table-side culinary journey is on the way. Estimated prep time: 25-30 minutes.</p>
        <div className="confirmation-actions">
          <Link
            to="/order-tracking"
            state={{ orderNumber, deliveryLocation }}
            className="btn btn-primary"
          >
            Track Order
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back to Home
          </Link>
        </div>
      </motion.div>
    </div>
  )
}
