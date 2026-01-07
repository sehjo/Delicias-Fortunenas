import './App.css';
import { NavBar } from './Components/Navbar';
import { BreadCard } from './Components/BreadCard';
import bread1 from './Image/cinnamon_rolls.png';
import bread2 from './Image/Signature_brioche_with_local_butter.png';
import bread3 from './Image/carrot_cake.png';
import { Footer } from './Components/Footer';
import { Footer } from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        padding: '40px', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <BreadCard 
          title="Cinnamon Rolls"
          price="$4.50"
          description="Deliciosos rollos de canela recién horneados con glaseado cremoso."
          image={bread1}
        />
        <BreadCard 
          title="Brioche con Mantequilla Local"
          price="$5.50"
          description="Nuestro brioche signature hecho con mantequilla local premium."
          image={bread2}
        />
        <BreadCard 
          title="Pastel de Zanahoria"
          price="$6.00"
          description="Esponjoso pastel de zanahoria con especias y frosting de queso crema."
          image={bread3}
        />
      </div>
      <NavBar />
      <p>Parrafo ejemplo para lanzar el footer hacia abajo</p>
      <h1>titulo1 ejemplo para lanzar el footer hacia abajo</h1>
      <Footer />
    </div>
  );
}

export default App;
