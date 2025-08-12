import Image from 'next/image'
import { clsx } from 'clsx'

interface PropertyImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
}

export default function PropertyImage({ 
  src, 
  alt, 
  className,
  priority = false 
}: PropertyImageProps) {
  return (
    <div className={clsx('relative overflow-hidden', className)}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        priority={priority}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  )
}