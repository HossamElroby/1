import PropertyCard from '@/components/ui/PropertyCard'
import type { Property } from '@/types'

const featuredProperties: Property[] = [
  {
    id: '1',
    title: 'Modern 3-Bedroom Family House',
    price: 245000,
    location: 'Oak Street, Springfield',
    description: 'Spacious living, private garden, 2-car garage — perfect for families',
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1850,
    images: [
      'https://images.unsplash.com/photo-1613977257593-6bab9d2ebf5f?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Private garden', '2-car garage', 'Energy-efficient', 'New kitchen'],
    type: 'house',
    status: 'available',
    agent: {
      id: '1',
      name: 'Sarah Johnson',
      email: 'sarah@estatehub.com',
      phone: '+1 555-123-4567'
    }
  },
  {
    id: '2',
    title: 'Contemporary Downtown Apartment',
    price: 189000,
    location: 'City Center',
    description: 'Modern finishes, city views, walking distance to amenities',
    bedrooms: 2,
    bathrooms: 1,
    sqft: 1200,
    images: [
      'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1560448075-bb4caa6c0f11?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['City views', 'Modern finishes', 'Balcony', 'Gym access'],
    type: 'apartment',
    status: 'available',
    agent: {
      id: '2',
      name: 'Michael Chen',
      email: 'michael@estatehub.com',
      phone: '+1 555-234-5678'
    }
  },
  {
    id: '3',
    title: 'Luxury Villa with Pool',
    price: 485000,
    location: 'Hillside Estate',
    description: 'Premium location, swimming pool, panoramic views',
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2800,
    images: [
      'https://images.unsplash.com/photo-1560448075-bb4caa6c0f11?q=80&w=800&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1613977257593-6bab9d2ebf5f?q=80&w=800&auto=format&fit=crop'
    ],
    features: ['Swimming pool', 'Panoramic views', 'Premium location', 'Smart home'],
    type: 'villa',
    status: 'available',
    agent: {
      id: '3',
      name: 'Emily Rodriguez',
      email: 'emily@estatehub.com',
      phone: '+1 555-345-6789'
    }
  }
]

export default function PropertyGrid() {
  return (
    <section id="properties" className="section-padding bg-neutral-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-neutral-800 mb-4">
            Featured Properties
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties, each offering unique features and exceptional value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="btn btn-secondary text-lg px-8 py-4">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  )
}