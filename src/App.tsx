import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import { AuthContextProvider, PageContextProvider } from './context';

function App() {
  return (
    <AuthContextProvider>
      <PageContextProvider>
        <div className="bg-black-500 container mx-auto px-7">
          <Navbar />
          <Main />
          <Footer />
        </div>
      </PageContextProvider>
    </AuthContextProvider>
  );
}

export default App;
