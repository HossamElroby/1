'use client'

import { useState } from 'react'
import { Calendar, User, Mail, Phone, MessageSquare } from 'lucide-react'
import type { BookingFormData } from '@/types'

interface BookingSectionProps {
  propertyId: string
  propertyTitle: string
  propertyPrice: number
}

export default function BookingSection({ 
  propertyId, 
  propertyTitle, 
  propertyPrice 
}: BookingSectionProps) {
  const [formData, setFormData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
    preferredDate: '',
    propertyId,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  if (isSubmitted) {
    return (
      <div className="card p-8 text-center">
        <div className="w-16 h-16 bg-sage-100 text-sage-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageSquare className="h-8 w-8" />
        </div>
        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
          Request Submitted!
        </h3>
        <p className="text-neutral-600 mb-6">
          Thank you for your interest in {propertyTitle}. Our agent will contact you within 24 hours.
        </p>
        <button
          onClick={() => {
            setIsSubmitted(false)
            setFormData({
              fullName: '',
              email: '',
              phone: '',
              message: '',
              preferredDate: '',
              propertyId,
            })
          }}
          className="btn btn-secondary"
        >
          Submit Another Request
        </button>
      </div>
    )
  }

  return (
    <div className="card p-8">
      <div className="mb-6">
        <h3 className="text-2xl font-semibold text-neutral-800 mb-2">
          Interested in this property?
        </h3>
        <p className="text-neutral-600">
          Schedule a viewing or get more information about {propertyTitle}
        </p>
        <div className="text-2xl font-bold text-primary-600 mt-2">
          {formatPrice(propertyPrice)}
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-neutral-700 mb-2">
              <User className="h-4 w-4 inline mr-1" />
              Full Name *
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
              <Mail className="h-4 w-4 inline mr-1" />
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
              <Phone className="h-4 w-4 inline mr-1" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="preferredDate" className="block text-sm font-medium text-neutral-700 mb-2">
              <Calendar className="h-4 w-4 inline mr-1" />
              Preferred Viewing Date
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
            <MessageSquare className="h-4 w-4 inline mr-1" />
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
            placeholder="Tell us more about your requirements or ask any questions..."
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary flex-1"
          >
            {isSubmitting ? 'Submitting...' : 'Schedule Viewing'}
          </button>
          <button
            type="button"
            className="btn btn-sage flex-1"
          >
            Call Agent Directly
          </button>
        </div>

        <p className="text-xs text-neutral-500 text-center">
          By submitting this form, you agree to our Terms of Service and Privacy Policy. 
          Our agent will contact you within 24 hours.
        </p>
      </form>
    </div>
  )
}