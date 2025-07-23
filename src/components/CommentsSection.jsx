import CommentForm from './CommentForm';
import CommentList from './CommentList'; 

const CommentsSection = ({ comments, onAddComment }) => { 
  return (
    <div id="kolom-komentar" className="mt-16 scroll-mt-24">
      {/* Tampilkan daftar komentar yang sudah ada */}
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
        {comments.length} Komentar
      </h2>
      <CommentList comments={comments} />

      {/* Form untuk menambah komentar baru */}
      <div className="mt-12">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          Tinggalkan Balasan
        </h3>
        <p className="text-gray-400 mb-8">
          Alamat email Anda tidak akan dipublikasikan. Ruas yang wajib ditandai <span className="text-red-500">*</span>
        </p>
        <CommentForm onAddComment={onAddComment} />
      </div>
    </div>
  );
};

export default CommentsSection;