import React from 'react';
import './ContactPage.css';
import LeafletMap from '../Map/LeafletMap';
import MainPageFourthFrame from '../MainPage/MainPage-FourthFrame/MainPage-FourthFrame';
import MainPageThirdFrameFindUs from '../MainPage/MainPage-ThirdFrame/Find-Us/MainPage-ThirdFrame-FindUs';

// Import images
import premises1 from '../../Image/premises_1.png';
import premises2 from '../../Image/premises_2.png';

export function ContactPage() {
    return (
        <div className="contact-page">
            {/* First large image */}
            <div className="contact-hero-section">
                <img src={premises1} alt="Delicias Fortuneñas - Local" className="contact-hero-image" />
            </div>

            {/* Contact section - using the same component from MainPage */}
            <MainPageFourthFrame />

            {/* Second large image */}
            <div className="contact-secondary-section">
                <img src={premises2} alt="Delicias Fortuneñas - Interior" className="contact-secondary-image" />
            </div>

            {/* Waze section - using the same component from MainPage */}
            <MainPageThirdFrameFindUs />

            {/* Map section */}
            <div className="contact-map-section">
                <LeafletMap />
            </div>
        </div>
    );
}

export default ContactPage;
