import { useState } from 'react'; 
import { Link } from 'react-router-dom';
import { articles } from '../data/articles.js';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO.jsx';

const ArticlePage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(3); // Menampilkan 6 artikel per halaman

  // Logika untuk paginasi
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

  // Fungsi untuk mengubah halaman dan scroll ke atas
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    const articleSection = document.getElementById('artikel');
    if (articleSection) {
      articleSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <SEO 
        title="Artikel Hukum Terbaru"
        description="Kumpulan artikel dan wawasan hukum terbaru dari Lawfirm AKB & CO mengenai hukum keluarga, pidana, kontrak, dan isu hukum lainnya di Indonesia."
      />
      <section id="artikel" className="bg-zinc-800 py-20 text-white scroll-mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold">Artikel & Wawasan Hukum</h1>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Wawasan terbaru dari tim kami untuk membantu Anda memahami seluk-beluk hukum keluarga.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentArticles.map((article) => (
              <div key={article.slug} className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl flex flex-col group">
                <Link to={`/artikel/${article.slug}`} className="block overflow-hidden">
                  <img 
                    src={article.image} 
                    alt={article.title} 
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                    loading="lazy"
                    width="400" 
                    height="267"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                    <span>{article.category}</span>
                    <span>{article.date}</span>
                  </div>
                  <h2 className="text-xl font-bold text-amber-300 mb-2 min-h-[56px]">{article.title}</h2>
                  <p className="text-gray-300 mb-4 flex-grow">{article.excerpt}</p>
                  <Link to={`/artikel/${article.slug}`} className="mt-auto text-amber-400 hover:text-amber-300 font-semibold self-start">
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {articles.length > articlesPerPage && (
            <Pagination 
              articlesPerPage={articlesPerPage}
              totalArticles={articles.length}
              paginate={paginate}
              currentPage={currentPage}
            />
          )}
        </div>
      </section>
    </>
  );
};

export default ArticlePage;