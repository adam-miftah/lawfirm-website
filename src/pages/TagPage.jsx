import { useParams, Link } from 'react-router-dom';
import { articles } from '../data/articles.js';
import SEO from '../components/SEO';

const slugToTitle = (slug) => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const TagPage = () => {
  const { tagName } = useParams(); 
  const pageTitle = slugToTitle(tagName);

  const filteredArticles = articles.filter(article => 
    article.tags && article.tags.some(tag => 
      tag.toLowerCase().replace(/ /g, '-') === tagName
    )
  );

  return (
    <>
      <SEO 
        title={`Artikel dengan Tag: ${pageTitle}`}
        description={`Kumpulan artikel yang berhubungan dengan ${pageTitle} dari Lawfirm AKB & CO.`}
      />
      <section className="bg-zinc-800 py-20 text-white min-h-screen">
        <div className="container mx-auto px-6">
          <div className="text-left mb-16">
            <p className="text-gray-400">Menampilkan artikel untuk:</p>
            <h1 className="text-4xl md:text-5xl font-bold text-amber-400">
              Tag: {pageTitle}
            </h1>
          </div>

          {filteredArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredArticles.map((article) => (
                <div key={article.slug} className="bg-zinc-900 rounded-lg overflow-hidden shadow-xl flex flex-col group">
                  <Link to={`/artikel/${article.slug}`} className="block overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title} 
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105" 
                      loading="lazy"
                    />
                  </Link>
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex justify-between items-center text-sm text-gray-400 mb-2">
                      <span>{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold text-amber-300 mb-2 flex-grow min-h-[56px]">{article.title}</h2>
                    <Link to={`/artikel/${article.slug}`} className="mt-auto text-amber-400 hover:text-amber-300 font-semibold self-start">
                      Baca Selengkapnya &rarr;
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">Tidak ada artikel yang ditemukan untuk tag ini.</p>
          )}
        </div>
      </section>
    </>
  );
};

export default TagPage;