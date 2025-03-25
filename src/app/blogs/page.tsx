'use client'
import React, { useState, useEffect } from 'react';
import { PenSquare } from 'lucide-react';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import CategoryForm from '../components/CategoryForm';
import { getStoredPosts, getStoredCategories } from '../utils/storage';
import { BlogPost, Category } from '../types';

const Bloggingpage = () => {
    const [posts, setPosts] = useState<BlogPost[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
  
    const loadData = () => {
      setPosts(getStoredPosts());
      setCategories(getStoredCategories());
    };
  
    useEffect(() => {
      loadData();
    }, []);
  return (
    <div className="min-h-screen bg-gray-50">
    <header className="bg-white shadow">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center">
          <PenSquare className="h-8 w-8 text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-900">Debug Diaries</h1>
        </div>
      </div>
    </header>

    <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
      <div className="px-4 py-6 sm:px-0">
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Categories</h2>
          <CategoryForm onSave={loadData} />
        </div>

        <div className="bg-white rounded-lg shadow p-6 mb-8">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Create New Post</h2>
          <PostForm onSave={loadData} categories={categories} />
        </div>

        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">Posts</h2>
          <PostList 
            posts={posts.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())}
            categories={categories}
            onDelete={loadData}
          />
        </div>
      </div>
    </main>
  </div>
  )
}

export default Bloggingpage;