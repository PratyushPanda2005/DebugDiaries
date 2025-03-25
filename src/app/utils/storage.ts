import { BlogPost, Category } from '../types';

const POSTS_KEY = 'blog_posts';
const CATEGORIES_KEY = 'blog_categories';

export const getStoredPosts = (): BlogPost[] => {
  const posts = localStorage.getItem(POSTS_KEY);
  return posts ? JSON.parse(posts) : [];
};

export const savePost = (post: BlogPost): void => {
  const posts = getStoredPosts();
  const existingPostIndex = posts.findIndex(p => p.id === post.id);
  
  if (existingPostIndex >= 0) {
    posts[existingPostIndex] = { ...post, updatedAt: new Date().toISOString() };
  } else {
    posts.push({ ...post, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() });
  }
  
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};

export const deletePost = (id: string): void => {
  const posts = getStoredPosts().filter(post => post.id !== id);
  localStorage.setItem(POSTS_KEY, JSON.stringify(posts));
};

export const getStoredCategories = (): Category[] => {
  const categories = localStorage.getItem(CATEGORIES_KEY);
  return categories ? JSON.parse(categories) : [];
};

export const saveCategory = (category: Category): void => {
  const categories = getStoredCategories();
  if (!categories.find(c => c.id === category.id)) {
    categories.push(category);
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
  }
};