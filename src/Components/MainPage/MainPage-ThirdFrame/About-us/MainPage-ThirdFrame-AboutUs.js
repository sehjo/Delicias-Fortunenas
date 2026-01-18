import './MainPage-ThirdFrame-AboutUs.css';
import { Link } from 'react-router-dom';

export default function MainPageThirdFrame() {
    return (
        <div id="container-thirdframe">
            <div id='text-about-us'>
                <p>Acerca de Nosotros</p>
            </div>
            <div>
                <Link to="/acerca" id='link-about-us'>
                    <button id='btn-read-more'>Leer mas</button>
                </Link>
            </div>
        </div>
    );
}