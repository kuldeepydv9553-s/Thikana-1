import { Link } from 'react-router-dom'
import { restaurantInfo } from '../../data/restaurant'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-shell">
        <div>
          <h3>Thikana</h3>
          <p>Modern Indian dining, warm evenings and unforgettable plates.</p>
        </div>
        <div className="footer-links">
          <Link to="/about">Our Story</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/reservation">Reservation</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="footer-meta">
          <span>{restaurantInfo.address}</span>
          <span>{restaurantInfo.phone}</span>
        </div>
      </div>
    </footer>
  )
}
