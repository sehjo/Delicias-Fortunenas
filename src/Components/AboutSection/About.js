
import { NavBar } from '../Navbar/Navbar';
import { Footer } from '../Footer/Footer';
import { About1 } from './About1/About1';
import { Personal } from './Personal/Personal';
import { About2 } from './About2/About2';
import { About3 } from './About3/About3';

function About() {
  return (
    <div className="App">

      {/* About Us section */}
      <About1 />
      <About2 />
      {/* <About3 /> */}
      <Personal />

    </div>
  );
}

export default About;
