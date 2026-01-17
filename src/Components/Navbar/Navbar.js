import './Navbar.css';
import iconPymeNavbar from '../../Image/Company_Logo.png';
import iconFb from '../../Image/iconFb.svg';
import { FaInstagram } from "react-icons/fa";
import { Link } from 'react-router-dom';

export function NavBar() {
    return (
        <nav id="navbar">
            <div id = "divLeft">
                <a href= "https://www.facebook.com/p/Delicias-Fortune%C3%B1as-100063545834955/" target="_blank" rel="noopener noreferrer">
                    <img alt="IconFacebook" src={iconFb} id="iconFbNavbar"/>
                </a>
            </div>
            <div id="divCenter">
                <Link to="/"> Inicio</Link>
                <Link to="/acerca"> Acerca</Link>
                <img alt="MainIcon" src={iconPymeNavbar} id="iconPymeNavbar"/>
                <Link to="/productos"> Productos</Link>
                <Link to="/contacto"> Contacto</Link>
            </div>            
            <div id = "divRight">
                <a href= "https://www.instagram.com/delicias_fortunenas/" target="_blank" rel="noopener noreferrer"> 
                    <FaInstagram id="iconIgNavbar"/>
                </a>
            </div>               
        </nav>
    );
}

