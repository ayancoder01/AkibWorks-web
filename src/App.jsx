import React from 'react'
import { ThemeProvider, useTheme } from './context/ThemeContext.jsx'
import LoadingScreen, { useLoadingScreen } from './components/LoadingScreen.jsx'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Services from './components/Services.jsx'
import Process from './components/Process.jsx'
import Portfolio from './components/Portfolio.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import ScrollToTop from './components/ScrollToTop.jsx'
import ScrollProgress from './components/ScrollProgress.jsx'

function AppContent() {
  const { isDark } = useTheme()
  const { isLoading, handleLoadingComplete } = useLoadingScreen()
  
  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />
  }
  
  return (
    <>
      <ScrollProgress />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${
        isDark ? 'bg-gray-900' : 'bg-white'
      }`}>
        <Header />
        <main className="flex-1">
          <Hero />
          <About />
          <Services />
          <Process />
          <Portfolio />
          <Testimonials />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
      </div>
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}
