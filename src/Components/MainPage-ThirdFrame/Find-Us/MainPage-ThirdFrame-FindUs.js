import './MainPage-ThirdFrame-FindUs.css';
const iconWaze = require('../../../Image/Boton de waze.png');
const iconMaps = require('../../../Image/icon-location.png');
export default function MainPageThirdFrameFindUs() {
    return (
        <div id="container-thirdframe-findus">
            <div id='text-find-us'>
                <h1>Encuentranos en...</h1>
            </div>
             <div>
                <button id='btn-waze'>
                        <img src={iconWaze} alt="IconWaze" />
                </button>
            </div>
            <div id="thirdframe-location">
                <img src={iconMaps} alt="IconMaps" />
                <p>La Fortuna San Carlos</p>
                <p>Arenal / La Fortuna, Costa Rica</p>
            </div>
        </div> 
    );
}