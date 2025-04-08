import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="font-bold text-white">
      <Link to="/login">
        <button className="hover:bg-black-400 cursor-pointer rounded-sm border-2 border-solid border-blue-500 bg-blue-500 px-5 py-1 transition-colors duration-200 ease-in-out hover:border-blue-200">
          Login
        </button>
      </Link>
    </div>
  );
}

export default Login;
