'use client'

import Image from 'next/image'
import { useIntersectionObserver } from './hooks/use-intersection-observer'

export default function CumpleanosPage() {
  return (
    <div 
      className="min-h-screen relative"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pusheen-pc-3lnzaz1hayik53th.jpg-KbkKYxqJXJpGRjIpft4LFpys0cIbIs.jpeg')`,
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
      }}
    >
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-pink-600 mb-8">
          Feliz Cumpleaños, Mi Amor
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <LazyImage
            src="/placeholder.svg?height=400&width=300"
            alt="Foto 1"
            width={300}
            height={400}
          />
          
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
              <p className="text-pink-800 leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <p className="mt-4 text-pink-800 leading-relaxed">
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
          
          <LazyImage
            src="/placeholder.svg?height=400&width=300"
            alt="Foto 2"
            width={300}
            height={400}
          />
        </div>

        {/* Sección de Collage */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
            <LazyImage
              key={index}
              src={`/placeholder.svg?height=300&width=300`}
              alt={`Collage foto ${index}`}
              width={300}
              height={300}
              className="group-hover:scale-110"
            />
          ))}
        </div>

        {/* Nueva sección de texto */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <p className="text-pink-800 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mt-4 text-pink-800 leading-relaxed">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>

        {/* Sección de Video */}
        <div className="max-w-3xl mx-auto mb-16">
          <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
            <video
              className="w-full h-full object-cover"
              controls
              poster="/placeholder.svg?height=720&width=1280"
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-2xl font-semibold text-pink-600">
            Te amo con todo mi corazón
          </p>
        </div>
      </main>
    </div>
  )
}

function LazyImage({ src, alt, width, height, className = '' }) {
  const { elementRef, isVisible } = useIntersectionObserver()

  return (
    <div 
      ref={elementRef}
      className={`relative group overflow-hidden rounded-lg transition-all duration-300 ease-in-out transform hover:z-10 shadow-lg ${className}`}
    >
      <div className="aspect-square md:aspect-auto">
        {isVisible && (
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        )}
      </div>
    </div>
  )
}

