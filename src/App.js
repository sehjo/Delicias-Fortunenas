import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import MainPageSecondFrame from './Components/MainPage-SecondFrame/MainPage-SecondFrame';
import LeafletMap from './Components/Map/LeafletMap';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <MainPageFrameStart/>
      <MainPageSecondFrame/>
      <LeafletMap/>
      </div>
  );
}

export default App;
