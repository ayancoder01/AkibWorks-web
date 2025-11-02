import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Services() {
  const { isDark } = useTheme()
  const services = [
    {
      title: 'Basic',
      price: '₹8,000',
      description: 'Simple landing page for small businesses',
      features: [
        'Single page website',
        'Contact information',
        'Mobile responsive',
        'Basic SEO'
      ]
    },
    {
      title: 'Standard',
      price: '₹15,000',
      description: 'Complete business website',
      features: [
        'Up to 5 pages',
        'Contact forms',
        'Social media integration',
        '3 months support'
      ],
      recommended: true
    },
    {
      title: 'Premium',
      price: '₹25,000',
      description: 'E-commerce solution',
      features: [
        'Online store setup',
        'Payment integration',
        'Order management',
        '6 months support'
      ]
    }
  ]

  return (
    <section id="services" className={`py-16 md:py-20 relative ${
      isDark 
        ? 'bg-gradient-to-b from-gray-900 to-gray-800' 
        : 'bg-gradient-to-b from-gray-50 to-white'
    }`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className={`absolute top-20 left-1/4 w-2 h-2 rounded-full ${
          isDark ? 'bg-gray-600' : 'bg-gray-300'
        }`}></div>
        <div className={`absolute top-40 right-1/3 w-1 h-1 rounded-full ${
          isDark ? 'bg-gray-700' : 'bg-gray-400'
        }`}></div>
        <div className={`absolute bottom-32 left-1/2 w-1.5 h-1.5 rounded-full ${
          isDark ? 'bg-gray-600' : 'bg-gray-300'
        }`}></div>
        <div className={`absolute bottom-20 right-1/4 w-1 h-1 rounded-full ${
          isDark ? 'bg-gray-700' : 'bg-gray-400'
        }`}></div>
      </div>
      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}>Our Services</h2>
          <p className={`max-w-3xl mx-auto text-base md:text-lg leading-relaxed px-4 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Transparent pricing with no hidden fees. Choose the package that fits your needs and budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {services.map((service) => (
            <div 
              key={service.title}
              className={`border p-6 md:p-8 relative overflow-hidden flex flex-col h-full transition-colors ${
                service.recommended 
                  ? (isDark ? 'border-white shadow-lg bg-gray-800' : 'border-black shadow-lg bg-white')
                  : (isDark ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white')
              }`}
            >
              {service.recommended && (
                <div className={`absolute top-0 right-0 text-xs uppercase tracking-wider px-3 py-1 ${
                  isDark ? 'bg-white text-black' : 'bg-black text-white'
                }`}>
                  Recommended
                </div>
              )}
              <h3 className={`text-xl font-medium mb-2 pt-2 ${
                isDark ? 'text-white' : 'text-black'
              }`}>{service.title}</h3>
              <div className={`text-3xl font-light mb-4 ${
                isDark ? 'text-white' : 'text-black'
              }`}>{service.price}</div>
              <p className={`text-sm mb-6 leading-relaxed ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>{service.description}</p>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {service.features.map((feature) => (
                  <li key={feature} className={`text-sm flex items-start gap-3 ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    <span className="text-green-500 mt-0.5 font-bold">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <a 
                href="#contact" 
                className={`block text-center py-3 px-6 font-medium transition-all duration-300 mt-auto rounded-sm ${
                  service.recommended 
                    ? (isDark ? 'bg-white text-black hover:bg-gray-200 shadow-md hover:shadow-lg' : 'bg-black text-white hover:bg-gray-800 shadow-md hover:shadow-lg')
                    : (isDark ? 'border-2 border-white text-white hover:bg-white hover:text-black' : 'border-2 border-black text-black hover:bg-black hover:text-white')
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className={`mb-4 ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Need something custom? Let's discuss your requirements.
          </p>
          <a href="#contact" className={`underline ${
            isDark ? 'text-white' : 'text-black'
          }`}>Contact for custom quote →</a>
        </div>
      </div>
    </section>
  )
}
