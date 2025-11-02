import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function NotFound() {
  const { isDark } = useTheme()

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="text-center max-w-lg mx-auto">
        {/* 404 Number */}
        <div className={`text-8xl font-light mb-6 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          404
        </div>

        {/* Error Message */}
        <h1 className={`text-3xl font-light mb-4 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          Page Not Found
        </h1>
        
        <p className={`text-lg mb-8 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Navigation Options */}
        <div className="space-y-4">
          <button
            onClick={() => window.history.back()}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Go Back
          </button>
          
          <a
            href="/"
            className={`block w-full px-6 py-3 rounded-lg font-medium border transition-colors ${
              isDark 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Return Home
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-12">
          <p className={`text-sm mb-4 ${
            isDark ? 'text-gray-400' : 'text-gray-500'
          }`}>
            Or explore these sections:
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            {[
              { label: 'About', href: '#about' },
              { label: 'Services', href: '#services' },
              { label: 'Portfolio', href: '#portfolio' },
              { label: 'Contact', href: '#contact' }
            ].map((link, i) => (
              <a
                key={i}
                href={link.href}
                className={`px-3 py-1 rounded transition-colors ${
                  isDark 
                    ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                    : 'text-gray-600 hover:text-black hover:bg-gray-100'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
