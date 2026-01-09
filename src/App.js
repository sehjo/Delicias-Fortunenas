import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import MainPageSecondFrame from './Components/MainPage-SecondFrame/MainPage-SecondFrame';
import LeafletMap from './Components/Map/LeafletMap';
import MainPageThirdFrameAboutUs from './Components/MainPage-ThirdFrame/About-us/MainPage-ThirdFrame-AboutUs';
function App() {
  return (
    <div className="App">
      <MainPageThirdFrameAboutUs/>
      <LeafletMap/>
      </div>
  );
}

export default App;
