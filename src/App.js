import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import MainPageSecondFrame from './Components/MainPage-SecondFrame/MainPage-SecondFrame';
import LeafletMap from './Components/Map/LeafletMap';
import MainPageThirdFrame from './Components/MainPage-ThirdFrame/MainPage-ThirdFrame';

function App() {
  return (
    <div className="App">
      <MainPageThirdFrame/>
      <LeafletMap/>
      </div>
  );
}

export default App;
