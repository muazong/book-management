import Logo from './components/Logo';
import Navigations from './components/Navigations';
import Button from './components/Button';

function Navbar() {
  return (
    <nav className="relative flex w-full max-w-screen-xl items-center justify-between">
      <Logo />
      <Navigations />
      <Button />
    </nav>
  );
}

export default Navbar;
