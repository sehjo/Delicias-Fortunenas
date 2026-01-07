import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';
import MainPageSecondFrame from './Components/MainPage-SecondFrame/MainPage-SecondFrame';
function App() {
  return (
    <div className="App">
      <NavBar/> 
      <MainPageFrameStart/>
      <MainPageSecondFrame/>
    </div>
  );
}

export default App;
