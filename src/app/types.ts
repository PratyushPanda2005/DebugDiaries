export interface BlogPost {
    id: string;
    title: string;
    content: string;
    category: string;
    createdAt: string;
    updatedAt: string;
  }
  
export interface Category {
    id: string;
    name: string;
}