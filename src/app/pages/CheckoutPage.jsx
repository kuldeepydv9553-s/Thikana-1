import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LocateFixed } from 'lucide-react'
import { formatCurrency } from '../../lib/utils'

export function CheckoutPage({ cart, subtotal, tax, deliveryFee, clearCart }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    orderType: 'Delivery',
    address: '',
    landmark: '',
    city: 'Bareilly',
    pincode: '',
    coupon: '',
    method: 'Cash on Delivery',
  })
  const [errors, setErrors] = useState({})
  const [deliveryLocation, setDeliveryLocation] = useState(null)
  const [locationMessage, setLocationMessage] = useState('')
  const [locating, setLocating] = useState(false)
  const navigate = useNavigate()

  const total = subtotal + tax + deliveryFee
  const discount = form.coupon.trim() === 'WELCOME10' ? 120 : 0
  const grandTotal = Math.max(total - discount, 0)

  const updateField = (field, value) => {
    setForm((current) => ({ ...current, [field]: value }))
  }

  const locateDeliveryAddress = () => {
    if (!navigator.geolocation) {
      setLocationMessage('Location is not supported by this browser. You can still enter your address.')
      return
    }

    setLocating(true)
    setLocationMessage('')
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const coordinates = [coords.latitude, coords.longitude]
        setDeliveryLocation(coordinates)
        setLocationMessage('Location added for the demo delivery map.')
        setLocating(false)
      },
      (error) => {
        const message = error.code === error.PERMISSION_DENIED
          ? 'Location permission was denied. You can still enter your address.'
          : error.code === error.TIMEOUT
            ? 'Could not get your location in time. Please try again or enter your address.'
            : 'Could not get your location. You can still enter your address.'
        setLocationMessage(message)
        setLocating(false)
      },
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 60000 },
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const nextErrors = {}

    if (!form.name.trim()) nextErrors.name = 'Full name is required.'
    if (!form.phone.trim()) nextErrors.phone = 'Phone number is required.'
    if (!form.email.trim()) nextErrors.email = 'Email is required.'
    if (form.orderType === 'Delivery') {
      if (!form.address.trim()) nextErrors.address = 'Address is required.'
      if (!form.pincode.trim()) nextErrors.pincode = 'Pincode is required.'
    }

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors)
      return
    }

    const orderNumber = `#BRL-${Math.floor(1000 + Math.random() * 9000)}`
    clearCart()
    navigate('/order-confirmation', {
      state: {
        orderNumber,
        deliveryLocation: form.orderType === 'Delivery' ? deliveryLocation : null,
      },
    })
  }

  if (!cart.length) {
    return (
      <div className="container page-shell empty-order-shell">
        <p className="eyebrow">Your cart is empty</p>
        <h1>Start with a signature bite.</h1>
        <Link to="/menu" className="btn btn-primary">
          Browse Menu
        </Link>
      </div>
    )
  }

  return (
    <div className="container page-shell">
      <div className="page-header narrow-heading">
        <div>
          <p className="eyebrow">Checkout</p>
          <h1>Complete your order.</h1>
        </div>
      </div>

      <div className="checkout-layout">
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h3>Customer details</h3>
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
          </div>

          <div className="form-section">
            <h3>Order type</h3>
            <div className="option-pills">
              {['Delivery', 'Pickup'].map((option) => (
                <button
                  key={option}
                  type="button"
                  className={`pill ${form.orderType === option ? 'active' : ''}`}
                  onClick={() => updateField('orderType', option)}
                >
                  {option}
                </button>
              ))}
            </div>

            {form.orderType === 'Delivery' && (
              <>
                <div className="field">
                  <div className="field-heading">
                    <label htmlFor="delivery-address">Address</label>
                    <button
                      type="button"
                      className="location-button"
                      onClick={locateDeliveryAddress}
                      disabled={locating}
                      aria-label="Use my current location"
                    >
                      <LocateFixed size={16} />
                      {locating ? 'Locating…' : 'Use my location'}
                    </button>
                  </div>
                  <input id="delivery-address" type="text" value={form.address} onChange={(event) => updateField('address', event.target.value)} />
                  {errors.address && <small>{errors.address}</small>}
                  {locationMessage && <small className={deliveryLocation ? 'location-success' : ''}>{locationMessage}</small>}
                </div>
                <div className="field-grid">
                  <label className="field">
                    <span>Landmark</span>
                    <input type="text" value={form.landmark} onChange={(event) => updateField('landmark', event.target.value)} />
                  </label>
                  <label className="field">
                    <span>City</span>
                    <input type="text" value={form.city} onChange={(event) => updateField('city', event.target.value)} />
                  </label>
                </div>
                <label className="field">
                  <span>Pincode</span>
                  <input type="text" value={form.pincode} onChange={(event) => updateField('pincode', event.target.value)} />
                  {errors.pincode && <small>{errors.pincode}</small>}
                </label>
              </>
            )}
          </div>

          <div className="form-section">
            <h3>Payment</h3>
            <div className="option-pills">
              {['Cash on Delivery', 'UPI', 'Card'].map((method) => (
                <button
                  key={method}
                  type="button"
                  className={`pill ${form.method === method ? 'active' : ''}`}
                  onClick={() => updateField('method', method)}
                >
                  {method}
                </button>
              ))}
            </div>
          </div>
        </form>

        <aside className="checkout-summary">
          <h3>Order summary</h3>
          {cart.map((item) => (
            <div key={item.id} className="order-row">
              <div>
                <strong>{item.name}</strong>
                <span>{item.quantity}x</span>
              </div>
              <strong>{formatCurrency(item.price * item.quantity)}</strong>
            </div>
          ))}

          <div className="coupon-box">
            <input
              type="text"
              value={form.coupon}
              onChange={(event) => updateField('coupon', event.target.value)}
              placeholder="Coupon code"
            />
            <button type="button" onClick={() => updateField('coupon', 'WELCOME10')}>
              Apply
            </button>
          </div>

          <div className="summary-total-group">
            <div className="line-item"><span>Subtotal</span><strong>{formatCurrency(subtotal)}</strong></div>
            <div className="line-item"><span>Tax</span><strong>{formatCurrency(tax)}</strong></div>
            <div className="line-item"><span>Delivery</span><strong>{formatCurrency(deliveryFee)}</strong></div>
            {discount > 0 && <div className="line-item"><span>Discount</span><strong>-{formatCurrency(discount)}</strong></div>}
            <div className="line-item total-line"><span>Grand total</span><strong>{formatCurrency(grandTotal)}</strong></div>
          </div>

          <button type="submit" className="btn btn-primary block-button" onClick={handleSubmit}>
            Place Order
          </button>
        </aside>
      </div>
    </div>
  )
}
