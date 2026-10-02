import { useEffect, useMemo, useState } from 'react'
import type { CartEntry, MenuItem } from '../types/order'

const CART_STORAGE_KEY = 'thikana-cart'

export function useCart() {
  const [cart, setCart] = useState<CartEntry[]>(() => {
    if (typeof window === 'undefined') return []
    try {
      const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || '[]')
      return Array.isArray(saved) ? saved : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
  }, [cart])

  const cartCount = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  )

  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  )

  const tax = subtotal * 0.05
  const deliveryFee = cart.length > 0 ? 65 : 0

  const addToCart = (item: MenuItem, quantity = 1) => {
    setCart((current) => {
      const existing = current.find((entry) => entry.id === item.id)
      if (existing) {
        return current.map((entry) =>
          entry.id === item.id
            ? { ...entry, quantity: entry.quantity + quantity }
            : entry,
        )
      }
      return [...current, { ...item, quantity }]
    })
  }

  const updateCartItem = (itemId: number, delta: number) => {
    setCart((current) =>
      current
        .map((entry) =>
          entry.id === itemId
            ? { ...entry, quantity: entry.quantity + delta }
            : entry,
        )
        .filter((entry) => entry.quantity > 0),
    )
  }

  const removeCartItem = (itemId: number) => {
    setCart((current) => current.filter((entry) => entry.id !== itemId))
  }

  const clearCart = () => setCart([])

  return {
    cart,
    cartCount,
    subtotal,
    tax,
    deliveryFee,
    addToCart,
    updateCartItem,
    removeCartItem,
    clearCart,
  }
}
