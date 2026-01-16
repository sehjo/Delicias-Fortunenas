import './MainPage-FourthFrame.css';
import iconTiktok from "../../../Image/tiktokIcon.png";
import iconFacebook from "../../../Image/FacebookIconFourthFrame.png";
import iconInstagram from "../../../Image/InstagramIconFourthFrame.png"
import iconPhone from "../../../Image/iconPhone.png";
import iconEmail from "../../../Image/email-icon-fourthframe.png";

import iconTikTokTransform from "../../../Image/tiktokIcon-transform.png"
import iconFBTransform from "../../../Image/FacebookIconFourthFrame-transform.png"
import iconInstagramTransform from "../../../Image/InstagramIconFourthFrame-transform.png"

import { useState } from 'react';

const email = "delifortuna.28042020@gmail.com";
const phone1 = "(506) 8390-2262";
const phone2 = "(506) 6435-8374";

export default function MainPageFourthFrame() {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    return (
        // main container
        <div id='mainpage-fourthframe'>

            {/* contact container */}
            <div id='mainpage-fourthframe-contact-us'>
               <h1>Contacto</h1>
               <div id = 'container-phones'>
                    <img src={iconPhone} alt="Phone Icon" />
                      <div id='phones-numbers'>
                        <p><TelephoneLink phoneNumber={phone1} /></p>
                        <p><TelephoneLink phoneNumber={phone2} /></p>
                      </div>  
               </div>
                <div id='container-email'>
                    <img src={iconEmail} alt="Email Icon" />
                    <p><a href={`mailto:${email}`}>{email}</a></p>
                </div>
            </div>

            {/* social media icons container */}
            <div id='mainpage-fourthframe-icons-social-media'>

                <a 
                    href='https://www.tiktok.com/@deliciasfortunenas' 
                    target='_blank' 
                    rel='noreferrer'
                    onMouseEnter={() => setHoveredIcon('tiktok')}
                    onMouseLeave={() => setHoveredIcon(null)}
                > 
                    <img 
                        src={hoveredIcon === 'tiktok' ? iconTikTokTransform : iconTiktok} 
                        alt='TikTok Icon' 
                        id='icon-tiktok'
                        className='social-icon-transition'
                    />
                </a>
                
                <a 
                    href='https://www.facebook.com/p/Delicias-Fortune%C3%B1as-100063545834955/' 
                    target='_blank' 
                    rel='noreferrer'
                    onMouseEnter={() => setHoveredIcon('facebook')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <img 
                        src={hoveredIcon === 'facebook' ? iconFBTransform : iconFacebook} 
                        alt='Facebook Icon'
                        className='social-icon-transition'
                    />
                </a>
                
                <a 
                    href='https://www.instagram.com/delicias_fortunenas/' 
                    target='_blank' 
                    rel='noreferrer'
                    onMouseEnter={() => setHoveredIcon('instagram')}
                    onMouseLeave={() => setHoveredIcon(null)}
                >
                    <img 
                        src={hoveredIcon === 'instagram' ? iconInstagramTransform : iconInstagram} 
                        alt='Instagram Icon'
                        className='social-icon-transition'
                    />
                </a>

            </div>

        </div>
    );
}
// this function creates a clickable telephone link with a confirmation
function TelephoneLink({ phoneNumber }) {
    return (
        <a
            href={`tel:${phoneNumber}`}
            onClick={(e) => {
                e.preventDefault();
                if (window.confirm(`¿Llamar al ${phoneNumber}? \n\nSi se encuentra en PC será redirigido a su aplicación de teléfono por defecto. \nSe recomienda usar un dispositivo móvil.`)) {
                    window.location.href = `tel:${phoneNumber}`;
                }
            }}
        >
            {phoneNumber}
        </a>
    );
}