import { PenSquare, BrainCircuit, Gavel, Handshake, FileCheck2, Archive } from 'lucide-react';

const steps = [
  {
    icon: <PenSquare className="h-10 w-10 text-amber-300" />,
    title: "Penandatanganan Kuasa & Pembayaran",
    description: "Setelah kesepakatan, Anda secara resmi menunjuk kami. Proses administrasi awal diselesaikan dengan cepat dan transparan."
  },
  {
    icon: <BrainCircuit className="h-10 w-10 text-amber-300" />,
    title: "Analisis & Perumusan Strategi",
    description: "Tim kami langsung membedah setiap detail kasus Anda, mengumpulkan bukti, dan menyusun rencana aksi hukum yang paling efektif dan terukur."
  },
  {
    icon: <Handshake className="h-10 w-10 text-amber-300" />,
    title: "Negosiasi & Upaya Mediasi",
    description: "Kami memprioritaskan penyelesaian damai untuk mencapai hasil terbaik tanpa proses pengadilan yang panjang."
  },
  {
    icon: <Gavel className="h-10 w-10 text-amber-300" />,
    title: "Eksekusi Litigasi di Pengadilan",
    description: "Jika mediasi tidak tercapai, kami siap bertarung untuk Anda. Kami mewakili dan memperjuangkan hak-hak Anda sepenuhnya di muka persidangan."
  },
  {
    icon: <FileCheck2 className="h-10 w-10 text-amber-300" />,
    title: "Finalisasi & Penyelesaian Kasus",
    description: "Setelah putusan, kami memastikan semua proses administrasi final berjalan lancar hingga kasus Anda selesai secara hukum."
  },
  {
    icon: <Archive className="h-10 w-10 text-amber-300" />,
    title: "Arsip & Dukungan Pasca-Kasus",
    description: "Semua dokumen kasus Anda kami arsipkan dengan aman. Kami tetap siap memberikan dukungan jika Anda memerlukan konsultasi di masa mendatang."
  }
];

const ProcessAfterHiring = () => {
  return (
    <section id="alur-kerja" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ini yang Terjadi Setelah Anda Resmi Menjadi Klien Kami
          </h2>
          <p className="mt-4 text-lg text-gray-200 max-w-3xl mx-auto">
            Proses yang transparan dan terstruktur untuk ketenangan pikiran Anda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-8 rounded-lg shadow-xl border-t-2 border-amber-300/50 flex flex-col items-start h-full">
              <div className="mb-4">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">
                <span className="text-amber-300">{`Langkah ${index + 1}:`}</span> {step.title}
              </h3>
              <p className="text-gray-300 leading-relaxed flex-grow">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessAfterHiring;