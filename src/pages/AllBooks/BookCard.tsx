import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Book } from '@/interfaces';

function BookCard({ id, title, rating, image }: Book) {
  return (
    <li
      key={id}
      className="flex cursor-pointer flex-col items-center justify-center gap-3 rounded-md border border-[rgba(255,255,255,0.3)] bg-[rgba(255,255,255,0.1)] p-4 transition-all duration-200 ease-in-out hover:scale-[1.025]"
    >
      <Link to={`/detail/${id}`}>
        <img
          src={image}
          className="h-auto w-full rounded-sm sm:w-[250px] md:w-[300px] lg:w-[360px]"
          alt={title}
        />
        <p className="text-lg text-white">{title}</p>
        <div className="flex w-full items-center justify-center gap-1">
          <p className="text-md text-white">{rating} &minus; </p>
          <Rating
            className="h-[16px] w-[16xp] max-w-[100px]"
            value={rating}
            readOnly
            transition="position"
          />
        </div>
      </Link>
    </li>
  );
}

export default BookCard;
