import { motion, useAnimationControls } from 'framer-motion';
import { FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';
import SEO from './SEO';

const pricingPackages = [
    { name: "Gugatan Cerai", price: "Rp 8 - 15 Jt", description: "Untuk proses perceraian standar tanpa sengketa hak asuh atau harta.", features: ["KTP Pihak Penggugat", "Buku Nikah (Muslim)", "Akta Perkawinan (non-Muslim)", "Minimal 2 Orang Saksi"], isPopular: false },
    { name: "Gugatan Cerai & Hak Asuh Anak", price: "Rp 12 - 20 Jt", description: "Layanan lengkap untuk perceraian sekaligus memperjuangkan hak asuh anak.", features: ["KTP Pihak Penggugat", "Buku Nikah / Akta Perkawinan", "Kartu Keluarga & Akta Anak", "Minimal 2 Orang Saksi"], isPopular: true },
    { name: "Gugatan Harta Gono-Gini", price: "Rp 20 - 50 Jt", description: "Fokus pada pembagian aset bersama setelah perceraian secara adil dan sesuai hukum.", features: ["KTP Pihak Penggugat", "Akta Cerai & Putusan Pengadilan", "Dokumen Kepemilikan Harta", "Minimal 2 Orang Saksi"], isPopular: false },
    { name: "Permohonan Waris", price: "Rp 30 - 50 Jt", description: "Pengurusan pembagian harta warisan untuk para ahli waris sesuai dengan hukum yang berlaku.", features: ["KTP & KK Para Pemohon", "Surat Kematian Pewaris", "Dokumen Harta Pewaris", "Para Saksi"], isPopular: false },
    { name: "Permohonan Isbat Nikah", price: "Rp 8 - 15 Jt", description: "Pengesahan pernikahan siri secara hukum negara agar memiliki kekuatan hukum yang sah.", features: ["KTP & Kartu Keluarga", "Surat Keterangan dari Kelurahan", "Surat Penolakan dari KUA", "Minimal 2 Orang Saksi"], isPopular: false },
    { name: "Pengesahan Perkawinan", price: "Rp 10 - 20 Jt", description: "Untuk pasangan non-Muslim yang pernikahannya belum tercatat secara resmi oleh negara.", features: ["KTP & Kartu Keluarga", "Surat dari Pemuka Agama", "Surat Keterangan dari Kelurahan", "Surat dari Catatan Sipil"], isPopular: false }
];

const Services = ({ isPage = false }) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  const controls = useAnimationControls();
  const [xPosition, setXPosition] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      if (carousel.current) {
        const newWidth = carousel.current.scrollWidth - carousel.current.offsetWidth;
        setWidth(newWidth);
      }
    };
    const timer = setTimeout(updateWidth, 100);
    window.addEventListener('resize', updateWidth);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  const handleScroll = (direction) => {
    const scrollAmount = carousel.current.querySelector('div').offsetWidth + 32;
    let newX;
    if (direction === 'right') {
      newX = Math.max(xPosition - scrollAmount, -width);
    } else {
      newX = Math.min(xPosition + scrollAmount, 0);
    }
    controls.start({ x: newX });
    setXPosition(newX);
  };

  const content = (
    <section id="biaya-layanan" className="py-20 bg-zinc-800 text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h1 className={`font-bold ${isPage ? 'text-4xl md:text-5xl' : 'text-3xl md:text-4xl'}`}>
            Jasa & Layanan Hukum
          </h1>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Kami menawarkan transparansi biaya dengan paket layanan yang jelas dan terstruktur sesuai kebutuhan Anda.
          </p>
        </div>

        <div className="flex items-center gap-2 md:gap-4">
          <button onClick={() => handleScroll('left')} disabled={xPosition === 0} className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Geser ke kiri">
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <motion.div 
            ref={carousel} 
            className="cursor-grab overflow-hidden w-full"
            whileTap={{ cursor: "grabbing" }}
          >
            <motion.div 
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              className="flex gap-8 py-4"
              animate={controls}
              transition={{ type: "tween", ease: "easeOut", duration: 0.5 }}
              onDragEnd={(event, info) => { setXPosition(info.offset.x); }}
            >
              {pricingPackages.map((pkg, index) => {
                const whatsAppNumber = "628111994484";
                const messageTemplate = `Halo, saya tertarik dengan layanan "${pkg.name}". Mohon informasinya lebih lanjut mengenai layanan ini. Terima kasih.`;
                const encodedMessage = encodeURIComponent(messageTemplate);
                const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

                return (
                  <div
                    key={index}
                    className={`flex-none w-full md:w-[calc((100%/3)-22px)] bg-zinc-900 rounded-lg shadow-2xl flex flex-col relative ${pkg.isPopular ? 'border-2 border-yellow-400' : 'border border-zinc-700'}`}
                  >
                    <div className="p-5 flex flex-col flex-grow">
                      {pkg.isPopular && (
                        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-yellow-400 text-zinc-900 font-bold text-xs px-3 py-1 rounded-full">
                          PALING POPULER
                        </div>
                      )}
                      <div className="h-24">
                        <h3 className="text-lg font-bold text-white">{pkg.name}</h3>
                        <p className="text-gray-400 mt-2 text-xs">{pkg.description}</p>
                      </div>
                      <p className="text-xl font-bold text-yellow-400 my-1">{pkg.price}</p>
                      <div className="mt-3 mb-5 flex-grow">
                        <p className="font-semibold text-white mb-2 text-sm">Syarat & Dokumen:</p>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <FileText className="w-4 h-4 text-yellow-400/70 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      {/* --- PERBAIKAN DI SINI --- */}
                      <a 
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`mt-auto w-full text-center font-bold py-2 px-5 rounded-lg transition-colors duration-300 ${pkg.isPopular ? 'bg-yellow-400 text-zinc-900 hover:bg-yellow-500' : 'bg-zinc-700 text-white hover:bg-zinc-600'}`}
                      >
                        Hubungi via WhatsApp
                      </a>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </motion.div>
          
          <button onClick={() => handleScroll('right')} disabled={xPosition <= -width + 10} className="bg-white/5 p-2 rounded-lg hover:bg-white/10 transition-all disabled:opacity-30 disabled:cursor-not-allowed" aria-label="Geser ke kanan">
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );

  if (isPage) {
    return (
      <>
        <SEO 
          title="Jasa & Layanan Hukum"
          description="Daftar lengkap layanan hukum dan estimasi biaya dari Lawfirm AKB & CO."
        />
        {content}
      </>
    );
  }

  return content;
};

export default Services;