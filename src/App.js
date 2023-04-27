import { Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Categories from './pages/Categories';
import Home from './pages/Home';
import Navigation from './components/Navigation';
import './App.css';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>

      <main>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>
        </Provider>
      </main>

      <footer>
        <p className="copyright">&copy; 2023 Bookstore CMS | Developed by Abdulali Noori</p>
      </footer>
    </>
  );
}

export default App;
