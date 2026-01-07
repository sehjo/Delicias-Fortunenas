import './App.css';
import { NavBar } from './Components/Navbar';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <p>Parrafo ejemplo para lanzar el footer hacia abajo</p>
      <h1>titulo1 ejemplo para lanzar el footer hacia abajo</h1>
      <Footer />
    </div>
  );
}

export default App;
