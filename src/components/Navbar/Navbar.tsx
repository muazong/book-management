import Logo from './components/Logo';
import Navigations from './components/Navigations';
import Button from './components/Button';

function Navbar() {
  return (
    <div className="flex w-full max-w-screen-xl items-center justify-between">
      <Logo />
      <Navigations />
      <Button />
    </div>
  );
}

export default Navbar;
