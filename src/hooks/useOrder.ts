import { useEffect, useState } from 'react'

export function useOrderTracking() {
  const statusList = [
    'Order Confirmed',
    'Preparing',
    'Ready',
    'Out for Delivery',
    'Completed',
  ]

  const demoDurationSeconds = 40
  const [elapsedSeconds, setElapsedSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((current) => Math.min(current + 1, demoDurationSeconds))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const progress = elapsedSeconds / demoDurationSeconds
  const step = Math.min(Math.floor(progress * statusList.length), statusList.length - 1)
  const secondsRemaining = demoDurationSeconds - elapsedSeconds

  return { step, statusList, progress, secondsRemaining }
}
