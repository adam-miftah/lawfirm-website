import { Link } from 'react-router-dom';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  const whatsAppMessage = "Halo, saya menemukan website Anda dan ingin berkonsultasi mengenai masalah hukum saya. Mohon informasinya. Terima kasih.";
  const emailSubject = "Permohonan Konsultasi Hukum dari Website";
  const emailBody = "Yth. Tim Hukum,\n\nSaya ingin meminta informasi lebih lanjut mengenai layanan Anda.\n\nBerikut adalah detail singkat saya:\nNama: [Silakan isi nama Anda]\nTelepon: [Silakan isi nomor telepon Anda]\n\nTerima kasih.";

  const encodedWhatsAppMessage = encodeURIComponent(whatsAppMessage);
  const encodedEmailSubject = encodeURIComponent(emailSubject);
  const encodedEmailBody = encodeURIComponent(emailBody);

  const whatsappUrl1 = `https://wa.me/628111994484?text=${encodedWhatsAppMessage}`;
  const mailtoUrl = `mailto:lawfirmakb@gmail.com?subject=${encodedEmailSubject}&body=${encodedEmailBody}`;

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Tentang Kami', href: '/tentang-kami' },
    { name: 'Jasa Hukum', href: '/jasa-hukum' },
    { name: 'Artikel', href: '/artikel' },
    { name: 'Kontak', href: '/kontak' },
  ];

  const socialLinks = [
    { name: "LinkedIn", Icon: FaLinkedin, href: "#" },
    { name: "Instagram", Icon: FaInstagram, href: "https://www.instagram.com/akb_lawfirm?igsh=MW8wbnBwaG83cmF3Ng==" },
    { name: "Facebook", Icon: FaFacebook, href: "#" }
  ];

  return (
    <footer className="bg-zinc-900 text-gray-300 border-t border-zinc-800">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-3">
              <img src="/images/logo.webp" alt="Logo Law Firm AKB & CO" className="h-12 w-12 flex-shrink-0" />
              <div>
                <h2 className="text-lg font-bold text-white leading-tight">LAW FIRM</h2>
                <h3 className="text-base font-bold text-amber-300 leading-tight">AKB & CO</h3>
              </div>
            </Link>
            <p className="text-sm">
              Memberikan pendampingan dan solusi hukum yang profesional, efektif, dan terpercaya.
            </p>
            <div className="flex space-x-2 pt-2">
              {socialLinks.map(({ name, Icon, href }) => (
                <a 
                  key={name} 
                  href={href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-amber-300 transition-colors p-2" 
                  aria-label={name}>
                  <Icon size={20} />
                  <span className="sr-only">{name}</span>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-3 text-sm">
              {navLinks.map(link => (
                <li key={link.name}>
                  <Link to={link.href} className="hover:text-amber-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Hubungi Kami</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt size={24} className="text-amber-300 flex-shrink-0 -ms-1 mt-1" />
                <span>GEDUNG MENARA 165, Lt. 17, Jl. T.B Simatupang Kav. 1, Cilandak Timur, Jakarta Selatan</span>
              </li>
              <li className="flex items-center gap-4">
                <FaPhoneAlt size={18} className="text-amber-300 flex-shrink-0" />
                <a href="tel:02138820031" className="hover:text-amber-300">0811-1994-484</a>
              </li>
              <li className="flex items-start gap-4">
                <FaWhatsapp size={20} className="text-amber-300 flex-shrink-0 mt-0" />
                <a href={whatsappUrl1} target="_blank" rel="noopener noreferrer" className="block hover:text-amber-300">0811-1994-484</a>
              </li>
              <li className="flex items-start gap-4">
                <FaEnvelope size={18} className="text-amber-300 flex-shrink-0 mt-1" />
                <a href={mailtoUrl} className="hover:text-amber-300">lawfirmakb@gmail.com</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Lokasi Kami</h3>
            <div className="rounded-lg overflow-hidden shadow-lg ring-1 ring-zinc-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.7946746052544!2d106.80958509999999!3d-6.2906958!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1b483f3353d%3A0x6431ecae76711712!2sLAW%20FIRM%20ABDUL%20KODIR%20BATUBARA%20%26%20CO!5e0!3m2!1sid!2sid!4v1752908632586!5m2!1sid!2sid" 
                width="100%" 
                height="180" 
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Lokasi Kantor Law Firm AKB & CO"></iframe>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-zinc-950 border-t border-zinc-800">
        <div className="container mx-auto px-6 py-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left gap-2">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} LAW FIRM ABDUL KODIR BATUBARA & CO. Semua Hak Dilindungi.
          </p>
          <p className="text-sm text-gray-500">
            Published by <a href="https://www.adammiftah.com" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">www.adammiftah.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;