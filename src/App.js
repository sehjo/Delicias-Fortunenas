import './App.css';
import { Footer } from './Components/Footer/Footer';
import { NavBar } from './Components/Navbar/Navbar';
import LeafletMap from './Components/Map/LeafletMap';

function App() {
  return (
    <div className="App">
      <NavBar />
      <LeafletMap/>
      <Footer />
    </div>
  );
}

export default App;
