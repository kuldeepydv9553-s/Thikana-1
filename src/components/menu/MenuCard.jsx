import { useNavigate } from 'react-router-dom'
import { formatCurrency } from '../../lib/utils'

export function MenuCard({ item, addToCart }) {
  const navigate = useNavigate()

  return (
    <article className="menu-card">
      <div className="menu-card-image">
        <img src={item.image} alt={item.name} />
      </div>
      <div className="menu-card-body">
        <div className="menu-card-topline">
          <div>
            <span className="tag">{item.category}</span>
            <h3>{item.name}</h3>
          </div>
          <strong>{formatCurrency(item.price)}</strong>
        </div>
        <p>{item.description}</p>
        <div className="menu-meta">
          <span className="meta-badge">{item.diet}</span>
          {item.spice !== 'None' && <span className="meta-badge spice-badge">{item.spice}</span>}
        </div>
        <div className="menu-actions">
          <button type="button" className="btn btn-secondary" onClick={() => navigate(`/menu/${item.slug}`)}>
            View Dish
          </button>
          <button type="button" className="btn btn-primary" onClick={() => addToCart(item)}>
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  )
}
