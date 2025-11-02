import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />
    }

    return this.props.children
  }
}

function ErrorFallback({ error }) {
  const { isDark } = useTheme()

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className={`min-h-screen flex items-center justify-center px-4 ${
      isDark ? 'bg-gray-900' : 'bg-white'
    }`}>
      <div className="text-center max-w-md mx-auto">
        {/* Error Icon */}
        <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center ${
          isDark ? 'bg-red-900/20' : 'bg-red-50'
        }`}>
          <svg className={`w-10 h-10 ${
            isDark ? 'text-red-400' : 'text-red-600'
          }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>

        {/* Error Message */}
        <h1 className={`text-2xl font-light mb-4 ${
          isDark ? 'text-white' : 'text-black'
        }`}>
          Something went wrong
        </h1>
        
        <p className={`text-lg mb-6 ${
          isDark ? 'text-gray-300' : 'text-gray-600'
        }`}>
          We're sorry, but something unexpected happened. Please try refreshing the page.
        </p>

        {/* Error Details (Development only) */}
        {process.env.NODE_ENV === 'development' && error && (
          <details className={`text-left mb-6 p-4 rounded-lg ${
            isDark ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-700'
          }`}>
            <summary className="cursor-pointer font-medium mb-2">Error Details</summary>
            <pre className="text-sm overflow-auto">
              {error.toString()}
            </pre>
          </details>
        )}

        {/* Action Buttons */}
        <div className="space-y-4">
          <button
            onClick={handleReload}
            className={`w-full px-6 py-3 rounded-lg font-medium transition-colors ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-black text-white hover:bg-gray-800'
            }`}
          >
            Refresh Page
          </button>
          
          <a
            href="mailto:akibworks@gmail.com"
            className={`block w-full px-6 py-3 rounded-lg font-medium border transition-colors ${
              isDark 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-black text-black hover:bg-black hover:text-white'
            }`}
          >
            Report Issue
          </a>
        </div>
      </div>
    </div>
  )
}

export default ErrorBoundary
