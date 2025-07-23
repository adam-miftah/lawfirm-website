import { Award, DollarSign, Lightbulb, ShieldCheck, Star, Users } from 'lucide-react';
import SEO from '../components/SEO';

const reasons = [
    { icon: <DollarSign className="w-10 h-10 text-amber-300" />, title: "Harga Terbaik", text: "Kami menawarkan harga yang kompetitif dan transparan, memastikan nilai terbaik bagi klien kami." },
    { icon: <Users className="w-10 h-10 text-amber-300" />, title: "Pelayanan Profesional", text: "Kami berkomitmen untuk memberikan pelayanan hukum yang berkualitas tinggi dengan berfokus pada kepuasan klien." },
    { icon: <Award className="w-10 h-10 text-amber-300" />, title: "Pengalaman dan Reputasi", text: "Dengan pengalaman yang luas, kami memiliki reputasi yang solid dan terpercaya di industri ini." },
    { icon: <Lightbulb className="w-10 h-10 text-amber-300" />, title: "Inovasi dan Kreativitas", text: "Kami selalu mencari cara inovatif dan kreatif dalam menyelesaikan masalah hukum klien." },
    { icon: <ShieldCheck className="w-10 h-10 text-amber-300" />, title: "Perijinan Lengkap", text: "Kami memiliki perijinan yang lengkap dan mampu mengurus berbagai perijinan yang dibutuhkan oleh klien kami." },
    { icon: <Star className="w-10 h-10 text-amber-300" />, title: "Jaminan Mutu", text: "Kami menjamin mutu layanan hukum yang kami berikan, memastikan setiap kasus ditangani dengan profesionalisme." }
];

const AboutPage = () => {
  return (
    <>
      <SEO 
        title="Tentang Kami"
        description="Pelajari profil Lawfirm AKB & CO, tim pengacara berpengalaman kami, dan komitmen kami untuk memberikan layanan hukum terbaik di Jakarta."
      />
      <div className="bg-zinc-800 text-white py-20">
        <div className="container mx-auto px-6">
          
          {/* Judul Utama */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold">Tentang Law Firm AKB & Co</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Profesional, Progresif, dan Berorientasi pada Klien.
            </p>
          </div>

          {/* --- POSISI GAMBAR BARU --- */}
          <div className="max-w-xs mx-auto mb-12">
            <img 
              src="/images/image.webp"
              alt="Tim Law Firm AKB and CO"
              className="rounded-lg shadow-2xl object-cover w-full h-auto"
              loading="lazy"
            />
          </div>

          {/* --- KONTEN TEKS --- */}
          <div className="max-w-4xl mx-auto text-gray-300 leading-relaxed space-y-12">
            <div>
              <p>
                Law Firm AKB and CO, adalah kantor Hukum yang mulai berkarir pada tahun 2019 berkedudukan di Kota Jakarta Selatan dan wilayah kerja seluruh Indonesia. Dengan Advokat atau konsultan hukum  profesional Kasus yang ditangani meliputi hukum ketenagakerjaan, kasus pidana umum seperti penggelapan, penipuan, penganiayaan, perzinahan, perusakan, perjudian, pencurian, pencemaran nama baik, dan/atau fitnah, serta saksi palsu. Untuk pidana khusus, Law Firm AKB and CO. menangani perkara korupsi, penyalahgunaan narkoba, pidana pencucian uang (TPPU), pencemaran lingkungan hidup, dan perlindungan konsumen.
              </p>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold text-amber-300 mb-4 text-center md:text-left">Lingkup Penanganan Kasus</h2>
              <p className="mb-4">
                Kasus yang ditangani meliputi hukum ketenagakerjaan, kasus pidana umum seperti penggelapan, penipuan, penganiayaan, perzinahan, perusakan, perjudian, pencurian, pencemaran nama baik, dan/atau fitnah, serta saksi palsu. Untuk pidana khusus, Law Firm AKB and CO. menangani perkara korupsi, penyalahgunaan narkoba, pidana pencucian uang (TPPU), pencemaran lingkungan hidup, dan perlindungan konsumen.
              </p>
              <p>
                Dalam ranah perdata umum, Law Firm AKB and CO. mengurus perbankan, gugatan wanprestasi, perbuatan melawan hukum, hutang – piutang, kasus pertanahan, jual beli perumahan dan apartemen, serta sengketa waris. Kami juga menangani perkawinan, pengesahan nikah siri, dispensasi perkawinan, perceraian, sengketa hak asuh anak, gugatan harta bersama, gugatan nafkah anak dan isteri, serta Kekerasan Dalam Rumah Tangga (KDRT).
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-amber-300 mb-4 text-center md:text-left">Komitmen Kami</h2>
              <p className="mb-4">
                Dengan komitmen memberikan tim terbaik untuk memenuhi tujuan dan sasaran dari setiap permasalahan klien, Law Firm AKB and CO. didukung oleh advokat profesional dan jaringan yang luas. Mereka memiliki optimisme dan visi ke depan dengan memberikan pelayanan hukum terbaik, tanggap, bersahabat, dan menjaga marwah sebagai advokat.
              </p>
              <p>
                Pendekatan hukum yang progresif dan proaktif dengan penggunaan teknologi mutakhir, serta fokus terhadap kebutuhan klien dalam menawarkan jasa hukum dan pendapat hukum sesuai dengan standar profesionalisme yang tinggi, merupakan komitmen utama dari Law Firm AKB and CO. Kami mengupayakan kepastian hukum atas setiap perkara yang ditangani untuk memenuhi harapan klien.
              </p>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Alasan Memilih Kami</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-zinc-900 p-8 rounded-lg text-center">
                  <div className="flex justify-center mb-4">{reason.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-gray-400">{reason.text}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default AboutPage;