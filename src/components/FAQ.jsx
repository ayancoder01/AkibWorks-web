import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext.jsx'

export default function FAQ() {
  const { isDark } = useTheme()
  const [openIndex, setOpenIndex] = useState(0)

  const faqs = [
    {
      question: "How much does a website cost?",
      answer: "Simple landing page starts at ₹8,000, business website at ₹15,000, and online store at ₹25,000. Everything is included - domain registration, hosting setup, design, coding, and deployment. No hidden charges."
    },
    {
      question: "Do I need to buy domain and hosting separately?",
      answer: "No! I handle everything for you. Domain registration (like yourshop.in) and hosting setup is included in the package. You get complete ownership and all login details after the website is ready."
    },
    {
      question: "How long does it take to make a website?",
      answer: "Simple landing page: 3-5 days, Business website: 7-10 days, Online store: 10-14 days. I'll give you exact timeline after understanding your requirements."
    },
    {
      question: "Will my website work on mobile phones?",
      answer: "Yes! All websites are mobile-friendly and work perfectly on smartphones, tablets, and computers. Most of your customers will visit from mobile, so this is very important."
    },
    {
      question: "Can I update the website myself later?",
      answer: "Yes! I'll teach you how to update basic things like phone numbers, address, photos, and content. For bigger changes, I'm always available to help at affordable rates."
    },
    {
      question: "Do you help with WhatsApp integration?",
      answer: "Absolutely! I'll add WhatsApp button so customers can directly message you. This is very important for Indian businesses as most customers prefer WhatsApp."
    },
    {
      question: "What if I don't have photos of my business?",
      answer: "No problem! I can help you take good photos of your shop/salon/restaurant, or I can arrange professional photography at additional cost. Good photos are very important for business websites."
    },
    {
      question: "Do you provide support after website is ready?",
      answer: "Yes! 30-day support is included. I'll help with any issues, small changes, and teach you how to manage your website. After that, monthly maintenance is available at ₹1,500/month."
    }
  ]

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            FREQUENTLY ASKED QUESTIONS
          </h2>
          <p className="text-lg text-slate-600 dark:text-gray-300 max-w-2xl mx-auto">
            Got questions? I've got answers. Here are the most common questions about working with Akibworks.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-slate-200 dark:border-gray-700 rounded-2xl overflow-hidden">
              <button
                className="w-full px-8 py-6 text-left flex items-center justify-between bg-slate-50 dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-gray-700 transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              >
                <span className="font-semibold text-slate-900 dark:text-white pr-8">
                  {faq.question}
                </span>
                <svg 
                  className={`w-6 h-6 text-slate-500 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-8 py-6 bg-white dark:bg-gray-900 border-t border-slate-200 dark:border-gray-700">
                  <p className="text-slate-600 dark:text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-slate-50 dark:bg-gray-800 rounded-2xl p-8 border border-slate-200 dark:border-gray-700">
            <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-4">
              Still have questions?
            </h3>
            <p className="text-slate-600 dark:text-gray-300 mb-6">
              I'm here to help! Get in touch and I'll answer any questions about your project.
            </p>
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-black text-white px-8 py-3 font-semibold hover:bg-gray-800 transition-colors">
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
