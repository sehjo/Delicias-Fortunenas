import "./Footer.css";
import { FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const email = "delifortuna.28042020@gmail.com";
const phone1 = "(506) 8390-2262";
const phone2 = "(506) 6435-8374";
const facebookLink =
  "https://www.facebook.com/p/Delicias-Fortune%C3%B1as-100063545834955/";
const instagramLink = "https://www.instagram.com/delicias_fortunenas/";
const tiktokLink = "https://www.tiktok.com/@deliciasfortunenas";
const whatsappLink = "https://wa.me/50683902262";

export function Footer() {
  return (
    <footer>
      <div className="footer-background">
        <div className="footer-content">
          {/*Horario*/}
          <div className="column-footer">
            <h3 className="subtitle-footer">Horario</h3>
            <div>
              <p>
                <strong>Trabajamos únicamente bajo pedido.</strong>
                <br></br>
                Los pedidos se realizan de <strong>lunes a viernes:</strong>
              </p>
              <ul>
                <li>Pedidos los lunes, con entrega el miércoles</li>
                <li>Pedidos los miércoles, con entrega el viernes</li>
              </ul>
              <p>Para más información, no dude en contactarnos.</p>
            </div>
          </div>

          {/*Email*/}
          <div className="column-footer">
            <h3 className="subtitle-footer">Email</h3>

            <div className="email-content">
              <div className="contact-item">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/email.svg`}
                  alt="email-icon"
                  className="contact-icon"
                />
                <a href={`MAILTO:${email}`}>{email}</a>
              </div>

              <div className="icons-item">
                <a
                  href={tiktokLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="TikTok"
                  className="social-icons-border"
                >
                  <FaTiktok className="social-icon" />
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="social-icons-border"
                >
                  <FaInstagram className="social-icon" />
                </a>
                <a
                  href={facebookLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="social-icons-border"
                >
                  <FaFacebookF className="social-icon" />
                </a>
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="social-icons-border"
                >
                  <FaWhatsapp className="social-icon" />
                </a>
              </div>
            </div>
          </div>

          {/*Telefonos*/}
          <div className="column-footer">
            <h3 className="subtitle-footer">Telefonos</h3>
            <div className="contact-content">
              <TelephoneLink phoneNumber={phone1} />
              <TelephoneLink phoneNumber={phone2} />
            </div>
          </div>

          {/*Mensaje*/}
          <div className="column-footer">
            <h3 className="subtitle-footer">¡Contáctanos!</h3>
            <p className="footer-message">
              Más que pan, es una experiencia artesanal que despierta tus
              sentidos.
            </p>
          </div>
        </div>
        <p className="copyrigth-text">
          &copy; {new Date().getFullYear()} Delicias Fortuneñas. Todos los
          derechos reservados.
        </p>
      </div>
    </footer>
  );
}
export function TelephoneLink({ phoneNumber }) {
  return (
    <div className="contact-item">
      <img
        src={`${process.env.PUBLIC_URL}/icons/phone.svg`}
        alt="phone-icon"
        className="contact-icon"
      />
      <a
        href={`tel:${phoneNumber}`}
        onClick={(e) => {
          e.preventDefault();
          if (window.confirm(`¿Llamar al ${phoneNumber}?`)) {
            window.location.href = `tel:${phoneNumber}`;
          }
        }}
      >
        {phoneNumber}
      </a>
    </div>
  );
}
