import { Bed, Bath, Square, MapPin } from 'lucide-react'
import type { Property } from '@/types'

interface PropertyDetailsProps {
  property: Property
}

export default function PropertyDetails({ property }: PropertyDetailsProps) {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0,
    }).format(price)
  }

  return (
    <div>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-xl font-semibold text-neutral-800 group-hover:text-primary-600 transition-colors">
          {property.title}
        </h3>
        <span className="text-2xl font-bold text-primary-600">
          {formatPrice(property.price)}
        </span>
      </div>

      <div className="flex items-center text-neutral-600 mb-3">
        <MapPin className="h-4 w-4 mr-1" />
        <span className="text-sm">{property.location}</span>
      </div>

      <p className="text-neutral-600 mb-4 line-clamp-2">
        {property.description}
      </p>

      <div className="flex items-center space-x-4 text-sm text-neutral-600 mb-4">
        <div className="flex items-center">
          <Bed className="h-4 w-4 mr-1" />
          <span>{property.bedrooms} bed</span>
        </div>
        <div className="flex items-center">
          <Bath className="h-4 w-4 mr-1" />
          <span>{property.bathrooms} bath</span>
        </div>
        <div className="flex items-center">
          <Square className="h-4 w-4 mr-1" />
          <span>{property.sqft.toLocaleString()} sqft</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {property.features.slice(0, 3).map((feature) => (
          <span
            key={feature}
            className="px-2 py-1 bg-sage-50 text-sage-700 text-xs rounded-full border border-sage-200"
          >
            {feature}
          </span>
        ))}
        {property.features.length > 3 && (
          <span className="px-2 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full">
            +{property.features.length - 3} more
          </span>
        )}
      </div>
    </div>
  )
}