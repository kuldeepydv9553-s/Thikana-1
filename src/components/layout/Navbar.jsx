import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { CalendarDays, House, ShoppingBag, UtensilsCrossed, X } from 'lucide-react'

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  { to: '/about', label: 'Our Story' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reservation', label: 'Reservation' },
  { to: '/contact', label: 'Contact' },
]

export function Navbar({ cartCount, onToggleCart, mobileOpen, setMobileOpen }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container nav-shell">
        <Link to="/" className="brand-mark" aria-label="Thikana home">
          <span className="brand-icon">T</span>
          <span className="brand-copy">
            <strong>Thikana</strong>
            <small>Restaurant &amp; Lounge</small>
          </span>
        </Link>

        <nav className="nav-links desktop-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <button type="button" className="cart-trigger desktop-cart" onClick={onToggleCart} aria-label="Open cart">
            <ShoppingBag size={18} />
            {cartCount > 0 && <span>{cartCount}</span>}
          </button>
          <Link to="/reservation" className="btn btn-primary nav-cta">
            Book a Table
          </Link>
          <button
            type="button"
            className="menu-toggle mobile-only"
            onClick={() => setMobileOpen((value) => !value)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <span className="hamburger" />}
          </button>
        </div>
      </div>

      <div className={`mobile-drawer ${mobileOpen ? 'open' : ''}`}>
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) => `mobile-link ${isActive ? 'active' : ''}`}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="mobile-footer">
          <button type="button" className="cart-trigger" onClick={onToggleCart}>
            <ShoppingBag size={18} />
            Cart ({cartCount})
          </button>
          <Link to="/reservation" className="btn btn-primary block-button">
            Book a Table
          </Link>
        </div>
      </div>

      <nav className="mobile-app-nav" aria-label="Quick navigation">
        <NavLink to="/" end className={({ isActive }) => `mobile-app-link ${isActive ? 'active' : ''}`}>
          <House size={20} />
          <span>Home</span>
        </NavLink>
        <NavLink to="/menu" className={({ isActive }) => `mobile-app-link ${isActive ? 'active' : ''}`}>
          <UtensilsCrossed size={20} />
          <span>Menu</span>
        </NavLink>
        <NavLink to="/reservation" className={({ isActive }) => `mobile-app-link ${isActive ? 'active' : ''}`}>
          <CalendarDays size={20} />
          <span>Book</span>
        </NavLink>
        <button type="button" className="mobile-app-link" onClick={onToggleCart} aria-label={`Open cart, ${cartCount} items`}>
          <span className="mobile-cart-icon">
            <ShoppingBag size={20} />
            {cartCount > 0 && <span className="mobile-cart-count">{cartCount}</span>}
          </span>
          <span>Cart</span>
        </button>
      </nav>
    </header>
  )
}
