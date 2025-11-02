import React, { useState, useRef, useEffect } from 'react'
import LazyImage from './LazyImage.jsx'
import { useTheme } from '../context/ThemeContext.jsx'

const projects = [
  {
    id: 1,
    title: 'Sharma Restaurant',
    category: 'RESTAURANT',
    img: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    featured: true,
    domain: 'sharmarestaurant.in',
    description: 'Traditional Indian restaurant website with online menu, table booking, home delivery system, and customer reviews.'
  },
  {
    id: 2,
    title: 'City Medical Clinic',
    category: 'MEDICAL',
    img: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&auto=format&fit=crop',
    featured: true,
    domain: 'citymmedicalclinic.com',
    description: 'Complete medical clinic website with doctor profiles, appointment booking, services offered, and patient portal.'
  },
  {
    id: 3,
    title: 'Fresh Grocery Store',
    category: 'RETAIL',
    img: 'https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&auto=format&fit=crop',
    featured: true,
    domain: 'freshgrocery.in',
    description: 'Local grocery store website with product catalog, online ordering, home delivery, and WhatsApp ordering integration.'
  },
  {
    id: 4,
    title: 'RK Tailor & Boutique',
    category: 'FASHION',
    img: 'https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'rktailor.com',
    description: 'Premium tailoring and boutique website with custom clothing services, fabric collections, and appointment booking.'
  },
  {
    id: 5,
    title: 'Neha Beauty Parlour',
    category: 'BEAUTY',
    img: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'nehabeauty.in',
    description: 'Professional beauty parlour website with service menu, pricing, online booking, gallery, and customer testimonials.'
  },
  {
    id: 6,
    title: 'FitZone Gym',
    category: 'FITNESS',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'fitzonegym.in',
    description: 'Modern gym website with membership plans, trainer profiles, class schedules, and online registration system.'
  },
  {
    id: 7,
    title: 'Gupta Pharmacy',
    category: 'MEDICAL',
    img: 'https://images.unsplash.com/photo-1576602976047-174e57a47881?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'guptapharmacy.com',
    description: 'Local pharmacy website with medicine catalog, prescription upload, home delivery, and health tips section.'
  },
  {
    id: 8,
    title: 'AC Doctor Services',
    category: 'SERVICES',
    img: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'acdoctor.in',
    description: 'Professional AC repair and maintenance service with online booking, service packages, and 24/7 emergency support.'
  },
  {
    id: 9,
    title: 'Golden Jewellers',
    category: 'JEWELLERY',
    img: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop',
    featured: true,
    domain: 'goldenjewellers.in',
    description: 'Elegant jewellery store website showcasing gold, silver, and diamond collections with live gold rates.'
  },
  {
    id: 10,
    title: 'Café Delight',
    category: 'RESTAURANT',
    img: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'cafedelight.in',
    description: 'Cozy café website with menu, online ordering, table reservation, and special events calendar.'
  },
  {
    id: 11,
    title: 'Sweet Bakery',
    category: 'FOOD',
    img: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'sweetbakery.in',
    description: 'Local bakery website with cake designs, custom orders, price list, and online delivery booking.'
  },
  {
    id: 12,
    title: 'Mobile Care Center',
    category: 'TECHNOLOGY',
    img: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'mobilecare.in',
    description: 'Mobile shop and repair center with device catalog, repair services, accessories, and warranty registration.'
  },
  {
    id: 13,
    title: 'Kids Academy',
    category: 'EDUCATION',
    img: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'kidsacademy.in',
    description: 'Preschool and daycare website with admission information, curriculum details, photo gallery, and parent portal.'
  },
  {
    id: 14,
    title: 'Home Hardware Store',
    category: 'RETAIL',
    img: 'https://images.unsplash.com/photo-1504148455328-c376907d081c?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'homehardware.in',
    description: 'Hardware store website with product categories, building materials, tools, and bulk order facility.'
  },
  {
    id: 15,
    title: 'Pet Clinic & Shop',
    category: 'SERVICES',
    img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'petclinic.in',
    description: 'Veterinary clinic and pet shop website with appointment booking, pet care products, and grooming services.'
  },
  {
    id: 16,
    title: 'Wedding Photography',
    category: 'SERVICES',
    img: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'weddingphotos.in',
    description: 'Professional photography studio website with portfolio gallery, packages, booking calendar, and client reviews.'
  },
  {
    id: 17,
    title: 'Auto Repair Garage',
    category: 'SERVICES',
    img: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'autorepair.in',
    description: 'Car repair and service center website with service packages, spare parts, appointment booking, and service history.'
  },
  {
    id: 18,
    title: 'Yoga & Wellness Center',
    category: 'FITNESS',
    img: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&auto=format&fit=crop',
    featured: false,
    domain: 'yogawellness.in',
    description: 'Yoga studio website with class schedules, instructor profiles, membership plans, and wellness blog.'
  }
]

const filterTabs = [
  { id: 'all', label: 'ALL' },
  { id: 'restaurant', label: 'RESTAURANT' },
  { id: 'medical', label: 'MEDICAL' },
  { id: 'retail', label: 'RETAIL' },
  { id: 'beauty', label: 'BEAUTY' },
  { id: 'services', label: 'SERVICES' },
  { id: 'fitness', label: 'FITNESS' },
  { id: 'food', label: 'FOOD' },
  { id: 'fashion', label: 'FASHION' },
  { id: 'technology', label: 'TECHNOLOGY' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'jewellery', label: 'JEWELLERY' }
]

export default function Portfolio() {
  const { isDark } = useTheme()
  const [activeFilter, setActiveFilter] = useState('all')
  const [filteredProjects, setFilteredProjects] = useState(projects)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAllModal, setShowAllModal] = useState(false)
  const carouselRef = useRef(null)
  const [touchStart, setTouchStart] = useState(null)
  const [touchEnd, setTouchEnd] = useState(null)

  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId)
    setCurrentIndex(0) // Reset to first card when filter changes
    if (filterId === 'all') {
      setFilteredProjects(projects)
    } else {
      const filtered = projects.filter(project => 
        project.category.toLowerCase() === filterId.toLowerCase()
      )
      setFilteredProjects(filtered)
    }
  }

  const nextSlide = () => {
    if (currentIndex < filteredProjects.length - 3) {
      setCurrentIndex(currentIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Touch handlers for mobile swipe
  const minSwipeDistance = 50

  const onTouchStart = (e) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < filteredProjects.length - 3) {
      nextSlide()
    }
    if (isRightSwipe && currentIndex > 0) {
      prevSlide()
    }
  }

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-black dark:text-white text-sm font-medium mb-2 tracking-wider">Our Work</p>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Look at our projects
          </h2>
          <div className="w-12 h-1 bg-black dark:bg-white mx-auto"></div>
        </div>
        
        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleFilterChange(tab.id)}
              className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeFilter === tab.id
                  ? 'bg-black text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sliding Cards Container */}
        <div className="relative mb-12">
          {/* Navigation Buttons - Hidden on mobile */}
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 shadow-lg hidden md:flex ${
              currentIndex === 0 
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white border border-gray-200 dark:border-gray-600'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= filteredProjects.length - 3}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 w-12 h-12 rounded-full items-center justify-center transition-all duration-300 shadow-lg hidden md:flex ${
              currentIndex >= filteredProjects.length - 3 
                ? 'bg-gray-200 dark:bg-gray-700 text-gray-400 dark:text-gray-500 cursor-not-allowed' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-black hover:text-white border border-gray-200 dark:border-gray-600'
            }`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div 
              ref={carouselRef}
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100/3)}%)` }}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              {filteredProjects.map((project, index) => (
                <div key={project.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-4">
                  <div className="max-w-sm mx-auto">
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative group">
                        {/* Project Image */}
                        <div className="aspect-video overflow-hidden rounded-t-2xl">
                          <LazyImage
                            src={project.img}
                            alt={project.title}
                            className="group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        
                        {/* Category Badge */}
                        <div className="absolute top-4 left-4">
                          <span className="bg-black text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                            {project.category}
                          </span>
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                              {project.title}
                            </h3>
                            {project.featured && (
                              <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs font-medium">
                                Featured
                              </span>
                            )}
                          </div>
                          
                          {/* Domain */}
                          <div className="flex items-center mb-4">
                            <svg className="w-4 h-4 text-black dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                            </svg>
                            <span className="text-black dark:text-white text-sm font-medium">{project.domain}</span>
                          </div>
                          
                          {/* Description */}
                          <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6">
                            {project.description}
                          </p>
                          
                          {/* Action Button */}
                          <button className="w-full bg-black text-white py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2 text-sm font-medium">
                            View Project
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mb-8">
          {Array.from({ length: Math.max(0, filteredProjects.length - 2) }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-black shadow-lg transform scale-125' 
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center">
          <button 
            onClick={() => setShowAllModal(true)}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-medium bg-gray-200 hover:bg-gray-300 text-gray-800 border border-gray-200 rounded-lg transition-colors"
          >
            View All Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* View All Projects Modal */}
      {showAllModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-gray-900 rounded-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between z-10">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">All Projects ({filteredProjects.length})</h3>
              <button 
                onClick={() => setShowAllModal(false)}
                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Filter Tabs in Modal */}
            <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex flex-wrap gap-2">
                {filterTabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleFilterChange(tab.id)}
                    className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 ${
                      activeFilter === tab.id
                        ? 'bg-black text-white shadow-lg'
                        : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* All Projects Grid */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProjects.map((project) => (
                  <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                    <div className="relative group">
                      {/* Project Image */}
                      <div className="aspect-video overflow-hidden rounded-t-xl">
                        <LazyImage
                          src={project.img}
                          alt={project.title}
                          className="group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      
                      {/* Category Badge */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-black text-white px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                      
                      {/* Content */}
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h4>
                          {project.featured && (
                            <span className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-full text-xs font-medium">
                              Featured
                            </span>
                          )}
                        </div>
                        
                        {/* Domain */}
                        <div className="flex items-center mb-3">
                          <svg className="w-4 h-4 text-black dark:text-white mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                          </svg>
                          <span className="text-black dark:text-white text-sm font-medium">{project.domain}</span>
                        </div>
                        
                        {/* Description */}
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>
                        
                        {/* Action Button */}
                        <button className="w-full px-4 py-2 bg-black hover:bg-gray-800 text-white rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2">
                          View Details
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
