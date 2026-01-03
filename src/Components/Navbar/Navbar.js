import './Navbar.css';
import iconPymeNavbar from '../../Image/LogoEmpresa.png';
import iconFb from '../../Image/iconFb.svg';
import iconInst from '../../Image/instagramIcon.png'   
  

const pathIndex = '../../../public/index.html'

export function NavBar() {
    return (
        <nav id="navbar">
            <div id = "divLeft">
                <img alt="IconFacebook" src={iconFb} id="iconFbNavbar"/>
            </div>

            <div id="divCenter">
                <a href= {pathIndex}> Inicio</a>
                <a href= ""> Acerca</a>
                <img alt="MainIcon" src={iconPymeNavbar} id="iconPymeNavbar"/>
                <a href= ""> Productos</a>
                <a href= ""> Contacto</a>
            </div>
            
            <div id = "divRight">
                <img alt="IconInstagram" src={iconInst} id="iconIgNavbar"/>
            </div>               
        </nav>
    );
}

