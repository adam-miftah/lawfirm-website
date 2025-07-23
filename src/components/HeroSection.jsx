import { FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  const whatsAppNumber = "628111994484"; 
  const messageTemplate = "Halo, saya menemukan website Anda dan ingin mengajukan kasus saya. Mohon informasinya lebih lanjut. Terima kasih.";
  const encodedMessage = encodeURIComponent(messageTemplate);
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
  
  return (
    <section className="relative text-white overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url('/images/background.webp')` }}></div>
      <div className="absolute inset-0 bg-black/60 z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/80 to-transparent z-20"></div>
      <div className="container mx-auto px-6 py-24 md:py-0 relative z-30">
        <div className="flex flex-col md:flex-row md:items-center md:min-h-screen">
          <div className="w-full md:w-7/12 lg:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-white">
              Jasa Pengacara Perceraian, Hak Asuh Anak, Harta Gono Gini dan Pidana
            </h1>
            
            <p className="mt-6 text-lg text-gray-200 max-w-lg mx-auto md:mx-0">
              Lawfirm AKB & CO menyediakan pendampingan hukum profesional untuk menangani Perceraian, Hak Asuh Anak, Harta Gono Gini dan Pidana dengan strategi yang efektif.
            </p>
            
            <a 
              href={whatsappUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-10 inline-flex items-center gap-3 bg-amber-400 text-neutral-900 font-bold py-3 px-6 rounded-md shadow-lg hover:bg-amber-500 transition-all duration-300 ease-in-out hover:scale-105"
            >
              <FaWhatsapp size={22} />
              <span>Ajukan Kasus Anda Sekarang</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;