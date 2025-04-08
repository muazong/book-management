import { PagePath } from '@/enums';
import { useAuthContext } from '@/hooks';
import { Link } from 'react-router-dom';

const styles =
  'hover:bg-black-400 cursor-pointer rounded-sm border-2 border-solid border-blue-500 bg-blue-500 px-5 py-1 transition-colors duration-200 ease-in-out hover:border-blue-200';

function Login() {
  const { user, authLogout } = useAuthContext();

  return (
    <div className="font-bold text-white">
      {user ? (
        <button className={styles} onClick={authLogout}>
          Logout
        </button>
      ) : (
        <Link to={PagePath.Login}>
          <button className={styles}>Login</button>
        </Link>
      )}
    </div>
  );
}

export default Login;
