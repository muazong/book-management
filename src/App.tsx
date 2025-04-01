import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="bg-black-500 container mx-auto">
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
