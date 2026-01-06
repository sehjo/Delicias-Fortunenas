import './App.css';
import { NavBar } from './Components/Navbar';
import { BreadCard } from './Components/BreadCard';
import bread1 from './Image/foto pan5.png';
import bread2 from './Image/Captura de pantalla 2025-12-30 184314.png';
import bread3 from './Image/Captura de pantalla 2025-12-30 184716.png';
import { Footer } from './Components/Footer';

function App() {
  return (
    <div className="App">
      <NavBar /> 
      <div className="bread-cards-container">
        <BreadCard 
          title="French Baguette"
          price="$3.50"
          description="Crispy on the outside, soft on the inside. Traditional French bread."
          image={bread1}
        />
        <BreadCard 
          title="Artisan Bread"
          price="$4.00"
          description="Handcrafted bread with a rustic crust and perfect texture."
          image={bread2}
        />
        <BreadCard 
          title="Sourdough Loaf"
          price="$5.00"
          description="Classic sourdough with a tangy flavor and chewy texture."
          image={bread3}
        />
      </div>
      <NavBar />
      <Footer />
    </div>
  );
}

export default App;
