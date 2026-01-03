import './Navbar.css';
import iconPymeNavbar from '../../Image/LogoEmpresa.png';
import iconFb from '../../Image/iconFb.svg';
import iconInst from '../../Image/instagramIcon.png'   
  

const pathIndex = '../../../public/index.html'

export function NavBar() {
    return (
        <nav id="navbar">
            <div id = "divLeft">
                <a href= "https://www.facebook.com/p/Delicias-Fortune%C3%B1as-100063545834955/">
                    <img alt="IconFacebook" src={iconFb} id="iconFbNavbar"/>
                </a>
            </div>

            <div id="divCenter">
                <a href= {pathIndex}> Inicio</a>
                <a href= ""> Acerca</a>
                <img alt="MainIcon" src={iconPymeNavbar} id="iconPymeNavbar"/>
                <a href= ""> Productos</a>
                <a href= ""> Contacto</a>
            </div>
            
            <div id = "divRight">
                <a href= "https://www.instagram.com/delicias_fortunenas/"> 
                    <img alt="IconInstagram" src={iconInst} id="iconIgNavbar"/>
                </a>
            </div>               
        </nav>
    );
}

