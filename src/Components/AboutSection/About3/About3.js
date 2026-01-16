import "./About3.css";
import artisanBread from "../../../Image/pan.png";
import contactIcon from "../../../icons/Vector.svg";

export function About3() {
  return (
    <>
      <div className="about3-container">
        <div className="about3-img-container">
          <img src={artisanBread} alt="Pan Artesanal" />
        </div>

        <div className="about3-text-container">
          <div className="about3-info">
            <div>
              <h3>VISIÓN</h3>
              <p>
                Ser la mejor propuesta en la zona, ofreciendo productos
                artesanales de alto valor, comprometida con la mejora continua y
                con excelente servicio al cliente.
              </p>
            </div>
            <div>
              <h3>MISIÓN</h3>
              <p>
                Elaborar productos artesanales de excelente calidad, frescos,
                deliciosos que satisfagan los necesidades y gustos de nuestros
                clientes.
              </p>
            </div>
          </div>
          <ContactButton />
        </div>
      </div>
    </>
  );
}

function ContactButton() {
  return (
    <button className="about3-contact-button">
      <img src={contactIcon} alt="Contact Icon" className="contact-icon" />
      <span className="contact-text">Contactenos</span>
    </button>
  );
}
