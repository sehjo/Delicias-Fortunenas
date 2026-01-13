import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import MainPageSecondFrame from './Components/MainPage-SecondFrame/MainPage-SecondFrame';
import LeafletMap from './Components/Map/LeafletMap';
import MainPageThirdFrameAboutUs from './Components/MainPage-ThirdFrame/About-us/MainPage-ThirdFrame-AboutUs';
import MainPageThirdFrameFindUs from './Components/MainPage-ThirdFrame/Find-Us/MainPage-ThirdFrame-FindUs';
import MainPageFourthFrame from './Components/MainPage-FourthFrame/MainPage-FourthFrame';
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPageFrameStart />
      
    </div>
  );
}

export default App;
