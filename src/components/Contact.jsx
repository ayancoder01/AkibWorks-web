import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Contact() {
  const { isDark } = useTheme()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null) // 'success', 'error', or null
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    const name = formData.get('name').trim()
    const email = formData.get('email').trim()
    const message = formData.get('message').trim()
    
    // Basic validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!name || !emailRegex.test(email) || !message) {
      setSubmitStatus('error')
      setIsSubmitting(false)
      return
    }

    try {
      // Using Netlify Forms (works when deployed to Netlify)
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          name,
          email,
          message
        }).toString()
      })

      if (response.ok) {
        setSubmitStatus('success')
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className={`py-24 sm:py-32 relative overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
        : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
    }`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className={`inline-block px-6 py-3 rounded-full text-sm font-medium mb-6 ${
            isDark 
              ? 'bg-white/10 text-gray-300 border border-white/20' 
              : 'bg-black/5 text-gray-600 border border-black/10'
          }`}>
            Let's Work Together
          </div>
          <h2 className={`text-4xl sm:text-5xl lg:text-6xl font-light mb-8 leading-tight ${
            isDark ? 'text-white' : 'text-black'
          }`}>
            Ready to Start Your
            <span className={`block ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>Next Project?</span>
          </h2>
          <p className={`text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transform your business with a professional website. Let's discuss your vision and create something amazing together.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {[
            {
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
              title: "Fast Response",
              description: "Usually respond within 2-4 hours during business days"
            },
            {
              icon: "M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z",
              title: "Free Consultation",
              description: "No commitment required, just honest professional advice"
            },
            {
              icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
              title: "Custom Solutions",
              description: "Tailored specifically to your business needs and goals"
            }
          ].map((feature, i) => (
            <div key={i} className={`group text-center backdrop-blur-sm rounded-2xl p-8 border hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
              isDark 
                ? 'bg-gray-800/60 border-gray-700/40 hover:bg-gray-800/80 hover:border-gray-600/60' 
                : 'bg-white/70 border-gray-200/50 hover:bg-white/90 hover:border-gray-300/70'
            }`}>
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 ${
                isDark 
                  ? 'bg-white text-black' 
                  : 'bg-black text-white'
              }`}>
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={feature.icon} />
                </svg>
              </div>
              <h3 className={`text-xl font-semibold mb-3 ${
                isDark ? 'text-white' : 'text-black'
              }`}>{feature.title}</h3>
              <p className={isDark ? 'text-gray-300' : 'text-gray-600'}>{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="max-w-5xl mx-auto">
          <div className={`backdrop-blur-xl rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl border ${
            isDark 
              ? 'bg-gray-900/80 border-gray-700/50 shadow-black/30' 
              : 'bg-white/95 border-gray-200/50 shadow-gray-900/10'
          }`}>
            <div className="text-center mb-12">
              <h3 className={`text-3xl sm:text-4xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>Send Me a Message</h3>
              <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                Fill out the form below and I'll get back to you as soon as possible
              </p>
            </div>
            
            <form 
              onSubmit={handleSubmit} 
              className="space-y-8"
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
            >
              {/* Hidden field for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              
              {/* Honeypot field for spam protection */}
              <div style={{ display: 'none' }}>
                <label>Don't fill this out: <input name="bot-field" /></label>
              </div>

              {/* Success/Error Messages */}
              {submitStatus === 'success' && (
                <div className={`p-4 rounded-xl border ${
                  isDark 
                    ? 'bg-green-900/20 border-green-700 text-green-300' 
                    : 'bg-green-50 border-green-200 text-green-800'
                }`}>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-medium">Message sent successfully!</span>
                  </div>
                  <p className="mt-1 text-sm opacity-90">Thank you for reaching out. I'll get back to you within 24 hours.</p>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className={`p-4 rounded-xl border ${
                  isDark 
                    ? 'bg-red-900/20 border-red-700 text-red-300' 
                    : 'bg-red-50 border-red-200 text-red-800'
                }`}>
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="font-medium">Something went wrong</span>
                  </div>
                  <p className="mt-1 text-sm opacity-90">Please check your information and try again, or email me directly at akibworks@gmail.com</p>
                </div>
              )}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group">
                  <label className={`block text-sm font-semibold mb-3 transition-colors ${
                    isDark 
                      ? 'text-gray-300 group-focus-within:text-white' 
                      : 'text-gray-700 group-focus-within:text-black'
                  }`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className={`w-full px-6 py-4 border rounded-xl focus:ring-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700/60 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700/80 focus:ring-white/20 focus:border-white' 
                        : 'bg-gray-50/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-black/20 focus:border-black'
                    }`}
                  />
                </div>
                <div className="group">
                  <label className={`block text-sm font-semibold mb-3 transition-colors ${
                    isDark 
                      ? 'text-gray-300 group-focus-within:text-white' 
                      : 'text-gray-700 group-focus-within:text-black'
                  }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className={`w-full px-6 py-4 border rounded-xl focus:ring-2 transition-all duration-300 ${
                      isDark 
                        ? 'bg-gray-700/60 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700/80 focus:ring-white/20 focus:border-white' 
                        : 'bg-gray-50/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-black/20 focus:border-black'
                    }`}
                  />
                </div>
              </div>
              
              <div className="group">
                <label className={`block text-sm font-semibold mb-3 transition-colors ${
                  isDark 
                    ? 'text-gray-300 group-focus-within:text-white' 
                    : 'text-gray-700 group-focus-within:text-black'
                }`}>
                  Project Details
                </label>
                <textarea
                  name="message"
                  required
                  rows="6"
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  className={`w-full px-6 py-4 border rounded-xl focus:ring-2 transition-all duration-300 resize-vertical min-h-[150px] ${
                    isDark 
                      ? 'bg-gray-700/60 border-gray-600 text-white placeholder-gray-400 focus:bg-gray-700/80 focus:ring-white/20 focus:border-white' 
                      : 'bg-gray-50/80 border-gray-300 text-gray-900 placeholder-gray-500 focus:bg-white focus:ring-black/20 focus:border-black'
                  }`}
                ></textarea>
              </div>
              
              <div className="text-center pt-8">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`group inline-flex items-center gap-3 px-10 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300 font-semibold text-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none ${
                    isDark 
                      ? 'bg-white text-black hover:bg-gray-100 hover:shadow-white/20 disabled:hover:bg-white' 
                      : 'bg-black text-white hover:bg-gray-800 hover:shadow-black/30 disabled:hover:bg-black'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </>
                  )}
                </button>
                <p className={`text-sm mt-4 ${
                  isDark ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  I'll respond within 24 hours • No spam, ever
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
