import './MainPage-SecondFrame.css';
import  imageBread1  from '../../../Image/mainpage-secondframe-firstimage.png';
import imageBread2  from '../../../Image/mainpage-secondframe-secondimage.png';
import imageBread3  from '../../../Image/mainpage-secondframe-thirdimage.png';
import imageBread4  from '../../../Image/mainpage-secondframe-fourthimage.png';
import imageBread5  from '../../../Image/mainpage-secondframe-fifthimage.png';
import imageBread6  from '../../../Image/mainpage-secondframe-sixthimage.png';
import imageBread7  from '../../../Image/mainpage-secondframe-seventhimage.png';
import imageneBread8  from '../../../Image/mainpage-secondframe-eighthimage.png';
import imageBread9  from '../../../Image/mainpage-secondframe-ninthimage.png';
import imageBread10  from '../../../Image/mainpage-secondframe-tenthimage.png';
import imageBread11  from '../../../Image/mainpage-secondframe-eleventhimage.png';
import imageBread12  from '../../../Image/mainpage-secondframe-twelfthimage.png';


export default function MainPageSecondFrame() {
    return (
       <div id='container-mainpage-secondframe'>
            <div>

                <div id="div-imagen-1">
                    <img alt = "ImagenBread1" src={imageBread1}/>
                </div>
                <div id="div-imagen-2">
                    <img alt = "ImagenBread2" src={imageBread2}/>
                </div>
                <div id="div-imagen-3">
                    <img alt = "ImagenBread3" src={imageBread3}/>
                </div>
            </div>

            <div>
                <div id="div-imagen-4">
                    <img alt = "ImagenBread4" src={imageBread4}/>
                </div>
                <div id="div-imagen-5">
                    <img alt = "ImagenBread5" src={imageBread5}/>
                </div>
                <div id="div-imagen-6">
                    <img alt = "ImagenBread6" src={imageBread6}/>
                </div>

            </div>

            <div>
                <div id="div-imagen-7">
                    <img alt = "ImagenBread7" src= {imageBread7}/>
                </div>
                <div id="div-imagen-8">
                    <img alt = "ImagenBread8" src={imageneBread8}/>
                </div>
                <div id="div-imagen-9">
                    <img alt = "ImagenBread9" src={imageBread9}/>
                </div>

            </div>

            <div>
                <div id="div-imagen-10">
                    <img alt = "ImagenBread10" src={imageBread10}/>
                </div>
                <div id="div-imagen-11">
                    <img alt = "ImagenBread11" src={imageBread11}/>
                </div>
                <div id="div-imagen-12">
                    <img alt = "ImagenBread12" src={imageBread12}/>
                </div>

            </div>

        </div>
        
    );

}