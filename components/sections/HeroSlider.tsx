'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { clsx } from 'clsx'
import type { SlideData } from '@/types'

const slides: SlideData[] = [
  {
    id: '1',
    title: 'Find Your Dream Home',
    subtitle: 'Discover premium properties with transparent pricing and secure transactions',
    image: 'https://images.unsplash.com/photo-1613977257593-6bab9d2ebf5f?q=80&w=1920&auto=format&fit=crop',
    cta: {
      text: 'Browse Properties',
      href: '#properties'
    }
  },
  {
    id: '2',
    title: 'Luxury Living Redefined',
    subtitle: 'Experience modern architecture and premium amenities in prime locations',
    image: 'https://images.unsplash.com/photo-1560448075-bb4caa6c0f11?q=80&w=1920&auto=format&fit=crop',
    cta: {
      text: 'View Luxury Homes',
      href: '#properties'
    }
  },
  {
    id: '3',
    title: 'Your Perfect Investment',
    subtitle: 'Professional guidance and market insights for smart property investments',
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1920&auto=format&fit=crop',
    cta: {
      text: 'Investment Properties',
      href: '#properties'
    }
  }
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index)
  }, [])

  // Auto-play functionality
  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [isPlaying, nextSlide])

  // Touch/swipe support
  useEffect(() => {
    let startX = 0
    let endX = 0

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX
    }

    const handleTouchEnd = (e: TouchEvent) => {
      endX = e.changedTouches[0].clientX
      const diff = startX - endX

      if (Math.abs(diff) > 50) {
        if (diff > 0) {
          nextSlide()
        } else {
          prevSlide()
        }
      }
    }

    const slider = document.getElementById('hero-slider')
    if (slider) {
      slider.addEventListener('touchstart', handleTouchStart)
      slider.addEventListener('touchend', handleTouchEnd)

      return () => {
        slider.removeEventListener('touchstart', handleTouchStart)
        slider.removeEventListener('touchend', handleTouchEnd)
      }
    }
  }, [nextSlide, prevSlide])

  return (
    <section 
      id="hero-slider"
      className="relative h-screen overflow-hidden"
      onMouseEnter={() => setIsPlaying(false)}
      onMouseLeave={() => setIsPlaying(true)}
    >
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={clsx(
              'absolute inset-0 transition-opacity duration-1000',
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            )}
          >
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="container-custom text-center text-white">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
                  {slide.title}
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto animate-slide-up">
                  {slide.subtitle}
                </p>
                {slide.cta && (
                  <a
                    href={slide.cta.href}
                    className="btn btn-primary text-lg px-8 py-4 animate-slide-up"
                  >
                    {slide.cta.text}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 hover:bg-white/30 text-white transition-all duration-200 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={clsx(
              'w-3 h-3 rounded-full transition-all duration-200',
              index === currentSlide
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/75'
            )}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}