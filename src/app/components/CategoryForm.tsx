import React, { useState } from 'react';
import { Tag } from 'lucide-react';
import { Category } from '../types';
import { saveCategory } from '../utils/storage';

interface CategoryFormProps {
  onSave: () => void;
}

export default function CategoryForm({ onSave }: CategoryFormProps) {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newCategory: Category = {
      id: crypto.randomUUID(),
      name
    };

    saveCategory(newCategory);
    setName('');
    onSave();
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="New category name"
        className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        required
      />
      <button
        type="submit"
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
      >
        <Tag className="h-5 w-5 mr-2" />
        Add Category
      </button>
    </form>
  );
}