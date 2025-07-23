import SEO from "../components/SEO";
const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Terima kasih. Detail kasus Anda telah terkirim. Tim kami akan segera menghubungi Anda dengan proposal jasa hukum.");
  };

  return (
    <>
      <SEO 
        title="Kontak Kami"
        description="Hubungi Lawfirm AKB & CO untuk menjadwalkan konsultasi. Temukan alamat kantor, nomor telepon, dan formulir kontak kami di sini."/>
      <section id="contact-page" className="py-20 bg-zinc-800">
        <div className="container mx-auto px-6">
          
          <div className="text-center mb-16 max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                Hubungi Kami
              </h1>
              <p className="mt-4 text-lg text-gray-300">
                Gunakan formulir di bawah ini untuk mengirimkan detail kasus Anda secara rahasia, atau hubungi kami langsung melalui informasi kontak yang tersedia di bagian bawah halaman.
              </p>
          </div>

          <div className="max-w-4xl mx-auto bg-zinc-900 text-white p-8 md:p-10 rounded-lg shadow-2xl">
            <h3 className="text-2xl font-bold text-white mb-6">Formulir Pengajuan Kasus</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Nama Lengkap</label>
                  <input type="text" id="name" name="name" required aria-label="Nama Lengkap" className="w-full bg-zinc-700/60 border border-zinc-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">Nomor Telepon</label>
                  <input type="tel" id="phone" name="phone" required aria-label="Nomor Telepon" className="w-full bg-zinc-700/60 border border-zinc-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Alamat Email</label>
                <input type="email" id="email" name="email" required aria-label="Alamat Email" className="w-full bg-zinc-700/60 border border-zinc-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300" />
              </div>
              <div>
                <label htmlFor="summary" className="block text-sm font-medium text-gray-300 mb-2">Ringkasan Singkat Kasus</label>
                <textarea id="summary" name="summary" rows="5" required aria-label="Ringkasan Singkat Kasus" className="w-full bg-zinc-700/60 border border-zinc-600 rounded-md py-3 px-4 text-white focus:ring-2 focus:ring-amber-400 focus:outline-none transition-all duration-300"></textarea>
              </div>
              <div className="text-center pt-4">
                <button type="submit" className="bg-amber-400 text-neutral-900 font-bold text-lg py-4 px-12 rounded-lg shadow-xl hover:bg-amber-500 transition-colors duration-300">
                  Kirim Detail Kasus
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;