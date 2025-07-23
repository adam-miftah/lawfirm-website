import { Scale } from 'lucide-react';

const civilCases = [
    "Perceraian",
    "Gugatan Harta Bersama / Gono-gini",
    "Hak Asuh Anak / Hadhanah Anak",
    "Sengketa Waris",
    "Gugatan Nafkah Anak & Isteri",
    "Kekerasan Dalam Rumah Tangga",
    "Perselingkuhan/ Perzinahan",
    "Gugatan Wanprestasi",
    "Penelantaran Anak, dsb."
];

const criminalCases = [
    "Kasus Pidana Umum / Kriminal",
    "Perkara Korupsi",
    "Penyalahgunaan Narkoba",
    "Pidana Pencucian Uang (TPPU)",
    "Tindak Pidana Militer",
    "Pencemaran Lingkungan Hidup",
    "Perlindungan Konsumen",
    "Properti dan Pertanahan",
    "Dll."
];

const ServicesHighlight = () => {
  return (
    <section id="layanan-utama" className="bg-zinc-800 py-20 border-y border-zinc-700/50">
      <div className="container mx-auto px-6">
        
        {/* Bagian Daftar Layanan */}
        <div>
          {/* Menggunakan div biasa, tanpa animasi */}
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white">Layanan Utama Kami</h2>
            <p className="mt-4 max-w-3xl mx-auto text-gray-300">
              Apapun permasalahan hukum yang Anda hadapi, tim kami siap memberikan solusi strategis dan pendampingan penuh pada area berikut:
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10 max-w-5xl mx-auto">
            
            {/* Kolom Kasus Perdata (menggunakan div biasa) */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-300 mb-6 border-b-2 border-amber-300/20 pb-2">Perdata</h3>
              <ul className="space-y-4">
                {civilCases.map((item, i) => (
                  <li key={`civil-${i}`} className="flex items-center gap-4">
                    <Scale className="w-5 h-5 text-amber-300/80 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kolom Kasus Pidana (menggunakan div biasa) */}
            <div>
              <h3 className="text-2xl font-semibold text-amber-300 mb-6 border-b-2 border-amber-300/20 pb-2">Pidana</h3>
              <ul className="space-y-4">
                {criminalCases.map((item, i) => (
                  <li key={`criminal-${i}`} className="flex items-center gap-4">
                    <Scale className="w-5 h-5 text-amber-300/80 flex-shrink-0" />
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesHighlight;