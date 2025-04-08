import bookList from '@/db';
import BookCard from './BookCard';

function AllBooks() {
  return (
    <div>
      <ul className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {bookList.map((book) => (
          <BookCard
            key={book.id}
            id={book.id}
            title={book.title}
            rating={book.rating}
            image={book.image}
          />
        ))}
      </ul>
    </div>
  );
}

export default AllBooks;
