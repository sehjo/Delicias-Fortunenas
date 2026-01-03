import React from 'react';
import '../styles/Footer.css';
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";




const email= 'delifortuna.28042020@gmail.com';
const phone1= '(506) 8390-2262';
const phone2= '(506) 7087-7268';  
const phone3= '(506) 8390-2262';

export function Footer() {
  return (
    <>  
        <footer className="footer-content">
                <div className='column-footer'>{/*Horario*/}
                    <h3 className='subtitle-footer'>Horario</h3>
                    <div className='schedule-item'>
                        <li>
                            Lunes: 8:00 AM - 8:00 PM
                        </li>
                        <li>
                            Martes: 8:00 AM - 8:00 PM
                        </li>
                        <li>
                            Miercoles: 8:00 AM - 8:00 PM
                        </li>
                        <li>
                            Jueves: 8:00 AM - 8:00 PM
                        </li>
                        <li>
                            Viernes: 8:00 AM - 8:00 PM
                        </li>
                        <li>
                            Sabado: 8:00 AM - 8:00 PM
                        </li>
                        <li> 
                            Domingo: Cerrado    
                        </li>
                    </div>
                </div>
                <div  className='column-footer'>{/*Email*/}
                    <h3 className='subtitle-footer'>Email</h3>
                    
                    <div className='contact-item'>
                        <img src={`${process.env.PUBLIC_URL}/icons/email.svg`} alt="email-icon" className='contact-icon' />
                        <p>{email}</p>
                    </div>
                    <div className='icons-item'>
                        <FaTiktok />
                        <FaInstagram />
                        <FaFacebookF />
                        <FaWhatsapp />
                    </div>
                </div>
                <div  className='column-footer'>{/*Telefonos*/}
                    <h3 className='subtitle-footer'>Telefonos</h3>
                    <div className='contact-item'>
                        <img src={`${process.env.PUBLIC_URL}/icons/phone.svg`} alt="phone-icon" className='contact-icon' />
                        <p>{phone1}</p>
                    </div>
                    <div className='contact-item'>
                        <img src={`${process.env.PUBLIC_URL}/icons/phone.svg`} alt="phone-icon" className='contact-icon' />
                        <p>{phone2}</p>
                    </div>
                    <div className='contact-item'>
                        <img src={`${process.env.PUBLIC_URL}/icons/phone.svg`} alt="phone-icon" className='contact-icon' />
                        <p>{phone3}</p>
                    </div>
                </div>
                 <div  className='column-footer'>{/*Telefonos*/}
                    <h3 className='subtitle-footer'>Lorem Ipsum</h3>
                    
                </div>
            
        </footer>
    </>
  );
}