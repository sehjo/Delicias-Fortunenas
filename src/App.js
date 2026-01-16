import './App.css';
import { NavBar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

import MainPage from './Components/MainPage/MainPage';
function App() {
  return (
    <div className="App">
      <NavBar />
      <MainPage />
      <Footer />     
    </div>
  );
}

export default App;
