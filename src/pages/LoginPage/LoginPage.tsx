import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div>
      <p className="text-white">Login Page</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default LoginPage;
