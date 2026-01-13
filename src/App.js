import './App.css';

import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import MainPageSecondFrame from './Components/MainPage-SecondFrame/MainPage-SecondFrame';
import { Footer } from './Components/Footer/Footer';
import LeafletMap from './Components/Map/LeafletMap';
import MainPageThirdFrameAboutUs from './Components/MainPage-ThirdFrame/About-us/MainPage-ThirdFrame-AboutUs';
import MainPageThirdFrameFindUs from './Components/MainPage-ThirdFrame/Find-Us/MainPage-ThirdFrame-FindUs';
import MainPageFourthFrame from './Components/MainPage-FourthFrame/MainPage-FourthFrame';
import About from './Components/AboutSection/About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPageFrameStart />
      <MainPageSecondFrame />
      <MainPageThirdFrameAboutUs/>
      <LeafletMap />
      <MainPageThirdFrameFindUs/>
      <MainPageFourthFrame/>
      {/* About Us section */}
      <About />
    </div>
  );
}

export default App;
