import { ArrowLeft } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Calendar from '../components/Calendar';
import { articles } from '../data/articles.js';
import ArticleMeta from '../components/ArticleMeta';
import RecentArticles from '../components/RecentArticles';
import SEO from '../components/SEO';

const ArticleDetailPage = () => {
  const { slug } = useParams(); 
  const article = articles.find((article) => article.slug === slug);
  const [comments, setComments] = useState(() => {
    const savedComments = localStorage.getItem(`comments_${slug}`);
    return savedComments ? JSON.parse(savedComments) : [];
  });

   useEffect(() => {
    const savedComments = localStorage.getItem(`comments_${slug}`);
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    } else {
      setComments([]);
    }
    window.scrollTo(0, 0);
  }, [slug]);

  useEffect(() => {
    localStorage.setItem(`comments_${slug}`, JSON.stringify(comments));
  }, [comments, slug]);

  const handleAddComment = (commentData) => {
    const newComment = { ...commentData, id: Date.now() }; 
    setComments([...comments, newComment]);
  };

  if (!article) {
    return (
      <div className="text-center py-20 text-white min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="text-xl mt-2">Artikel Tidak Ditemukan</p>
        <Link to="/artikel" className="inline-flex items-center gap-2 bg-amber-400 text-zinc-900 font-bold px-5 py-2 rounded-lg hover:bg-amber-500 transition-colors duration-300 mt-6">
          <ArrowLeft size={20} /> 
          <span>Kembali ke Daftar Artikel</span>
        </Link>
      </div>
    );
  }

  return (
    <>
      <SEO 
        title={article.title}
        description={article.excerpt}
        keywords={article.tags}
      />
      <div className="bg-zinc-900 text-white min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-1">
          <article>
            <div className="flex flex-col lg:flex-row gap-12 mt-14">
              <div className="w-full lg:w-2/3">
                <img src={article.image} alt={article.title} className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg mb-8" />
                <ArticleMeta category={article.category} tags={article.tags} commentCount={comments.length} />
                <header className="mb-8">
                  <h1 className="text-3xl md:text-5xl font-bold my-3 leading-tight">{article.title}</h1>
                </header>
                <div className="prose prose-invert prose-lg max-w-none text-gray-300" dangerouslySetInnerHTML={{ __html: article.content }} />
              </div>

              <aside className="w-full lg:w-1/3 lg:sticky lg:top-28 self-start">
                <div className="bg-zinc-800 p-6 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Calendar dateString={article.date} />
                    <div>
                      <p className="text-gray-400 text-sm">Dipublikasikan pada</p>
                      <p className="font-semibold text-white">{article.date}</p>
                    </div>
                  </div>
                  <RecentArticles currentArticleSlug={article.slug} />
                </div>
              </aside>
            </div>
          </article>
        </div>
      </div>
    </>
  );
};

export default ArticleDetailPage;