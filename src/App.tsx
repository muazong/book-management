import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { PageContextProvider } from './context/PageContextProvider';

function App() {
  return (
    <PageContextProvider>
      <div className="bg-black-500 container mx-auto px-7">
        <Navbar />
        <Main />
        <Footer />
      </div>
    </PageContextProvider>
  );
}

export default App;
