import { PagePath } from '@/enums';
import { useAuthContext } from '@/hooks';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const {
    user,
    login,
    register,
    isRegistering,
    setIsRegistering,
    errorMessage,
    setErrorMessage,
  } = useAuthContext();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  useEffect(() => {
    if (user) navigate(PagePath.Home);
  }, [user, navigate]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (isRegistering) {
      if (confirmPassword !== password) {
        setErrorMessage('Password do not match!');
      } else {
        setErrorMessage('');
        register(email, password, name);
        login(email, password);
      }
    } else {
      login(email, password);
      setErrorMessage('');
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="relative h-[500px] w-[500px] rounded-sm bg-white p-5"
      >
        <h1 className="font-montserrat text-center text-3xl font-bold">
          {!isRegistering ? 'Login' : 'Sign Up'}
        </h1>

        {/* Name */}
        {isRegistering && (
          <div className="mb-7">
            <label className="text-lg" htmlFor="name">
              Name:
            </label>
            <input
              className="font-roboto border-black-400 h-[40px] w-full border p-3 text-lg outline-none placeholder:text-sm"
              type="text"
              name="name"
              id="name"
              autoComplete="off"
              required
              value={name}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setName(event.target.value.trim())
              }
              placeholder="John Wick"
            />
          </div>
        )}

        {/* Email */}
        <div>
          <label className="text-lg" htmlFor="email">
            Email:
          </label>
          <input
            className="font-roboto border-black-400 h-[40px] w-full border p-3 text-lg outline-none placeholder:text-sm"
            type="email"
            name="email"
            id="email"
            autoComplete="off"
            required
            value={email}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setEmail(event.target.value.trim())
            }
            placeholder="sample@gmail.com"
          />
        </div>

        {/* Password */}
        <div className="my-7">
          <label className="text-lg" htmlFor="password">
            Password:
          </label>
          <input
            className="font-roboto border-black-400 h-[40px] w-full border p-3 text-lg outline-none placeholder:text-sm"
            type="password"
            name="password"
            id="password"
            required
            autoComplete="off"
            value={password}
            onChange={(event: ChangeEvent<HTMLInputElement>) =>
              setPassword(event.target.value.trim())
            }
            placeholder="Enter your password..."
          />
        </div>

        {/* Confirm Password */}
        {isRegistering && (
          <div className="my-5">
            <label className="text-lg text-black" htmlFor="confirm-password">
              Confirm Password:
            </label>
            <input
              className="font-roboto border-black-400 h-[40px] w-full border p-3 text-lg outline-none placeholder:text-sm"
              type="password"
              name="confirm-password"
              id="confirm-password"
              autoComplete="off"
              value={confirmPassword}
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(event.target.value.trim())
              }
              required
              placeholder="Please confirm your password..."
            />
          </div>
        )}

        <span className="text-sm text-red-500">{errorMessage}</span>

        <div className="text-right">
          <button
            type="submit"
            className="cursor-pointer rounded-sm border-none bg-blue-500 px-4 py-2 text-black hover:bg-blue-400"
          >
            {!isRegistering ? 'Login' : 'Sign Up'}
          </button>
        </div>

        <div className="absolute bottom-3">
          {!isRegistering ? (
            <p className="text-sm" onClick={() => setIsRegistering(true)}>
              Don't have an account?
              <a href="#" className="text-cyan-700">
                &nbsp;Sign up
              </a>
            </p>
          ) : (
            <p className="text-sm" onClick={() => setIsRegistering(false)}>
              Already have an account?
              <a href="#" className="text-cyan-700">
                &nbsp;Log in
              </a>
            </p>
          )}
        </div>
      </form>
    </>
  );
}

export default LoginForm;
