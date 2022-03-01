import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Search from './components/Search';
import ShowDetails from './pages/ShowDetails';
import Favorites from './pages/Favorites';
import { ShowsProvider } from './hooks/ShowsContext';
function App() {
  return (
    <div className="App">
      <ShowsProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/search" element={<Search />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="*" element={<Home />}></Route>
        </Routes>
        <Footer />
      </ShowsProvider>
    </div>
  );
}

export default App;
