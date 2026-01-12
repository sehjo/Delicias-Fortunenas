import "./About3.css";
import panArtesanal from "../../../Image/pan.png";
import contactIcon from "../../../icons/Vector.svg";

export function About3() {
  return (
    <>
      <div className="about3-container">
        <div className="about3-text-container">
          <div className="about3-info">
            <h3>Vision</h3>
            <p>
              Ser la mejor propuesta en la zona, 
              ofreciendo productos artesanales de alto valor, 
              comprometida con la mejora continua y con excelente servicio al cliente.
            </p>
          </div>
          <div className="about3-info">
            <h3>Mision</h3>
            <p>
              Elaborar productos artesanales de excelente calidad , 
              frescos, deliciosos que satisfagan los necesidades y gustos  de nuestros clientes.
            </p>
          </div>
          <ContactButton />
        </div>

        <div>
          <img 
          src={panArtesanal} 
          alt="Pan Artesanal" 
          />
        </div>
      </div>
    </>
  );
}

function ContactButton() {
  const handleContact = () => {
    window.location.href = 'mailto:contact@deliciasfortunenas.com';
  };

  return (
    <button className="contact-button" onClick={handleContact}>
      <img 
        src={contactIcon}
        alt="Contact Icon" 
        className="contact-icon"
      />
      <span className="contact-text">Contactenos</span>
    </button>
  );
}
