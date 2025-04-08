import { PagePath } from '@/enums';
import { useAuthContext } from '@/hooks';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function LoginPage() {
  const { user } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(PagePath.Home);
  }, [user, navigate]);

  return (
    <div>
      <p className="text-white">Login Page</p>
      <Link to={PagePath.Home}>Home</Link>
    </div>
  );
}

export default LoginPage;
