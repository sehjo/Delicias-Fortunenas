import './App.css';
import { Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import MainPage from './Components/MainPage/MainPage';
import About from './Components/AboutSection/About.js';
import { ProductsPage } from './Components/ProductsPage/ProductsPage';
import { ContactPage } from './Components/ContactPage/ContactPage';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/acerca" element={<About />} />
        <Route path="/productos" element={<ProductsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      <Footer />     
    </div>
  );
}

export default App;
