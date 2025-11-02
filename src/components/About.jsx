import React from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function About() {
  const { isDark } = useTheme()
  const skills = [
    'React & JavaScript',
    'UI/UX Design', 
    'Node.js & Backend',
    'SEO & Performance'
  ]

  return (
    <section id="about" className={`py-16 md:py-20 relative ${
      isDark 
        ? 'bg-gradient-to-b from-gray-800 to-gray-900' 
        : 'bg-gradient-to-b from-white to-gray-50'
    }`}>
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute top-10 right-10 w-24 h-24 rounded-full opacity-40 ${
          isDark ? 'bg-gray-600' : 'bg-gray-200'
        }`}></div>
        <div className={`absolute bottom-20 left-10 w-16 h-16 rounded-full opacity-30 ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`}></div>
      </div>
      <div className="max-w-4xl mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl font-light mb-6 ${
            isDark ? 'text-white' : 'text-black'
          }`}>About</h2>
          <p className={`text-lg leading-relaxed max-w-2xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Professional web developer helping businesses establish their online presence with clean, modern websites.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className={`text-xl font-medium mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>My Approach</h3>
            <p className={`leading-relaxed mb-4 ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              I focus on creating websites that work. Clean design, fast loading times, and mobile-friendly layouts that help your business grow.
            </p>
            <p className={`leading-relaxed ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Every project starts with understanding your goals. Then I build a solution that fits your needs and budget.
            </p>
          </div>

          <div>
            <h3 className={`text-xl font-medium mb-4 ${
              isDark ? 'text-white' : 'text-black'
            }`}>Skills & Technologies</h3>
            <div className="grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <div key={skill} className={`text-sm py-2 px-3 rounded border transition-colors ${
                  isDark 
                    ? 'text-gray-300 bg-gray-800 border-gray-700' 
                    : 'text-gray-600 bg-white border-gray-200'
                }`}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: '5+', label: 'Years Experience' },
            { number: '50+', label: 'Projects Completed' },
            { number: '100%', label: 'Client Satisfaction' }
          ].map((stat, i) => (
            <div key={i}>
              <div className={`text-3xl font-light mb-2 ${
                isDark ? 'text-white' : 'text-black'
              }`}>{stat.number}</div>
              <div className={isDark ? 'text-gray-300' : 'text-gray-600'}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
