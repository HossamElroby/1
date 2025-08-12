import Link from 'next/link'
import PropertyImage from './PropertyImage'
import PropertyDetails from './PropertyDetails'
import type { Property } from '@/types'

interface PropertyCardProps {
  property: Property
}

export default function PropertyCard({ property }: PropertyCardProps) {
  return (
    <article className="card group overflow-hidden">
      <PropertyImage
        src={property.images[0]}
        alt={property.title}
        className="h-64 w-full"
      />
      
      <div className="p-6">
        <PropertyDetails property={property} />
        
        <div className="mt-6 flex items-center justify-between">
          <Link
            href={`/property/${property.id}`}
            className="btn btn-primary flex-1 mr-3"
          >
            View Details
          </Link>
          <button className="btn btn-secondary">
            Save
          </button>
        </div>
      </div>
    </article>
  )
}