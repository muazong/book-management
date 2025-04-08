import { Link } from 'react-router-dom';
import { PagePath, Pages } from '@/enums';
import { usePageContext } from '@/hooks';

function Logo() {
  const { setCurrentPage } = usePageContext();

  return (
    <Link to={PagePath.Home} onClick={() => setCurrentPage(Pages.Home)}>
      <div className="flex items-center gap-3">
        <img src="/images/azong-book.png" className="h-[30px] w-[30px]" />
        <h1 className="font-poppins text-sm font-bold text-white sm:text-lg md:text-xl lg:text-2xl">
          aZongBook
        </h1>
      </div>
    </Link>
  );
}

export default Logo;
