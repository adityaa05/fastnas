import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MainContent from './components/MainContent'
import Features from './components/Features'
import Contact from './components/Contact'
import { useFlowTransition } from './hooks/useFlowTransition'

function App() {
  const { sectionsRef, containerRef, currentSection, navigateToSection } = useFlowTransition(4)

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-fastnas-red">
      <Navbar />
      
      <div ref={containerRef} className="h-screen w-full">
        {/* Hero Section */}
        <div
          ref={(el) => (sectionsRef.current[0] = el)}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Hero />
        </div>

        {/* MainContent Section */}
        <div
          ref={(el) => (sectionsRef.current[1] = el)}
          className="absolute top-0 left-0 w-full h-full"
        >
          <MainContent />
        </div>

        {/* Features Section */}
        <div
          ref={(el) => (sectionsRef.current[2] = el)}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Features />
        </div>

        {/* Contact Section */}
        <div
          ref={(el) => (sectionsRef.current[3] = el)}
          className="absolute top-0 left-0 w-full h-full"
        >
          <Contact />
        </div>
      </div>

      {/* Navigation Dots - Hidden on mobile */}
      <div className="hidden md:flex fixed right-6 lg:right-8 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {[0, 1, 2, 3].map((index) => (
          <button
            key={index}
            onClick={() => navigateToSection(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index
                ? 'bg-fastnas-white scale-125'
                : 'bg-black hover:bg-fastnas-white hover:scale-110'
            }`}
            aria-label={`Go to section ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default App
