import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Hero() {
  const { isDark } = useTheme()

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden">
      {/* Modern gradient background */}
      <div className={`absolute inset-0 ${isDark ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'}`}></div>
      
      {/* Geometric background elements */}
      <div className="absolute inset-0">
        {/* Large primary circle */}
        <div className={`absolute -top-20 -right-20 w-96 h-96 rounded-full opacity-40 blur-3xl animate-pulse ${
          isDark 
            ? 'bg-gradient-to-br from-blue-900/50 to-purple-900/50' 
            : 'bg-gradient-to-br from-blue-100 to-purple-100'
        }`}></div>
        
        {/* Secondary circle */}
        <div className={`absolute top-1/3 -left-32 w-80 h-80 rounded-full opacity-30 blur-2xl ${
          isDark 
            ? 'bg-gradient-to-tr from-green-900/40 to-blue-900/40' 
            : 'bg-gradient-to-tr from-green-100 to-blue-100'
        }`}></div>
        
        {/* Small accent circles */}
        <div className={`absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full opacity-25 blur-xl animate-bounce ${
          isDark 
            ? 'bg-gradient-to-r from-purple-900/30 to-pink-900/30' 
            : 'bg-gradient-to-r from-purple-200 to-pink-200'
        }`}></div>
        <div className={`absolute top-1/2 left-1/3 w-24 h-24 rounded-full opacity-20 blur-lg ${
          isDark 
            ? 'bg-gradient-to-l from-yellow-900/30 to-orange-900/30' 
            : 'bg-gradient-to-l from-yellow-100 to-orange-100'
        }`}></div>
        
        {/* Geometric shapes */}
        <div className={`absolute top-20 left-20 w-16 h-16 opacity-10 rotate-45 blur-sm ${
          isDark ? 'bg-gray-600' : 'bg-gray-200'
        }`}></div>
        <div className={`absolute bottom-32 right-32 w-12 h-12 opacity-15 rotate-12 blur-sm ${
          isDark ? 'bg-blue-600' : 'bg-blue-200'
        }`}></div>
        
        {/* Floating dots pattern */}
        <div className="absolute top-1/4 left-1/2 grid grid-cols-3 gap-4 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div key={i} className={`w-2 h-2 rounded-full ${
              isDark ? 'bg-gray-300' : 'bg-gray-400'
            }`}></div>
          ))}
        </div>
        
        {/* Subtle grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${isDark ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.15)'} 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
            
          <h1 className={`text-5xl lg:text-6xl font-light leading-tight mb-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Expert Web Development
            <span className={`block ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>& Design</span>
          </h1>
            
          <p className={`text-lg leading-relaxed mb-8 max-w-2xl ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional web developer with 5+ years of experience. Creating clean, modern websites for businesses with complete setup and deployment.
          </p>
            
          <div className={`flex flex-wrap gap-8 mb-10 text-sm ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            {['Expert Development', '5+ Years Experience', 'Quick Delivery'].map((text, i) => (
              <div key={i} className="flex items-center gap-2">
                <span className={`w-1 h-1 rounded-full ${
                  isDark ? 'bg-white' : 'bg-black'
                }`}></span>
                <span>{text}</span>
              </div>
            ))}
          </div>
            
          <div className="flex flex-wrap gap-4">
            <a 
              href="#contact" 
              className={`inline-block px-8 py-3 font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Get Started
            </a>
            <a 
              href="#portfolio" 
              className={`inline-block px-8 py-3 border font-medium transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'border-white text-white hover:bg-white hover:text-black' 
                  : 'border-black text-black hover:bg-black hover:text-white'
              }`}
            >
              View Work
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
