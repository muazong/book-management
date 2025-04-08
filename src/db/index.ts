import { Book } from '@/interfaces';

const bookList: Book[] = [
  {
    id: '1',
    title: 'The Shadow of the Wind',
    author: 'Carlos Ruiz Zafón',
    published: new Date('2001-06-06'),
    image: 'https://m.media-amazon.com/images/I/71OFqSRFDgL.jpg',
    rating: 4.27,
    content:
      'A mysterious book leads a young boy into a labyrinth of secrets in post-war Barcelona. A haunting literary thriller.',
  },
  {
    id: '2',
    title: 'Fahrenheit 451',
    author: 'Ray Bradbury',
    published: new Date('1953-10-19'),
    image: 'https://m.media-amazon.com/images/I/71OFqSRFDgL.jpg',
    rating: 3.97,
    content:
      'In a dystopian future, books are banned and "firemen" burn any that are found. A profound warning on censorship and ignorance.',
  },
  {
    id: '3',
    title: 'The Thirteenth Tale',
    author: 'Diane Setterfield',
    published: new Date('2006-09-12'),
    image: 'https://m.media-amazon.com/images/I/71OFqSRFDgL.jpg',
    rating: 3.98,
    content:
      'A biographer is summoned to write the story of a reclusive author. Twists and family secrets unfold in gothic fashion.',
  },
  {
    id: '4',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    published: new Date('1813-01-28'),
    image: 'https://m.media-amazon.com/images/I/71OFqSRFDgL.jpg',
    rating: 4.29,
    content:
      'A timeless romantic tale of manners, marriage, and misunderstandings in 19th-century England.',
  },
  {
    id: '5',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    published: new Date('1932-08-01'),
    image: 'https://m.media-amazon.com/images/I/71OFqSRFDgL.jpg',
    rating: 3.99,
    content:
      'A futuristic society built on technological control and consumerism. A bold critique of conformity and loss of humanity.',
  },
];

export default bookList;
