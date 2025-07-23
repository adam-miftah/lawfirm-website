import { UserCircle } from 'lucide-react';

const CommentList = ({ comments = [] }) => {
  if (comments.length === 0) {
    return <p className="text-gray-400 mt-8">Belum ada komentar.</p>;
  }

  return (
    <div className="mt-12 space-y-8">
      {comments.map((comment) => (
        <div key={comment.id} className="flex items-start gap-4">
          
          {/* Avatar Pengguna */}
          <div className="flex-shrink-0 bg-zinc-700 rounded-full p-2">
            <UserCircle className="w-8 h-8 text-gray-400" />
          </div>
          
          {/* Konten Komentar */}
          <div className="flex-grow bg-zinc-800 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="font-bold text-amber-400">{comment.name}</p>
              <p className="text-xs text-gray-500">
                {new Date().toLocaleDateString('id-ID', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric',
                })}
              </p>
            </div>
            <p className="text-gray-300">{comment.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentList;