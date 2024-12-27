'use client';

import { LazyImage } from '../../components/LazyImage';

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
          Mi amor, este pedacito de mi, es para ti, leelo con mucho cariño. Te adoro, corazón mío.
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <LazyImage
          src="/brandy.JPG"
          alt="Foto 1"
          width={300}
          height={400}
        />
          
          <div className="col-span-1 md:col-span-1">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
              <p className="text-pink-800 leading-relaxed">
              Este pedacito de página web es para ti amorcito, lo hice con todo el amor del mundo en un día tan especial como lo es tu cumpleaños. Espero que en este tiempo que nos conocemos, hayas sido muy feliz a mi lado, ya como amiko y después como novio, sabes que para mi, eres la mayor felicidad en este mundo. Aquí pongo pedacitos de mis fotos que más me gustan, ya que me gustan todas y es que la verdad es todo bien precioso, todo bien preciado.
              </p>
              <p className="mt-4 text-pink-800 leading-relaxed">
          En estos nuevos 22sss años que vas a cumplir, espero que sean los mejores de tu vida, siendo yo quién te acompañe en diferentes etapas de ella, así como también en diferentes momentos, tristes, felices, existenciales, o nomas ahí, existenciales de nuevo. Siendo así, esta es en parte una carta digital, no sé cómo se pueda definir a este tipo de creación, pero quiero que sepas que eres una mujer muy bonita, muy preciosa, muy valiente, muy juerte, tambien muy que te vale (no autoriso) y que tampoco te dejas cuidar a veces ehh, pero con esos achaques y cosas bien bonitas, eres lo mejor que ha pasado. Felices 22 años, corazón.
              </p>
            </div>
          </div>
          
          <LazyImage
            src="/sandy.JPG"
            alt="Foto 2"
            width={300}
            height={400}
          />
        </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((index) => (
          <LazyImage
            key={index}
            src={`/placeholder-${index}.jpg`}
            alt={`Collage foto ${index}`}
            width={300}
            height={300}
            className="group-hover:scale-110"
          />
        ))}
      </div>

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
  );
}