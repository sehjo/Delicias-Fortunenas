import React from "react";
import "../styles/Footer.css";
import { FaTiktok, FaFacebookF, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const email = "delifortuna.28042020@gmail.com";
const phone1 = "(506) 8390-2262";
const phone2 = "(506) 7087-7268";
const facebookLink ="https://www.facebook.com/p/Delicias-Fortune%C3%B1as-100063545834955/";
const instagramLink = "https://www.instagram.com/delicias_fortunenas/";
const tiktokLink = "https://www.tiktok.com/@deliciasfortunenas";
const whatsappLink = "https://wa.me/50683902262";

export function Footer() {
  return (
      <div className="footer-background">
        <div className="footer-content">
          {/*Horario*/}
          <div className="column-footer">
            <h3 className="subtitle-footer">Horario</h3>
            <ul className="schedule-item">
              <li>Lunes: 8:00 AM - 8:00 PM</li>
              <li>Martes: 8:00 AM - 8:00 PM</li>
              <li>Miércoles: 8:00 AM - 8:00 PM</li>
              <li>Jueves: 8:00 AM - 8:00 PM</li>
              <li>Viernes: 8:00 AM - 8:00 PM</li>
              <li>Sábado: 8:00 AM - 8:00 PM</li>
              <li>Domingo: Cerrado</li>
            </ul>
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
                <a href={`mailto:${email}`}>{email}</a>
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
              <div className="contact-item">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/phone.svg`}
                  alt="phone-icon"
                  className="contact-icon"
                />
                <a href={`tel:${phone1}`}>{phone1}</a>
              </div>
              <div className="contact-item">
                <img
                  src={`${process.env.PUBLIC_URL}/icons/phone.svg`}
                  alt="phone-icon"
                  className="contact-icon"
                />
                <a href={`tel:${phone2}`}>{phone2}</a>
              </div>
            </div>
          </div>

          {/*Mensaje*/}
          <div className="column-footer">
            <h3 className="subtitle-footer">¡Visítanos!</h3>
            <p className="footer-message">Endulza tu día con nuestras deliciosas fortunas. Cada bocado es una experiencia única que te hará volver por más.
            </p>
          </div>
        </div>
        <p className="footer-message">
          &copy; {new Date().getFullYear()} Delicias Fortuneñas. Todos los derechos reservados.
        </p>
      </div>
  );
}
