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
                En estos nuevos 22 años que vas a cumplir, espero que sean los mejores de tu vida, siendo yo quién te acompañe en diferentes etapas de ella, así como también en diferentes momentos, tristes, felices, existenciales, o nomas ahí, existenciales de nuevo. Siendo así, esta es en parte una carta digital, no sé cómo se pueda definir a este tipo de creación, pero quiero que sepas que eres una mujer muy bonita, muy preciosa, muy valiente, muy juerte, tambien muy que te vale (no autoriso) y que tampoco te dejas cuidar a veces ehh, pero con esos achaques y cosas bien bonitas, eres lo mejor que ha pasado. Felices 22 años, corazón.
              </p>

              <p className="mt-4 text-pink-800 leading-relaxed">
                No sabes cuanto te adoro, anhelo por hacerte feliz y cómo me encanta hacerlo :3 así que pues, no son tan muchas fotitos, pero son bonitas, hasta fondito pusheen le puse, es que se ve bien bonito.
                Siempre recuerdo las cosas que hacemos juntos, las cosas tan lindas que me dices, tus ojitos tan bellos y preciosos que relusen cuando me ves, es que es innigualabe ese sentimiento, no sabes cuánto lo adoooro :3.
              </p>
              
              <p className="mt-4 text-pink-800 leading-relaxed">
                También recuerdo las llamadas que hacemos, justo ahorita agregué este texto porque andamos jugando y risa y risaa los doos JAJAJ. Pero chi, el amor es muy bonito como tal cual dijo David Bowie en Under Pressure (escuchaaalaaa):<br />
                <em>
                  Cause loves such an old-fashioned word<br />
                  And love dares you to care for<br />
                  The people on the edge of the night<br />
                  And love dares you to change our way of<br />
                  Caring about ourselves<br />
                  Why cant we give love, give love, give love, give love<br />
                  Give love, give love, give love, give love?
                </em><br />
                <em>
                  Porque el amor es una palabra tan anticuada y antigua<br />
                  Y el amor hace que te importes siempre<br />
                  Por las personas en el borde de la noche<br />
                  Y el amor te reta en cambiar la forma<br />
                  En cambiar el amor por nosotros mismos<br />
                  ¿Por qué no podemos dar amor, dar amor, dar amor, dar amor?<br />
                  ¿Dar amor, dar amor, dar amor, dar amor?
                </em><br />
              </p>
              <p className="mt-4 text-pink-800 leading-relaxed">
              Extraño estar contigo, poder llamarte mi novia. Extraño la forma en que nos miramos con ternura, poder acudir el uno al otro cuando algo malo pasa y estar ahí para apoyarnos. Aprendo tanto de ti y valoro los recuerdos que hemos construido juntos durante todo este tiempo.
              Amo tantas cosas de ti y de lo que compartimos. Amo nuestras risas, nuestras conversaciones interminables y cómo me haces sentir que el mundo es un lugar mejor cuando estás a mi lado. Amo compartir mi felicidad y soñar con un futuro contigo. 
              Eres todo para mí, y haré todo lo posible para que siempre lo sientas así.
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

