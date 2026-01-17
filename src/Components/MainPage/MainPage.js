import MainPageFrameStart from './MainPage-FrameStart/MainPage-FrameStart';
import SecondFrame from './MainPage-SecondFrame/MainPage-SecondFrame';
import ThirdFrameAboutUs from './MainPage-ThirdFrame/About-us/MainPage-ThirdFrame-AboutUs';
import ThirdFrameFindUs from './MainPage-ThirdFrame/Find-Us/MainPage-ThirdFrame-FindUs';
import Map from '../Map/LeafletMap'
import FourthFrame from './MainPage-FourthFrame/MainPage-FourthFrame';
export default function MainPage() {
    return (
        <div id='mainpage-container'>
            <MainPageFrameStart />
            <SecondFrame />
            <ThirdFrameAboutUs />
            <Map />
            <ThirdFrameFindUs />
            <FourthFrame />
        </div>
    );
}