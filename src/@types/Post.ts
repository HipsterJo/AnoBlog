
export interface Post {
    id: number;
    title: string;
    content: string;
    date: string;
    author: {
      name: string;
      avatar: string;
      community: string;
    };
    likes: number;
    comments: number;
    views: number;
    reposts: number;
    saved: boolean;
    previewImage: string;
  }