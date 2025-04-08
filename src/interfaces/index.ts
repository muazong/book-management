interface Book {
  id: string;
  title: string;
  author: string;
  content: string;
  rating: number;
  published: Date;
  image: string;
}

interface UserInfo {
  email: string;
  password: string;
}

export { type Book, type UserInfo };
