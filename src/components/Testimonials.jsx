import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "Hasilnya melebihi ekspektasi. Prosesnya cepat dan hak asuh anak sepenuhnya saya dapatkan. Sangat profesional dan efektif.",
    client: "Pengusaha",
    case: "Kasus Perceraian & Hak Asuh Anak"
  },
  {
    quote: "Saya pikir akan rumit, tapi tim hukum ini membuat semuanya jelas. Pembagian aset sangat adil dan sesuai dengan yang diperjuangkan.",
    client: "Karyawan Swasta",
    case: "Kasus Harta Gono-Gini"
  },
  {
    quote: "Transparansi biaya dan komunikasi yang jelas membuat saya tenang selama proses hukum berjalan. Sangat direkomendasikan.",
    client: "Dokter",
    case: "Kasus Mediasi Perceraian"
  },
  {
    quote: "Perlindungan hukum yang diberikan benar-benar maksimal. Saya merasa aman dan semua hak saya terpenuhi dengan baik.",
    client: "Pegawai Negeri Sipil",
    case: "Kasus Perlindungan Aset"
  },
  {
    quote: "Solusi yang ditawarkan sangat cerdas dan to-the-point, tidak bertele-tele. Menghemat banyak waktu dan energi saya.",
    client: "Arsitek",
    case: "Kasus Kesepakatan Damai"
  },
  {
    quote: "Layanan yang sangat responsif. Setiap pertanyaan saya dijawab dengan cepat dan tuntas. Profesionalisme tingkat tinggi.",
    client: "Dosen",
    case: "Kasus Litigasi"
  },
  {
    quote: "Berhasil mempertahankan aset penting keluarga berkat strategi hukum yang jitu. Terima kasih banyak atas bantuannya.",
    client: "Wiraswasta",
    case: "Kasus Pembagian Waris"
  },
  {
    quote: "Proses yang tadinya saya takuti ternyata bisa dilalui dengan lancar berkat pendampingan yang luar biasa.",
    client: "Manajer Proyek",
    case: "Kasus Perceraian Lengkap"
  },
];

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const nextTestimonial = () => {
    setDirection(1);
    setActiveIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };
  
  useEffect(() => {
    const timer = setTimeout(() => {
      nextTestimonial();
    }, 3000);

    return () => clearTimeout(timer);
  }, [activeIndex]); 


  return (
    <section id="testimoni" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          Kisah Sukses Klien Kami
        </h2>
        <p className="mt-4 text-lg text-white max-w-3xl mx-auto text-center">
          Kami tidak hanya berbicara tentang hasil, kami mewujudkannya.
        </p>
  
        <div className="mt-16 max-w-2xl mx-auto relative h-80 md:h-72 flex items-center justify-center">
          <button 
            onClick={prevTestimonial}
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-20 z-20 bg-gray-700/50 p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Previous Testimonial">
            <ChevronLeft className="text-white" size={24} />
          </button>
          
          <div className="w-full h-full overflow-hidden relative">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={activeIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="absolute w-full h-full bg-gray-800 p-8 rounded-lg shadow-lg border-l-4 border-brand-gold flex flex-col justify-center">
                <p className="text-white italic text-lg text-center">"{testimonials[activeIndex].quote}"</p>
                <div className="mt-6 text-center">
                  <p className="font-bold text-yellow-500">{testimonials[activeIndex].client}</p>
                  <p className="text-sm text-gray-400">{testimonials[activeIndex].case}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-20 z-20 bg-gray-700/50 p-2 rounded-full hover:bg-gray-700 transition-colors"
            aria-label="Next Testimonial">
            <ChevronRight className="text-white" size={24} />
          </button>
        </div>
        
        <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
                <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 w-2 rounded-full transition-colors ${
                        activeIndex === index ? 'bg-brand-gold' : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}/>
            ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;