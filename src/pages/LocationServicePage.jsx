import { useParams, Link } from 'react-router-dom';
import { locationServices } from '../data/locationServices.js';
import SEO from '../components/SEO';
import { ArrowLeft } from 'lucide-react';

const LocationServicePage = () => {
  const { slug } = useParams();
  const pageData = locationServices.find((service) => service.slug === slug);

  if (!pageData) {
    return (
      <div className="text-center py-20 text-white min-h-screen flex flex-col items-center justify-center">
        <SEO title="404 - Halaman Tidak Ditemukan" />
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl mt-2">Halaman Tidak Ditemukan</p>
        <Link to="/" className="text-amber-400 hover:underline mt-6 inline-block">
          &larr; Kembali ke Halaman Utama
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={pageData.title}
        description={pageData.description}
      />
      <div className="bg-zinc-900 text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <article>
            <Link 
              to="/jasa-hukum" 
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 mb-8 transition-colors"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Semua Layanan</span>
            </Link>

            {/* Konten dinamis dirender di sini */}
            <div 
              className="prose prose-invert prose-lg max-w-none text-gray-300"
              dangerouslySetInnerHTML={{ __html: pageData.content }} 
            />
            
            {/* Anda bisa menambahkan komponen lain seperti form kontak di bawah ini */}
          </article>
        </div>
      </div>
    </>
  );
};

export default LocationServicePage;