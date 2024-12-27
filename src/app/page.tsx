import { LazyImage } from '../../components/LazyImage';

const MyComponent = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/pusheen-pc-3lnzaz1hayik53th.jpg-KbkKYxqJXJpGRjIpft4LFpys0cIbIs.jpeg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
      }}
    >
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col md:flex-row items-center justify-between mb-16">
          <LazyImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brandy.jpg-c4pcVCTUtJ5PQCSQfz6SV5jjHy7KEL.jpeg"
            alt="Foto 1"
            width={300}
            height={400}
          />
          <LazyImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sandy.JPG-KEOpXjStryPW5cpPdphuyVILfUlmyR.jpeg"
            alt="Foto 2"
            width={300}
            height={400}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <LazyImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/brau.JPG-1IhrKNRk2Cc0gv2gdkWyUGhpiJtxqe.jpeg"
            alt="Collage foto 1"
            width={300}
            height={300}
          />
          <LazyImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/DSC05485~2.JPG-NxXI6qfxVyptxvcQKtH9XRYnWI1Ha0.jpeg"
            alt="Collage foto 2"
            width={300}
            height={300}
          />
          <LazyImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/PXL_20241203_210345846.MP.jpg-SAv39zMhFtFJ0J3Th6k1fOXBvcIxGL.jpeg"
            alt="Collage foto 3"
            width={300}
            height={300}
          />
          <LazyImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-eQekOyOYZ0cI2snWuf3U7X33PnbYCv.png"
            alt="Collage foto 4"
            width={300}
            height={300}
          />
          <LazyImage
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uKuehCNWI5MdZEaX7VhcGETH4q55MF.png"
            alt="Collage foto 5"
            width={300}
            height={300}
          />
          <div className="col-span-2 bg-white/80 backdrop-blur-sm rounded-lg shadow-md p-6">
            <p className="text-pink-800 leading-relaxed">
              Cada momento contigo es especial, cada sonrisa, cada mirada, cada instante que compartimos juntos se convierte en un recuerdo precioso que atesoraré por siempre. En este día tan especial, quiero que sepas lo mucho que significas para mí y lo feliz que me haces.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;

