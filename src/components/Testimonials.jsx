import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'
import { useScrollAnimation } from '../hooks/useScrollAnimation.js'

export default function Testimonials() {
  const { isDark } = useTheme()
  const testimonials = [
    {
      name: 'Priya Sharma',
      business: 'Web Designer',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      color: 'black',
      iconBg: 'bg-black',
      borderColor: 'border-gray-200',
      rotation: 'rotate-2'
    },
    {
      name: 'Rajesh Kumar',
      business: 'Web Designer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      color: 'black',
      iconBg: 'bg-gray-700',
      borderColor: 'border-gray-300',
      rotation: '-rotate-1'
    },
    {
      name: 'Meera Patel',
      business: 'Web Designer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 4,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      color: 'black',
      iconBg: 'bg-gray-800',
      borderColor: 'border-gray-400',
      rotation: 'rotate-1'
    }
  ]

  const [headerRef, headerVisible] = useScrollAnimation(0.1)
  const [testimonialsRef, testimonialsVisible] = useScrollAnimation(0.1)

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className={`text-center mb-16 ${headerVisible ? 'animate-fade-in-up' : 'opacity-0'}`} ref={headerRef}>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            WHAT CLIENTS SAY
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take my word for it. Here's what local business owners say about working with Akibworks.
          </p>
        </div>

        <div className={`flex flex-col lg:flex-row justify-center items-center gap-8 mb-12 stagger-children ${testimonialsVisible ? 'animate' : ''}`} ref={testimonialsRef}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className={`bg-slate-50 dark:bg-gray-800 rounded-2xl p-6 shadow-sm border ${testimonial.borderColor} ${testimonial.rotation} hover:rotate-0 transition-all duration-300 hover:shadow-lg hover-lift max-w-sm`}>
              {/* Header with Icon and Client Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${testimonial.iconBg} rounded-full flex items-center justify-center`}>
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">{testimonial.name}</h4>
                  <p className="text-sm text-slate-600 dark:text-gray-400">{testimonial.business}</p>
                </div>
              </div>

              {/* Testimonial Text */}
              <p className="text-slate-700 dark:text-gray-300 text-sm leading-relaxed mb-4">
                {testimonial.text}
              </p>

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? `text-${testimonial.color}-500` : 'text-gray-300'}`} 
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 bg-slate-50 dark:bg-gray-800 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-gray-700 max-w-xl mx-auto">
            <div className="text-center sm:text-left">
              <div className="font-semibold text-slate-900 dark:text-white text-lg">Join 50+ Happy Clients</div>
              <div className="text-sm text-slate-600 dark:text-gray-400 mt-1">Ready to grow your business online?</div>
            </div>
            <a href="#contact" className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
