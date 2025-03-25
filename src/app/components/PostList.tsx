import React from 'react';
import { Trash2 } from 'lucide-react';
import { BlogPost, Category } from '../types';
import { deletePost } from '../utils/storage';

interface PostListProps {
  posts: BlogPost[];
  categories: Category[];
  onDelete: () => void;
}

export default function PostList({ posts, categories, onDelete }: PostListProps) {
  const handleDelete = (id: string) => {
    deletePost(id);
    onDelete();
  };

  const getCategoryName = (categoryId: string) => {
    return categories.find(cat => cat.id === categoryId)?.name || 'Uncategorized';
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="space-y-6">
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{post.title}</h2>
              <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                <span>{formatDate(post.createdAt)}</span>
                <span>•</span>
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {getCategoryName(post.category)}
                </span>
              </div>
            </div>
            <button
              onClick={() => handleDelete(post.id)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-700 whitespace-pre-wrap">{post.content}</p>
        </article>
      ))}
      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-8">
          No posts yet. Create your first post above!
        </div>
      )}
    </div>
  );
}