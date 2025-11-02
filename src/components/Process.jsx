import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Process() {
  const { isDark } = useTheme()
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We start with a free consultation to understand your business, goals, and target audience. I\'ll analyze your needs and create a custom plan.',
      icon: '🎯',
      duration: '1-2 days'
    },
    {
      number: '02',
      title: 'Design & Wireframes',
      description: 'I create wireframes and design mockups that reflect your brand. You\'ll see exactly how your website will look before development begins.',
      icon: '🎨',
      duration: '2-3 days'
    },
    {
      number: '03',
      title: 'Development & Build',
      description: 'Using modern technologies, I build your website with clean code, responsive design, and optimal performance. SEO-ready from day one.',
      icon: '⚡',
      duration: '3-5 days'
    },
    {
      number: '04',
      title: 'Domain, Hosting & Launch',
      description: 'I register your domain (like yourshop.in), set up hosting, and launch your website. You get all login details and complete ownership.',
      icon: '🚀',
      duration: '1-2 days'
    },
    {
      number: '05',
      title: 'Support & Maintenance',
      description: '30-day support included. I\'ll help with any questions, minor updates, and ensure your website runs smoothly after launch.',
      icon: '🛠️',
      duration: '30 days'
    }
  ]

  return (
    <section className={`py-16 sm:py-24 ${
      isDark ? 'bg-gray-800' : 'bg-slate-50'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className={`font-heading text-3xl sm:text-4xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-slate-900'
          }`}>
            HOW I WORK
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-slate-600'
          }`}>
            Complete end-to-end service - from domain registration to website launch. You don't need to worry about anything technical.
          </p>
        </div>

        <div className="space-y-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="flex flex-col lg:flex-row items-start gap-8">
                <div className="flex-shrink-0 lg:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-xl ${
                      isDark ? 'bg-white text-black' : 'bg-black text-white'
                    }`}>
                      {step.number}
                    </div>
                    <div className="text-4xl">{step.icon}</div>
                  </div>
                  <div className="lg:pl-20">
                    <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                      isDark ? 'bg-gray-700 text-white' : 'bg-gray-100 text-black'
                    }`}>
                      {step.duration}
                    </div>
                  </div>
                </div>
                
                <div className={`flex-1 rounded-2xl p-8 shadow-sm border ${
                  isDark 
                    ? 'bg-gray-900 border-gray-700' 
                    : 'bg-white border-slate-200'
                }`}>
                  <h3 className={`font-heading text-2xl font-bold mb-4 ${
                    isDark ? 'text-white' : 'text-slate-900'
                  }`}>
                    {step.title}
                  </h3>
                  <p className={`leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-slate-600'
                  }`}>
                    {step.description}
                  </p>
                </div>
              </div>
              
              {index < steps.length - 1 && (
                <div className={`hidden lg:block absolute left-8 top-20 w-0.5 h-16 ${
                  isDark ? 'bg-gray-700' : 'bg-slate-200'
                }`}></div>
              )}
            </div>
          ))}
        </div>

        <div className={`rounded-2xl p-8 text-center ${
          isDark ? 'bg-gray-950 text-white' : 'bg-black text-white'
        }`}>
          <h3 className="font-heading text-2xl font-bold mb-4">Ready to Get Started?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Most projects are completed within 7-14 days. Let's discuss your project and get your business online quickly.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className={`inline-flex items-center justify-center rounded-lg px-8 py-4 font-semibold transition-colors ${
              isDark 
                ? 'bg-white text-black hover:bg-gray-200' 
                : 'bg-white text-black hover:bg-gray-100'
            }`}>
              Start Your Project
            </a>
            <a href="#portfolio" className="inline-flex items-center justify-center rounded-lg border-2 border-white text-white px-8 py-4 font-semibold hover:bg-white hover:text-black transition-colors">
              View Examples
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
