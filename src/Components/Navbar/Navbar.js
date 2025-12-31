import './Navbar.css';
import iconoEmpresa from '../../Image/LogoEmpresa.png';
    

let prueba = {
    titulo: "pepe",
    descripcion: "hola",
    dato: 123,
    estado: ["feliz","morado","ingles"]
}

export function NavBar() {
    return (
        <nav id="navbar">
            <div style= {{backgroundColor: 'lightblue', padding: '10px', marginTop: '10px'}}>
            </div>
            <div id="divCenter">
                <h2>Inicio</h2>
                <h2>Acerca</h2>
                <img alt="IconoEmpresa" src={iconoEmpresa} id="logoNavbar"/>
                <h2>Productos</h2>
                <h2>Contacto</h2>
            </div>
            <div style= {{backgroundColor: 'lightblue', padding: '10px', marginTop: '10px'}}>
            </div>
                
        </nav>
    );
}

