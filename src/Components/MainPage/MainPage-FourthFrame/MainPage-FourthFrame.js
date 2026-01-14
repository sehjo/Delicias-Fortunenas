import './MainPage-FourthFrame.css';
import iconTiktok from "../../../Image/tiktokIcon.png";
import iconFacebook from "../../../Image//FacebookIconFourthFrame.png";
import iconInstagram from "../../../Image/InstagramIconFourthFrame.png"
import iconPhone from "../../../Image/iconPhone.png";
import iconEmail from "../../../Image/email-icon-fourthframe.png";

const email = "delifortuna.28042020@gmail.com";
const phone1 = "(506) 8390-2262";
const phone2 = "(506) 6435-8374";

export default function MainPageFourthFrame() {
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

                <a href='https://www.tiktok.com/@deliciasfortunenas' target='_blank' rel='noreferrer'> 
                    <img src={iconTiktok} alt='Community Illustration' id='icon-tiktok' />
                </a>
                
                <a href='https://www.facebook.com/p/Delicias-Fortune%C3%B1as-100063545834955/' target='_blank' rel='noreferrer'>
                    <img src={iconFacebook} alt='Community Illustration' />
                </a>
                
                <a href='https://www.instagram.com/delicias_fortunenas/' target='_blank' rel='noreferrer'>
                    <img src={iconInstagram} alt='Community Illustration' />
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