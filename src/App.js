import './App.css';

import { NavBar } from './Components/Navbar/Navbar';
import { ProductCard } from './Components/ProductCard/ProductCard';
import bread1 from './Image/cinnamon_rolls.png';
import bread2 from './Image/Signature_brioche_with_local_butter.png';
import bread3 from './Image/carrot_cake.png';
import { Footer } from './Components/Footer/Footer';
import LeafletMap from './Components/Map/LeafletMap';

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <NavBar /> 
      
      {/* Products section */}
      <div style={{ 
        display: 'flex', 
        gap: '20px', 
        padding: '40px', 
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'stretch'
      }}>
        <ProductCard 
          title="Cinnamon Rolls"
          price="$4.50"
          description="Deliciosos rollos de canela recién horneados con glaseado cremoso."
          image={bread1}
        />
        <ProductCard 
          title="Brioche con Mantequilla Local"
          price="$5.50"
          description="Nuestro brioche signature hecho con mantequilla local premium."
          image={bread2}
        />
        <ProductCard 
          title="Pastel de Zanahoria"
          price="$6.00"
          description="Esponjoso pastel de zanahoria con especias y frosting de queso crema."
          image={bread3}
        />
      <LeafletMap/>
      </div>
      
      {/* Footer */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
