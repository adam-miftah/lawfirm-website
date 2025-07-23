import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqData = [
  {
    question: "Berapa biaya yang diperlukan untuk jasa pengacara?",
    answer: "Biaya layanan kami sangat transparan dan bervariasi tergantung pada kompleksitas kasus. Kami menawarkan beberapa paket layanan yang bisa Anda lihat di halaman 'Jasa Hukum' untuk mendapatkan gambaran awal. Konsultasi pertama akan kami gunakan untuk menganalisis kasus dan memberikan proposal biaya yang terperinci tanpa biaya tersembunyi."
  },
  {
    question: "Berapa lama proses perceraian biasanya berlangsung?",
    answer: "Durasi proses perceraian sangat bervariasi, tergantung pada faktor-faktor seperti kerumitan pembagian aset, sengketa hak asuh anak, dan tingkat kerja sama antara kedua belah pihak. Namun, komitmen kami adalah menjalankan proses seefisien mungkin dengan strategi yang jelas untuk menghindari penundaan yang tidak perlu."
  },
  {
    question: "Apakah kerahasiaan kasus saya terjamin?",
    answer: "Tentu saja. Menjaga kerahasiaan informasi klien adalah salah satu pilar etika profesi kami. Semua informasi yang Anda berikan, mulai dari konsultasi pertama hingga akhir kasus, dijamin kerahasiaannya 100% dan dilindungi oleh hukum."
  },
  {
    question: "Bisakah saya mengurus perceraian tanpa pengacara?",
    answer: "Bisa, namun sangat tidak disarankan. Proses hukum memiliki banyak seluk-beluk prosedural yang jika terlewat dapat merugikan Anda. Menggunakan pengacara profesional memastikan semua hak Anda (terutama hak asuh anak dan harta) terlindungi secara maksimal dan proses berjalan sesuai koridor hukum yang benar."
  },
  {
    question: "Dokumen apa saja yang perlu saya siapkan di awal?",
    answer: "Untuk memulai, dokumen dasar yang umumnya diperlukan adalah KTP, Kartu Keluarga, dan Buku Nikah (atau Akta Perkawinan bagi non-Muslim). Untuk kasus spesifik seperti sengketa harta atau hak asuh anak, dokumen tambahan akan diperlukan. Tim kami akan memandu Anda secara detail pada tahap awal."
  },
  {
    question: "Bagaimana cara memulai konsultasi pertama?",
    answer: "Sangat mudah. Anda bisa langsung menghubungi kami melalui nomor WhatsApp atau telepon yang tertera di bagian bawah halaman ini, atau mengisi formulir di halaman 'Kontak'. Tim kami akan segera menjadwalkan sesi konsultasi awal untuk Anda."
  }
];

const FaqItem = ({ item, index, activeIndex, setActiveIndex }) => {
    const isOpen = index === activeIndex;

    return (
        <div className="border-b border-zinc-700 py-4">
            <button onClick={() => setActiveIndex(isOpen ? null : index)} className="flex justify-between items-center w-full text-left" aria-expanded={isOpen}>
                <span className="text-lg font-medium text-white">{item.question}</span>
                <div className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                    <ChevronDown className="w-6 h-6 text-amber-300" />
                </div>
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen mt-4' : 'max-h-0'}`}>
                <p className="text-gray-300 leading-relaxed pb-2">
                    {item.answer}
                </p>
            </div>
        </div>
    );
};

const FaqSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section id="faq" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Pertanyaan Sering Diajukan
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Menemukan jawaban atas keraguan Anda. Jika pertanyaan Anda tidak ada di sini, jangan ragu untuk menghubungi kami.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <FaqItem 
              key={index}
              item={item}
              index={index}
              activeIndex={activeIndex}
              setActiveIndex={setActiveIndex}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;