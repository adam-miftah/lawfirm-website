import { Award, DollarSign, Lightbulb, ShieldCheck, Star, HeartHandshake } from 'lucide-react';

const features = [
  {
    icon: <HeartHandshake className="w-10 h-10 text-amber-300" />,
    title: "Layanan Berorientasi Klien",
    description: "Kepuasan Anda adalah prioritas utama. Kami mendengarkan, memahami, dan memberikan pelayanan hukum yang responsif dan berdedikasi penuh pada kasus Anda."
  },
  {
    icon: <Award className="w-10 h-10 text-amber-300" />,
    title: "Pengalaman & Keahlian Terbukti",
    description: "Dengan rekam jejak solid dan pengalaman bertahun-tahun, tim kami memiliki reputasi terpercaya dalam menavigasi kasus hukum yang paling kompleks sekalipun."
  },
  {
    icon: <Lightbulb className="w-10 h-10 text-amber-300" />,
    title: "Strategi Hukum Inovatif",
    description: "Kami tidak hanya mengikuti jalur konvensional. Kami merancang strategi hukum yang kreatif dan proaktif untuk memberikan Anda keunggulan kompetitif."
  },
  {
    icon: <DollarSign className="w-10 h-10 text-amber-300" />,
    title: "Biaya yang Jelas & Terukur",
    description: "Kami memberikan rincian biaya yang transparan di awal. Tidak ada biaya tersembunyi, sehingga Anda mendapatkan kepastian dan nilai terbaik."
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-amber-300" />,
    title: "Legalitas Resmi & Kepatuhan Penuh",
    description: "Sebagai firma hukum resmi, semua tindakan dan dokumen kami memiliki kekuatan hukum yang sah dan diakui oleh negara."
  },
  {
    icon: <Star className="w-10 h-10 text-amber-300" />,
    title: "Jaminan Kualitas & Profesionalisme",
    description: "Kami menjamin standar kualitas tertinggi dalam setiap tahap, dari analisis awal hingga putusan akhir, dengan perhatian penuh pada detail."
  }
];

const WhyHireUs = () => {
  return (
    <section id="why-hire-us" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-6 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Mengapa Memilih Kami Sebagai Mitra Hukum Anda
          </h2>
          <p className="mt-4 text-lg text-gray-300 max-w-3xl mx-auto">
            Kami tidak hanya menawarkan nasihat hukum, kami memberikan strategi kemenangan yang dirancang khusus untuk Anda.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-zinc-800 p-8 rounded-lg shadow-lg text-left h-full">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-amber-300 mb-2">{feature.title}</h3>
              <p className="text-gray-300 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyHireUs;