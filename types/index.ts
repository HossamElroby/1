export interface Property {
  id: string;
  title: string;
  price: number;
  location: string;
  description: string;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  images: string[];
  features: string[];
  type: 'house' | 'apartment' | 'villa' | 'condo';
  status: 'available' | 'sold' | 'pending';
  agent: Agent;
}

export interface Agent {
  id: string;
  name: string;
  email: string;
  phone: string;
  image?: string;
}

export interface SlideData {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  cta?: {
    text: string;
    href: string;
  };
}

export interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  message?: string;
  preferredDate?: string;
  propertyId: string;
}

export interface PaymentOption {
  value: 'deposit' | 'full' | 'custom';
  label: string;
  description: string;
}