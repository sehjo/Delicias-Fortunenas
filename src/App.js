import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import LeafletMap from './Components/Map/LeafletMap';

function App() {
  return (
    <div className="App">
      <NavBar/> 
      <LeafletMap/>
      </div>
  );
}

export default App;
