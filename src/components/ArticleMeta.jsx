import { Link } from 'react-router-dom';
import { MessageSquare } from 'lucide-react';

const ArticleMeta = ({ category, tags = [], commentCount = 0 }) => {
  return (
    <div className="flex items-center flex-wrap gap-x-4 gap-y-2 text-sm text-gray-400 mb-6">
      <span>Oleh <Link to="/tentang-kami" className="font-semibold text-white hover:text-amber-400">Lawfirm AKB</Link></span>
      <span className="text-gray-600">|</span>
      
      {/* Kategori */}
      <Link to={`/kategori/${category.toLowerCase().replace(/ /g, '-')}`} className="font-semibold text-white hover:text-amber-400">
        {category}
      </Link>
      <span className="text-gray-600">|</span>
      
      {/* Tags */}
      <div className="flex items-center gap-2 flex-wrap">
        {tags.map(tag => (
          <Link key={tag} to={`/tag/${tag.toLowerCase().replace(/ /g, '-')}`} className="text-xs bg-zinc-700 text-gray-300 px-2 py-1 rounded hover:bg-zinc-600">
            {tag}
          </Link>
        ))}
      </div>
      <span className="text-gray-600">|</span>

      {/* Jumlah Komentar (statis untuk sekarang) */}
      <a href="#kolom-komentar" className="flex items-center gap-1.5 hover:text-amber-400 transition-colors">
        <MessageSquare size={14} />
        <span>{commentCount} Komentar</span>
      </a>
    </div>
  );
};

export default ArticleMeta;