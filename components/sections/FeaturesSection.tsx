import { Shield, CheckCircle, Home, DollarSign, Clock, Users } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Secure Transactions',
    description: 'All payments protected with bank-level encryption and comprehensive fraud protection for your peace of mind.'
  },
  {
    icon: CheckCircle,
    title: 'Verified Listings',
    description: 'Every property is thoroughly inspected and verified before being listed on our platform.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Professional real estate agents available 24/7 to guide you through every step of the process.'
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden fees or surprise costs. What you see is exactly what you pay.'
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Streamlined processes and digital tools to make buying or selling faster than ever.'
  },
  {
    icon: Home,
    title: 'Quality Properties',
    description: 'Curated selection of premium properties in the most desirable locations.'
  }
]

export default function FeaturesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-neutral-800 mb-4">
            Why Choose EstateHub
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We combine cutting-edge technology with personalized service to deliver an exceptional real estate experience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.title}
                className="text-center p-8 rounded-xl hover:bg-neutral-50 transition-colors duration-200"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 text-primary-600 rounded-xl mb-6">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}