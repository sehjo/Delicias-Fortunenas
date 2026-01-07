import './Navbar.css';
import iconPymeNavbar from '../../Image/LogoEmpresa.png';
import iconFb from '../../Image/iconFb.svg';
import { FaInstagram } from "react-icons/fa";   

const pathIndex = '/';

export function NavBar() {
    return (
        <nav id="navbar">
            <div id = "divLeft">
                <a href= "https://www.facebook.com/p/Delicias-Fortune%C3%B1as-100063545834955/" target="_blank" rel="noopener noreferrer">
                    <img alt="IconFacebookWeb" src={iconFb} id="iconFbNavbar"/>
                </a>
            </div>
            <div id="divCenter">
                <a href= {pathIndex}> Inicio</a>
                <a href= "#"> Acerca</a>
                <img alt="MainIcon" src={iconPymeNavbar} id="iconPymeNavbar"/>
                <a href= "#"> Productos</a>
                <a href= "#"> Contacto</a>
            </div>            
            <div id = "divRight">
                <a href="https://www.instagram.com/delicias_fortunenas/" target="_blank" rel="noopener noreferrer"> 
                    <FaInstagram id="iconIgNavbar" alt="IconInstagramWeb"/>
                </a>
            </div>               
        </nav>
    );
}

