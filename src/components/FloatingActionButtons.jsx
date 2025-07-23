import { useState, useEffect } from 'react';
// --- 1. Impor Ikon dari React Icons ---
import { FaWhatsapp, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const whatsAppNumber = "628111994484";
  const messageTemplate = "Halo, saya menemukan website Anda dan ingin berkonsultasi.";
  const encodedMessage = encodeURIComponent(messageTemplate);
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">
      {/* --- 2. Ganti Ikon Lucide dengan React Icons --- */}
      <a 
        href={whatsappUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="w-14 h-14 bg-green-500 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90" 
        aria-label="Hubungi via WhatsApp">
        <FaWhatsapp size={28} />
      </a>

      <a 
        href="tel:08111994484" 
        className="w-14 h-14 bg-blue-500 rounded-full flex items-center justify-center text-white shadow-lg transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90" 
        aria-label="Telepon Kami">
        <FaPhoneAlt size={22} />
      </a>

      {isVisible && (
        <button 
          onClick={scrollToTop} 
          className="w-14 h-14 bg-amber-400 rounded-full flex items-center justify-center text-neutral-900 shadow-lg transition-transform duration-200 ease-in-out hover:scale-110 active:scale-90" 
          aria-label="Kembali ke atas">
          <FaArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default FloatingActionButtons;