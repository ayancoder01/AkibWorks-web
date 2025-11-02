import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Loading() {
  const { isDark } = useTheme()

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="text-center">
        {/* Logo/Brand */}
        <div className="mb-8">
          <h1 className={`text-4xl font-light ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            <span>Akib</span>
            <span className={isDark ? 'text-gray-400' : 'text-gray-600'}>works</span>
          </h1>
        </div>

        {/* Loading Animation */}
        <div className="relative">
          <div className={`w-16 h-16 border-4 border-t-4 rounded-full animate-spin ${
            isDark 
              ? 'border-gray-700 border-t-white' 
              : 'border-gray-200 border-t-black'
          }`}></div>
        </div>

        {/* Loading Text */}
        <p className={`mt-6 text-sm ${
          isDark ? 'text-gray-400' : 'text-gray-600'
        }`}>
          Loading your experience...
        </p>
      </div>
    </div>
  )
}

// Hook for managing loading state
export const useLoading = () => {
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  return isLoading
}
