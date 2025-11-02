import React from 'react'
import { SITE } from '../config/site.js'
import { useTheme } from '../context/ThemeContext.jsx'

export default function Footer() {
  const { isDark } = useTheme()
  const services = [
    { name: 'Business Websites', href: '#services' },
    { name: 'Online Stores', href: '#services' },
    { name: 'Landing Pages', href: '#services' },
    { name: 'Logo Design', href: '#services' },
    { name: 'Domain & Hosting', href: '#services' },
    { name: 'Website Maintenance', href: '#services' }
  ]

  const company = [
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Process', href: '#process' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' }
  ]

  const locations = [
    'Mumbai',
    'Delhi',
    'Bangalore',
    'Pune',
    'Ahmedabad',
    'Chennai',
    'Hyderabad',
    'Kolkata'
  ]

  return (
    <footer className={`transition-colors duration-300 ${
      isDark ? 'bg-gray-950 text-white' : 'bg-black text-white'
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <h3 className="font-heading text-2xl font-bold text-white mb-4">Akibworks</h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Helping Indian local businesses get online with complete website solutions. From design to deployment, we handle everything.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-black text-sm">📱</span>
                    </div>
                    <div>
                      <div className="font-medium">WhatsApp</div>
                      <a href={`https://wa.me/${SITE.whatsappNumberIntl}?text=Hi%20Akib%2C%20I%20want%20a%20website`} 
                         className="text-gray-300 hover:text-white transition-colors">
                        Quick Response
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                      <span className="text-black text-sm">✉️</span>
                    </div>
                    <div>
                      <div className="font-medium">Email</div>
                      <a href={`mailto:${SITE.contactEmail}`} 
                         className="text-gray-300 hover:text-white transition-colors">
                        {SITE.contactEmail}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-white mb-6">Services</h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service.name}>
                    <a href={service.href} 
                       className="text-gray-300 hover:text-white transition-colors">
                      {service.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-3">
                {company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} 
                       className="text-gray-300 hover:text-white transition-colors">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Locations */}
            <div>
              <h4 className="font-heading text-lg font-semibold text-white mb-6">We Serve</h4>
              <div className="grid grid-cols-2 gap-2">
                {locations.map((location) => (
                  <div key={location} className="text-gray-300 text-sm">
                    {location}
                  </div>
                ))}
              </div>
              <div className="mt-6">
                <h5 className="font-medium text-white mb-3">Follow Us</h5>
                <div className="flex gap-4">
                  <a href={SITE.socials.linkedin} 
                     target="_blank" 
                     rel="noopener" 
                     className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white transition-colors group">
                    <span className="text-sm group-hover:text-black">💼</span>
                  </a>
                  <a href={SITE.socials.github} 
                     target="_blank" 
                     rel="noopener" 
                     className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white transition-colors group">
                    <span className="text-sm group-hover:text-black">💻</span>
                  </a>
                  <a href={SITE.socials.instagram} 
                     target="_blank" 
                     rel="noopener" 
                     className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-white transition-colors group">
                    <span className="text-sm group-hover:text-black">📸</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-400 text-sm">
              © 2025 Akibworks. All rights reserved.
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-400">
              <span>Made with ❤️ for Indian businesses</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Available for new projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Banner */}
        <div className="border-t border-gray-800 py-8">
          <div className="bg-white rounded-2xl p-8 text-center">
            <h3 className="font-heading text-2xl font-bold text-black mb-4">
              Ready to Put Your Business Online?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join 100+ Indian businesses who trust Akibworks for their website needs. Complete solution from ₹8,000.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" 
                 className="inline-flex items-center justify-center rounded-lg bg-black text-white px-8 py-4 font-semibold hover:bg-gray-800 transition-colors">
                Get Your Website
              </a>
              <a href={`https://wa.me/${SITE.whatsappNumberIntl}?text=Hi%20Akib%2C%20I%20want%20a%20website%20for%20my%20business`} 
                 target="_blank" 
                 rel="noopener"
                 className="inline-flex items-center justify-center rounded-lg border-2 border-black text-black px-8 py-4 font-semibold hover:bg-black hover:text-white transition-colors">
                WhatsApp Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
