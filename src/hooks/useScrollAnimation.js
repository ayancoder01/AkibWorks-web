import { useRef, useState, useEffect } from 'react'

export const useScrollAnimation = () => {
  const [isVisible] = useState(true)
  const ref = useRef()

  return [ref, isVisible]
}

export const useScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(Math.min(progress, 100))
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return scrollProgress
}

export const useParallax = () => {
  const ref = useRef()
  return [ref, 0]
}

export const useStaggerAnimation = () => {
  const [isVisible] = useState(true)
  const ref = useRef()

  return [ref, isVisible]
}
