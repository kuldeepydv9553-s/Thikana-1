import { useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { ChevronRight, Minus, Plus } from 'lucide-react'
import { menuItems } from '../../data/menu'
import { formatCurrency } from '../../lib/utils'

export function MenuDetailPage({ addToCart }) {
  const { slug } = useParams()
  const item = menuItems.find((entry) => entry.slug === slug)
  const [quantity, setQuantity] = useState(1)
  const navigate = useNavigate()

  if (!item) {
    return <Navigate to="/menu" replace />
  }

  return (
    <div className="container detail-shell">
      <button type="button" className="back-link" onClick={() => navigate('/menu')}>
        <ChevronRight size={16} className="back-icon" />
        Back to menu
      </button>
      <div className="detail-layout">
        <div className="detail-image-wrap">
          <img src={item.image} alt={item.name} className="detail-image" />
        </div>
        <div className="detail-copy">
          <div className="detail-tags">
            <span className="tag">{item.category}</span>
            <span className="tag">{item.diet}</span>
            <span className="tag">{item.spice}</span>
          </div>
          <h1>{item.name}</h1>
          <p className="detail-price">{formatCurrency(item.price)}</p>
          <p>{item.description}</p>

          <div className="detail-ingredients">
            <strong>Ingredients</strong>
            <div className="ingredient-list">
              {item.ingredients.map((ingredient) => (
                <span key={ingredient}>{ingredient}</span>
              ))}
            </div>
          </div>

          <div className="detail-purchase">
            <div className="qty-control large-qty">
              <button type="button" onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">
                <Minus size={16} />
              </button>
              <span>{quantity}</span>
              <button type="button" onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">
                <Plus size={16} />
              </button>
            </div>
            <button type="button" className="btn btn-primary" onClick={() => addToCart(item, quantity)}>
              Add to Cart · {formatCurrency(item.price * quantity)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
