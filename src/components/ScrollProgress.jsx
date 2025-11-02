import React from 'react'
import { useScrollProgress } from '../hooks/useScrollAnimation.js'
import { useTheme } from '../context/ThemeContext.jsx'

export default function ScrollProgress() {
  const scrollProgress = useScrollProgress()
  const { isDark } = useTheme()

  return (
    <div className={`fixed top-0 left-0 w-full h-1 z-[60] backdrop-blur-sm ${
      isDark 
        ? 'bg-gray-800/20' 
        : 'bg-gray-100/30'
    }`}>
      <div 
        className={`h-full transition-all duration-300 ease-out ${
          isDark 
            ? 'bg-white shadow-sm' 
            : 'bg-black shadow-sm'
        }`}
        style={{ 
          width: `${scrollProgress}%`,
          minWidth: scrollProgress > 0 ? '1px' : '0px'
        }}
      />
    </div>
  )
}
