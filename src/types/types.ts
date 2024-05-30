export interface Project {
    id: number;
    title: string;
    description: string;
    url: string;
    upvotes: number;
    createdAt: string;
    updatedAt: string;
    hashtag: string;
  }

export interface Post {
  id: string;
  title: string;
  description: string | null;
  hashtag: string;
  upvotes: number;
  authorId: number;
}
