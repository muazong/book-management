import LoginForm from './LoginForm';

function LoginPage() {
  return (
    <div className="container flex h-screen items-center justify-center">
      <div className="h-[560px] w-[500px] rounded-md border-2 border-[rgba(255,255,255,0.4)] bg-[rgba(255,255,255,0.4)] p-4">
        <h1 className="font-montserrat text-center text-3xl font-bold text-white">
          Login
        </h1>
        <LoginForm />
      </div>
    </div>
  );
}

export default LoginPage;
