import { useState } from 'react';

const CommentForm = ({ onAddComment }) => { 
  const [formData, setFormData] = useState({
    comment: '',
    name: '',
    email: '',
    website: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddComment(formData); 
    alert('Terima kasih atas komentar Anda!');
    setFormData({ comment: '', name: '', email: '', website: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-300 mb-1">
          KOMENTAR <span className="text-red-500">*</span>
        </label>
        <textarea id="comment" name="comment" rows="4" value={formData.comment} onChange={handleChange} required className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400"></textarea>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
            NAMA <span className="text-red-500">*</span>
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400"/>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
            EMAIL <span className="text-red-500">*</span>
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400"/>
        </div>
      </div>
      <div>
        <label htmlFor="website" className="block text-sm font-medium text-gray-300 mb-1">
          WEBSITE
        </label>
        <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className="w-full bg-zinc-700 border border-zinc-600 rounded-md p-3 text-white focus:ring-amber-400 focus:border-amber-400"/>
      </div>
      <div>
        <button type="submit" className="bg-amber-400 text-zinc-900 font-bold px-6 py-3 rounded-md hover:bg-amber-500 transition-colors duration-300">
          POST COMMENT
        </button>
      </div>
    </form>
  );
};

export default CommentForm;