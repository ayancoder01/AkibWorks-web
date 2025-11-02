import React, { useState, useEffect } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const { isDark, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'services', 'portfolio', 'testimonials']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  return (
    <header className={`fixed top-0 w-full z-50 backdrop-blur-sm border-b transition-all duration-300 ${
      isDark 
        ? 'bg-gray-900/95 border-gray-700' 
        : 'bg-white/95 border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-medium group transition-all duration-300 hover:scale-105">
              <span className={`transition-colors duration-300 ${
                isDark 
                  ? 'text-white group-hover:text-gray-200' 
                  : 'text-black group-hover:text-gray-800'
              }`}>Akib</span>
              <span className={`transition-colors duration-300 ${
                isDark 
                  ? 'text-gray-400 group-hover:text-white' 
                  : 'text-gray-600 group-hover:text-black'
              }`}>works</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            {[
              { href: '#about', label: 'About', section: 'about' },
              { href: '#services', label: 'Services', section: 'services' },
              { href: '#portfolio', label: 'Portfolio', section: 'portfolio' },
              { href: '#testimonials', label: 'Reviews', section: 'testimonials' }
            ].map(({ href, label, section }) => (
              <a 
                key={section}
                href={href} 
                className={`text-sm transition-all duration-300 px-4 py-2 rounded-md ${
                  activeSection === section 
                    ? (isDark ? 'text-black bg-white' : 'text-white bg-black')
                    : (isDark 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                      )
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          
          {/* Right Side Controls */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              )}
            </button>
            
            {/* CTA Button */}
            <a 
              href="#contact" 
              className={`hidden sm:inline-block px-6 py-2 text-sm transition-all duration-300 hover:scale-105 hover:shadow-lg rounded-sm ${
                isDark 
                  ? 'bg-white text-black hover:bg-gray-200' 
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              Contact
            </a>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className={`lg:hidden p-2 rounded-md transition-all duration-300 hover:scale-110 ${
                isDark 
                  ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                  : 'text-gray-600 hover:text-black hover:bg-gray-100'
              }`}
              aria-label="Toggle menu"
            >
              <svg className={`w-6 h-6 transition-transform duration-300 ${open ? 'rotate-90' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`lg:hidden border-t backdrop-blur-sm overflow-hidden transition-all duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } ${
          isDark 
            ? 'border-gray-700 bg-gray-900/95' 
            : 'border-gray-200 bg-white/95'
        }`}>
          <div className="px-6 py-4 space-y-2">
            {[
              { href: '#about', label: 'About', section: 'about' },
              { href: '#services', label: 'Services', section: 'services' },
              { href: '#portfolio', label: 'Portfolio', section: 'portfolio' },
              { href: '#testimonials', label: 'Reviews', section: 'testimonials' }
            ].map(({ href, label, section }) => (
              <a 
                key={section}
                href={href} 
                className={`block text-sm transition-all duration-300 px-4 py-3 rounded-md ${
                  activeSection === section 
                    ? (isDark ? 'text-black bg-white' : 'text-white bg-black')
                    : (isDark 
                        ? 'text-gray-300 hover:text-white hover:bg-gray-800' 
                        : 'text-gray-600 hover:text-black hover:bg-gray-100'
                      )
                }`}
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            ))}
            <a 
              href="#contact" 
              className={`block mt-4 text-sm font-medium transition-all duration-300 px-4 py-3 rounded-md ${
                isDark 
                  ? 'text-white hover:bg-white hover:text-black' 
                  : 'text-black hover:bg-black hover:text-white'
              }`}
              onClick={() => setOpen(false)}
            >
              Contact →
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
