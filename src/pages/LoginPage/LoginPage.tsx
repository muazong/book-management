import { PagePath } from '@/enums';
import { useAuthContext } from '@/hooks';
import { UserInfo } from '@/interfaces';
import { FormEvent, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
  const { user, authLogin } = useAuthContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(PagePath.Home);
  }, [user, navigate]);

  const formRef = useRef<HTMLFormElement | null>(null);

  const handleSubmit = (el: FormEvent<HTMLFormElement>) => {
    if (!formRef.current) return;

    el.preventDefault();
    const formData = new FormData(formRef.current);
    const email = formData.get('email')?.toString().trim() ?? '';
    const password = formData.get('password')?.toString().trim() ?? '';

    const userInfo: UserInfo = {
      email,
      password,
    };

    authLogin(userInfo);
  };

  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="h-[560px] w-[500px] rounded-md border-2 border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.4)] p-4">
        <h1 className="font-montserrat text-center text-3xl font-bold text-white">
          Login
        </h1>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className="my-5">
            <label className="text-lg text-white" htmlFor="email">
              Email:
            </label>
            <input
              className="font-roboto h-[40px] w-full border border-white p-3 text-lg text-white outline-none"
              type="email"
              name="email"
              id="email"
            />
          </div>

          <div className="my-5">
            <label className="text-lg text-white" htmlFor="password">
              Password:
            </label>
            <input
              className="font-roboto h-[40px] w-full border border-white p-3 text-lg text-white outline-none"
              type="password"
              name="password"
              id="password"
            />
          </div>

          <button
            type="submit"
            className="rounded-sm border-none bg-blue-500 px-4 py-2 text-white hover:bg-blue-400"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
