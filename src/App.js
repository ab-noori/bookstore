import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Categories from './pages/Categories';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </main>

      <footer>
        <p className="copyright">&copy; 2023 Bookstore CMS | Developed by Abdulali Noori</p>
      </footer>
    </>
  );
}

export default App;
