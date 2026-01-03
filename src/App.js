import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import { GoogleMap } from './Components/Map/GoogleMap';
import LeafletMap from './Components/Map/LeafletMap';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <GoogleMap/>
      <LeafletMap/>
      </div>
  );
}

export default App;
