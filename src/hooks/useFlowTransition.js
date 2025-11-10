import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export const useFlowTransition = (sections) => {
  const [currentSection, setCurrentSection] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const sectionsRef = useRef([])
  const containerRef = useRef(null)

  useEffect(() => {
    // Initialize: hide all sections except the first
    sectionsRef.current.forEach((section, index) => {
      if (section) {
        gsap.set(section, {
          y: index === 0 ? 0 : '100%',
          opacity: index === 0 ? 1 : 0,
          zIndex: index === 0 ? 10 : 1
        })
      }
    })
  }, [])

  const navigateToSection = (targetIndex) => {
    if (isAnimating || targetIndex === currentSection || targetIndex < 0 || targetIndex >= sections) {
      return
    }

    setIsAnimating(true)

    const currentEl = sectionsRef.current[currentSection]
    const targetEl = sectionsRef.current[targetIndex]

    if (!currentEl || !targetEl) {
      setIsAnimating(false)
      return
    }

    const isForward = targetIndex > currentSection
    const targetStartY = isForward ? '100%' : '-100%'
    const currentEndY = isForward ? '-100%' : '100%'

    // Set up target section based on direction
    gsap.set(targetEl, {
      y: targetStartY,
      opacity: 0,
      zIndex: 10
    })

    gsap.set(currentEl, {
      zIndex: 9
    })

    // Create timeline for smooth upward flow
    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentSection(targetIndex)
        setIsAnimating(false)
        
        // Reset previous section
        gsap.set(currentEl, {
          y: isForward ? '100%' : '-100%',
          opacity: 0,
          zIndex: 1
        })
      }
    })

    // Animate both sections with upward flow
    tl.to(currentEl, {
      y: currentEndY,
      opacity: 0,
      duration: 1,
      ease: 'sine.in'
    }, 0)
    .to(targetEl, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: 'sine.out'
    }, 0)
  }

  const handleWheel = (e) => {
    if (isAnimating) {
      e.preventDefault()
      return
    }

    // Only prevent default on desktop to allow natural mobile scrolling
    if (window.innerWidth >= 768) {
      e.preventDefault()
    }

    if (e.deltaY > 0 && currentSection < sections - 1) {
      navigateToSection(currentSection + 1)
    } else if (e.deltaY < 0 && currentSection > 0) {
      navigateToSection(currentSection - 1)
    }
  }

  // Touch handling for mobile
  const touchStartY = useRef(0)
  const touchEndY = useRef(0)

  const handleTouchStart = (e) => {
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e) => {
    touchEndY.current = e.changedTouches[0].clientY
    handleSwipe()
  }

  const handleSwipe = () => {
    if (isAnimating) return

    const swipeDistance = touchStartY.current - touchEndY.current
    const minSwipeDistance = 50

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0 && currentSection < sections - 1) {
        // Swipe up - go to next section
        navigateToSection(currentSection + 1)
      } else if (swipeDistance < 0 && currentSection > 0) {
        // Swipe down - go to previous section
        navigateToSection(currentSection - 1)
      }
    }
  }

  const handleKeyDown = (e) => {
    if (isAnimating) return

    if (e.key === 'ArrowDown' && currentSection < sections - 1) {
      navigateToSection(currentSection + 1)
    } else if (e.key === 'ArrowUp' && currentSection > 0) {
      navigateToSection(currentSection - 1)
    }
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    container.addEventListener('wheel', handleWheel, { passive: false })
    container.addEventListener('touchstart', handleTouchStart, { passive: true })
    container.addEventListener('touchend', handleTouchEnd, { passive: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      container.removeEventListener('wheel', handleWheel)
      container.removeEventListener('touchstart', handleTouchStart)
      container.removeEventListener('touchend', handleTouchEnd)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [currentSection, isAnimating])

  return {
    sectionsRef,
    containerRef,
    currentSection,
    navigateToSection,
    isAnimating
  }
}
