import './MainPage-ThirdFrame-FindUs.css';
const iconWaze = require('../../../../Image/Boton de waze.png');
const iconMaps = require('../../../../Image/icon-location.png');
export default function MainPageThirdFrameFindUs() {
    return (
        <div id="container-thirdframe-findus">
            <div id='text-find-us'>
                <h1>Encuentranos en...</h1>
            </div>
             <div>
                <button id='btn-waze'>
                    <a href="https://ul.waze.com/ul?place=ChIJcZqWfPcNoI8Rw37pQHWSlkE&ll=10.45154180%2C-84.63882520&navigate=yes&utm_campaign=default&utm_source=waze_website&utm_medium=lm_share_location" target="_blank" rel="noopener noreferrer">
                        <img src={iconWaze} alt="IconWaze" id='icon-waze' />
                    </a>
                </button>
            </div>
            <div id="thirdframe-location">
                <img src={iconMaps} alt="IconMaps" id="icon-maps" />
                <p>La Fortuna San Carlos</p>
                <p>Arenal / La Fortuna, Costa Rica</p>
            </div>
        </div> 
    );
}