import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import { ProductCard } from './Components/ProductCard/ProductCard';
import bread1 from './Image/cinnamon_rolls.png';
import bread2 from './Image/Signature_brioche_with_local_butter.png';
import bread3 from './Image/carrot_cake.png';
import { Footer } from './Components/Footer/Footer';
import MainPageFrameStart from './Components/MainPage-FrameStart/MainPage-FrameStart';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <MainPageFrameStart/>
    </div>
  );
}

export default App;
