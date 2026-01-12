import './App.css';

import { NavBar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { About1 } from './Components/AboutSection/About1/About1';
import { Personal } from './Components/AboutSection/Personal/Personal';
import { About2 } from './Components/AboutSection/About2/About2';
import { About3 } from './Components/AboutSection/About3/About3';
import About from './Components/AboutSection/About';

function App() {
  return (
    <div className="App">
      {/* Navigation bar */}
      <NavBar /> 

      {/* About Us section */}
      <About />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
