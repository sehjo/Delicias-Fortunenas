import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import MainPageSecondFrame from './Components/MainPage-SecondFrame/MainPage-SecondFrame';
import { Footer } from './Components/Footer/Footer';
import MainPageThirdFrameAboutUs from './Components/MainPage-ThirdFrame/About-us/MainPage-ThirdFrame-AboutUs';
import MainPageThirdFrameFindUs from './Components/MainPage-ThirdFrame/Find-Us/MainPage-ThirdFrame-FindUs';
import MainPageFourthFrame from './Components/MainPage-FourthFrame/MainPage-FourthFrame';
import About from './Components/AboutSection/About';
import { ProductsPage } from './Components/ProductsPage/ProductsPage';
import LeafletMap from './Components/Map/LeafletMap';

function HomePage() {
  return (
    <>
      <MainPageFrameStart />
      <MainPageSecondFrame />
      <MainPageThirdFrameAboutUs/>
      <LeafletMap />
      <MainPageThirdFrameFindUs/>
      <MainPageFourthFrame/>
      {/* <About /> */}
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/acerca" element={<About />} />
          <Route path="/productos" element={<ProductsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
