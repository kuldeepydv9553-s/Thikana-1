import { Link } from 'react-router-dom'
import { Minus, Plus, ShoppingBag, X } from 'lucide-react'
import { formatCurrency } from '../../lib/utils'

export function CartPanel({ cart, subtotal, tax, deliveryFee, updateCartItem, removeCartItem, isOpen, onClose }) {
  return (
    <>
      <div className={`cart-backdrop ${isOpen ? 'visible' : ''}`} onClick={onClose} />
      <aside className={`cart-panel ${isOpen ? 'open' : ''}`}>
        <div className="panel-header">
          <div>
            <p className="eyebrow">Your order</p>
            <h3>Cart</h3>
          </div>
          <button type="button" className="icon-button" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        {cart.length === 0 ? (
          <div className="empty-state">
            <ShoppingBag size={28} />
            <p>Your cart is empty.</p>
            <Link to="/menu" className="btn btn-primary block-button">
              Explore Menu
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {cart.map((item) => (
                <div className="cart-item" key={item.id}>
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-details">
                    <div className="cart-topline">
                      <h4>{item.name}</h4>
                      <button type="button" className="remove-cart" onClick={() => removeCartItem(item.id)}>
                        Remove
                      </button>
                    </div>
                    <div className="cart-controls">
                      <div className="qty-control">
                        <button type="button" onClick={() => updateCartItem(item.id, -1)} aria-label={`Decrease ${item.name}`}>
                          <Minus size={14} />
                        </button>
                        <span>{item.quantity}</span>
                        <button type="button" onClick={() => updateCartItem(item.id, 1)} aria-label={`Increase ${item.name}`}>
                          <Plus size={14} />
                        </button>
                      </div>
                      <strong>{formatCurrency(item.price * item.quantity)}</strong>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="line-item">
                <span>Subtotal</span>
                <strong>{formatCurrency(subtotal)}</strong>
              </div>
              <div className="line-item">
                <span>Tax</span>
                <strong>{formatCurrency(tax)}</strong>
              </div>
              <div className="line-item">
                <span>Delivery</span>
                <strong>{formatCurrency(deliveryFee)}</strong>
              </div>
              <div className="line-item total-line">
                <span>Total</span>
                <strong>{formatCurrency(subtotal + tax + deliveryFee)}</strong>
              </div>
              <Link to="/checkout" className="btn btn-primary block-button" onClick={onClose}>
                Checkout
              </Link>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
