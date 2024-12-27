'use client';

import Image from 'next/image';

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
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brandy.jpg-c4pcVCTUtJ5PQCSQfz6SV5jjHy7KEL.jpeg"
              alt="Foto 1"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
              unoptimized
            />
          </div>
          
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
          
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandy.JPG-KEOpXjStryPW5cpPdphuyVILfUlmyR.jpeg"
              alt="Foto 2"
              fill
              className="object-cover hover:scale-110 transition-transform duration-300"
              unoptimized
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {[
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brau.JPG-1IhrKNRk2Cc0gv2gdkWyUGhpiJtxqe.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC05485~2.JPG-NxXI6qfxVyptxvcQKtH9XRYnWI1Ha0.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20241203_210345846.MP.jpg-SAv39zMhFtFJ0J3Th6k1fOXBvcIxGL.jpeg",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eQekOyOYZ0cI2snWuf3U7X33PnbYCv.png",
            "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uKuehCNWI5MdZEaX7VhcGETH4q55MF.png"
          ].map((src, index) => (
            index < 5 && (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={src}
                  alt={`Collage foto ${index + 1}`}
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-300"
                  unoptimized
                />
              </div>
            )
          ))}
          <div className="col-span-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <p className="text-pink-800 leading-relaxed">
              Aqui van pedazos de canciones que me gustaría dedicarte como un gran amor, me encantas, y van para ti amorcito, te adoro, corazón. No sabes como me gusta que seas mi novia y compartir cada momento contigo, es que es tan bonito tan ahh tan precioso, todas mis palabras van con toda la sincerdidad del mundo hacía tiii.
            </p>
          </div>
        </div>

        <div className="mt-16 space-y-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">I Will - Mitski</h2>
            <p className="text-pink-800 mb-6">
              Esta es una canción muy bonita de Mitski, trata del amor que ella hubiera querido recibir, y para mí, es el amor tan bonito que te quiero dar, escucha la letra cuando puedas, te la doy subtitulada, no es tu estilo pero es muy bonita. Te amo, corazoncito.
            </p>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/2fEGhAWVyVA"
                title="I Will - Mitski"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold text-pink-600 mb-4">RX Queen - Deftones</h2>
            <p className="text-pink-800 mb-6">
              Demasiado lenta,d emasiado coital ajajja, pero esta chida, está bonita, esta para ti.
            </p>

            <div className="relative pb-[56.25%] h-0">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">I Will - Mitski</h2>
            <p className="text-pink-800 mb-6">
              Esta es una canción muy bonita de Mitski, trata del amor que ella hubiera querido recibir, y para mí, es el amor tan bonito que te quiero dar, escucha la letra cuando puedas, te la doy subtitulada, no es tu estilo pero es muy bonita. Te amo, corazoncito.
            </p>
              <iframe
                src="https://www.youtube.com/embed/zXfs-rjDqsA"
                title="Second Song"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold text-pink-600 mb-4">Miracle Aligner - The Last Shadow Puppets</h2>
            <p className="text-pink-800 mb-6">
            Y finalmente de Last Shadow Puppets (Es otro proyecto del alex turner, el de arctic monkeys), esta canción sí es muy para ti :3.
            </p>
            <div className="relative pb-[56.25%] h-0">
              <iframe
                src="https://www.youtube.com/embed/sQ5jisI-Y8s"
                title="Last Shadow Puppets"
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>

        <div className="mt-16 text-center pb-8">
          <p className="text-3xl font-bold text-pink-600">
            Te adoro, corazón
          </p>
        </div>
      </main>
    </div>
  );
}

