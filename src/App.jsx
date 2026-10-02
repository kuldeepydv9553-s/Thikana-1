import { useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes, useLocation } from 'react-router-dom'
import './App.css'

import { CartPanel } from './components/cart/CartPanel'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { AboutPage } from './app/pages/AboutPage'
import { CheckoutPage } from './app/pages/CheckoutPage'
import { ContactPage } from './app/pages/ContactPage'
import { GalleryPage } from './app/pages/GalleryPage'
import { HomePage } from './app/pages/HomePage'
import { MenuDetailPage } from './app/pages/MenuDetailPage'
import { MenuPage } from './app/pages/MenuPage'
import { OrderConfirmationPage } from './app/pages/OrderConfirmationPage'
import { OrderTrackingPage } from './app/pages/OrderTrackingPage'
import { ReservationPage } from './app/pages/ReservationPage'
import { useCart } from './hooks/useCart'

function App() {
  return (
    <BrowserRouter>
      <RestaurantApp />
    </BrowserRouter>
  )
}

function RestaurantApp() {
  const { cart, subtotal, tax, deliveryFee, cartCount, addToCart, updateCartItem, removeCartItem, clearCart } = useCart()
  const location = useLocation()
  const [navigationState, setNavigationState] = useState(() => ({
    pathname: location.pathname,
    mobileOpen: false,
    cartOpen: false,
  }))
  const isCurrentPath = navigationState.pathname === location.pathname
  const mobileOpen = isCurrentPath && navigationState.mobileOpen
  const cartOpen = isCurrentPath && navigationState.cartOpen

  const setMobileOpen = (value) => {
    setNavigationState((current) => {
      const wasOpenOnCurrentPath = current.pathname === location.pathname && current.mobileOpen
      return {
        pathname: location.pathname,
        mobileOpen: typeof value === 'function' ? value(wasOpenOnCurrentPath) : value,
        cartOpen: current.pathname === location.pathname && current.cartOpen,
      }
    })
  }

  const toggleCart = () => {
    setNavigationState((current) => ({
      pathname: location.pathname,
      mobileOpen: current.pathname === location.pathname && current.mobileOpen,
      cartOpen: !(current.pathname === location.pathname && current.cartOpen),
    }))
  }

  return (
    <div className="app-shell">
      <Navbar
        cartCount={cartCount}
        onToggleCart={toggleCart}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
      />

      <main className="site-main">
        <Routes>
          <Route path="/" element={<HomePage addToCart={addToCart} />} />
          <Route path="/menu" element={<MenuPage addToCart={addToCart} />} />
          <Route path="/menu/:slug" element={<MenuDetailPage addToCart={addToCart} />} />
          <Route path="/reservation" element={<ReservationPage />} />
          <Route
            path="/checkout"
            element={
              <CheckoutPage
                cart={cart}
                subtotal={subtotal}
                tax={tax}
                deliveryFee={deliveryFee}
                clearCart={clearCart}
              />
            }
          />
          <Route path="/order-confirmation" element={<OrderConfirmationPage />} />
          <Route path="/order-tracking" element={<OrderTrackingPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />

      <CartPanel
        cart={cart}
        subtotal={subtotal}
        tax={tax}
        deliveryFee={deliveryFee}
        updateCartItem={updateCartItem}
        removeCartItem={removeCartItem}
        isOpen={cartOpen}
        onClose={() => setNavigationState((current) => ({
          ...current,
          pathname: location.pathname,
          cartOpen: false,
        }))}
      />
    </div>
  )
}

export default App
