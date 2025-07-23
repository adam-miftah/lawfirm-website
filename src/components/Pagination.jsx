import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ articlesPerPage, totalArticles, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="mt-16 flex justify-center items-center gap-2">
      <button
        onClick={() => paginate(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-md hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Halaman Sebelumnya">
        <ChevronLeft size={20} />
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => paginate(number)}
          className={`w-10 h-10 rounded-md font-bold transition-colors ${
            currentPage === number 
              ? 'bg-amber-400 text-zinc-900' 
              : 'bg-zinc-700 text-white hover:bg-zinc-600'
          }`}>
          {number}
        </button>
      ))}

      <button
        onClick={() => paginate(currentPage + 1)}
        disabled={currentPage === pageNumbers.length}
        className="p-2 rounded-md hover:bg-zinc-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        aria-label="Halaman Selanjutnya">
        <ChevronRight size={20} />
      </button>
    </nav>
  );
};

export default Pagination;