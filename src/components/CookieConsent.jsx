import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function CookieConsent() {
  const { isDark } = useTheme()
  const [showConsent, setShowConsent] = useState(false)

  useEffect(() => {
    // Check if user has already given consent
    const hasConsent = localStorage.getItem('cookieConsent')
    if (!hasConsent) {
      // Show consent banner after a short delay
      const timer = setTimeout(() => {
        setShowConsent(true)
      }, 2000)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'accepted')
    setShowConsent(false)
  }

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'declined')
    setShowConsent(false)
  }

  if (!showConsent) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-slide-up">
      <div className={`max-w-4xl mx-auto rounded-2xl p-6 shadow-2xl border backdrop-blur-xl ${
        isDark 
          ? 'bg-gray-900/95 border-gray-700 text-white' 
          : 'bg-white/95 border-gray-200 text-black'
      }`}>
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
          {/* Cookie Icon */}
          <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${
            isDark ? 'bg-white/10' : 'bg-black/5'
          }`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>

          {/* Content */}
          <div className="flex-1">
            <h3 className="font-semibold mb-2">We use cookies</h3>
            <p className={`text-sm leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. 
              By clicking "Accept", you consent to our use of cookies. 
              <a 
                href="/privacy-policy" 
                className={`underline ml-1 ${
                  isDark ? 'text-gray-200 hover:text-white' : 'text-gray-700 hover:text-black'
                }`}
              >
                Learn more
              </a>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <button
              onClick={handleDecline}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
            >
              Decline
            </button>
            <button
              onClick={handleAccept}
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Custom CSS for slide-up animation (add to your global CSS)
const slideUpStyles = `
@keyframes slide-up {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.animate-slide-up {
  animation: slide-up 0.3s ease-out;
}
`

// You can add this to your main CSS file or use a CSS-in-JS solution
if (typeof document !== 'undefined') {
  const style = document.createElement('style')
  style.textContent = slideUpStyles
  document.head.appendChild(style)
}
