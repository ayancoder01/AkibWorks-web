import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function LoadingScreen({ onLoadingComplete }) {
  const { isDark } = useTheme()
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval)
          // Add a small delay before hiding
          setTimeout(() => {
            setIsVisible(false)
            if (onLoadingComplete) {
              onLoadingComplete()
            }
          }, 500)
          return 100
        }
        return prev + Math.random() * 15 + 5 // Random increment between 5-20
      })
    }, 150)

    return () => clearInterval(interval)
  }, [onLoadingComplete])

  if (!isVisible) return null

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
      progress >= 100 ? 'opacity-0 scale-110' : 'opacity-100 scale-100'
    } ${isDark ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="text-center">
        {/* Minimalist Logo Animation */}
        <div className="mb-16 relative">
          <div className={`text-6xl font-extralight tracking-wider mb-4 transition-all duration-700 ${
            isDark ? 'text-white' : 'text-black'
          }`} style={{ 
            transform: `translateY(${20 - (progress * 0.2)}px)`,
            opacity: Math.min(1, progress / 50)
          }}>
            A
          </div>
          
          {/* Geometric Loading Element */}
          <div className="relative w-16 h-16 mx-auto">
            {/* Minimalist square that transforms */}
            <div 
              className={`absolute inset-0 border transition-all duration-300 ${
                isDark ? 'border-white' : 'border-black'
              }`}
              style={{
                transform: `rotate(${progress * 3.6}deg) scale(${0.5 + (progress / 200)})`,
                borderWidth: `${Math.max(1, 4 - (progress / 25))}px`
              }}
            ></div>
            
            {/* Inner dot */}
            <div 
              className={`absolute top-1/2 left-1/2 w-2 h-2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${
                isDark ? 'bg-white' : 'bg-black'
              }`}
              style={{
                opacity: progress > 20 ? 1 : 0,
                transform: `translate(-50%, -50%) scale(${progress / 100})`
              }}
            ></div>
          </div>
        </div>

        {/* Minimal Progress Indicator */}
        <div className="w-32 mx-auto mb-8">
          <div className={`w-full h-px ${
            isDark ? 'bg-gray-800' : 'bg-gray-200'
          }`}>
            <div 
              className={`h-full transition-all duration-500 ease-out ${
                isDark ? 'bg-white' : 'bg-black'
              }`}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Subtle Text */}
        <div 
          className={`text-xs font-light tracking-widest transition-opacity duration-500 ${
            isDark ? 'text-gray-500' : 'text-gray-400'
          }`}
          style={{ opacity: progress > 10 ? 1 : 0 }}
        >
          {Math.round(progress)}
        </div>
      </div>
    </div>
  )
}

// Hook to manage loading state
export const useLoadingScreen = () => {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return { isLoading, handleLoadingComplete }
}
