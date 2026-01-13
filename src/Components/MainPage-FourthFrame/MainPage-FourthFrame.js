import './MainPage-FourthFrame.css';
import iconTiktok from "../../Image/tiktokIcon.png";
import iconFacebook from "../../Image//FacebookIconFourthFrame.png";
import iconInstagram from "../../Image/InstagramIconFourthFrame.png"
import iconPhone from "../../Image/iconPhone.png";
import iconEmail from "../../Image/email-icon-fourthframe.png";

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
                        <p>(506)8390-2262</p>
                        <p>(506)6435-8374</p>
                      </div>  
               </div>
                <div id='container-email'>
                    <img src={iconEmail} alt="Email Icon" />
                    <p>delifornuta.28042020@gmail.com</p>
                </div>
            </div>

            {/* social media icons container */}
            <div id='mainpage-fourthframe-icons-social-media'>
                <img src={iconTiktok} alt='Community Illustration' id='icon-tiktok' />
                <img src={iconFacebook} alt='Community Illustration' />
                <img src={iconInstagram} alt='Community Illustration' />
            </div>

        </div>
    );
}