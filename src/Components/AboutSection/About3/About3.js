import "./About3.css";

export function About3() {
  return (
    <section className="about3-container">
      <div className="about3-content">
        <div className="about3-image-section">
          {/* Espacio para la imagen - añadir después */}
          <div className="about3-image-placeholder">
            {/* <img src={tuImagen} alt="Producto artesanal" className="about3-image" /> */}
          </div>
        </div>

        <div className="about3-text-section">
          <div className="about3-vision">
            <h2 className="about3-heading">VISIÓN</h2>
            <p className="about3-text">
              Ser la mejor propuesta en la zona, ofreciendo productos artesanales de alto 
              valor, comprometida con la mejor continua y con excelente servicio al cliente.
            </p>
          </div>

          <div className="about3-mission">
            <h2 className="about3-heading">MISIÓN</h2>
            <p className="about3-text">
              Elaborar productos artesanales de excelente calidad, frescos, deliciosos que 
              satisfagan las necesidades y gustos de nuestros clientes.
            </p>
          </div>

          <ContactButton />
        </div>
      </div>
    </section>
  );
}

function ContactButton() {
  const handleContact = () => {
    // Agregar funcionalidad de contacto aquí
    console.log("Contactar");
  };

  return (
    <button className="contact-button" onClick={handleContact}>
      <span className="contact-icon">?</span>
      <span className="contact-text">Contactenos</span>
    </button>
  );
}
