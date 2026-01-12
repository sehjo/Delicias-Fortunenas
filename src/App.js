import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import { ProductsPage } from './Components/ProductsPage/ProductsPage';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPageFrameStart />} />
          <Route path="/productos" element={<ProductsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
