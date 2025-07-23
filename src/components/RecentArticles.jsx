import { Link } from 'react-router-dom';
import { articles } from '../data/articles.js';

const RecentArticles = ({ currentArticleSlug }) => {
  const recent = articles
    .filter(article => article.slug !== currentArticleSlug)
    .slice(0, 3);

  return (
    <div className="mt-8">
      <h3 className="text-lg font-bold text-white mb-4">Artikel Terbaru</h3>
      <div className="space-y-4">
        {recent.map(article => (
          <Link 
            key={article.slug}
            to={`/artikel/${article.slug}`} 
            className="block group">
            <p className="font-semibold text-amber-400 group-hover:text-amber-300 transition-colors">
              {article.title}
            </p>
            <p className="text-xs text-gray-400">{article.date}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RecentArticles;