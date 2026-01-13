import './MainPage-SecondFrame.css';

const imageBread1 = require('../../Image/mainpage-secondframe-firstimage.png');
const imageBread2 = require('../../Image/mainpage-secondframe-secondimage.png');
const imageBread3 = require('../../Image/mainpage-secondframe-thirdimage.png');
const imageBread4 = require('../../Image/mainpage-secondframe-fourthimage.png');
const imageBread5 = require('../../Image/mainpage-secondframe-fifthimage.png');
const imageBread6 = require('../../Image/mainpage-secondframe-sixthimage.png');
const imageBread7 = require('../../Image/mainpage-secondframe-seventhimage.png');
const imageneBread8 = require('../../Image/mainpage-secondframe-eighthimage.png');
const imageBread9 = require('../../Image/mainpage-secondframe-ninthimage.png');
const imageBread10 = require('../../Image/mainpage-secondframe-tenthimage.png');
const imageBread11 = require('../../Image/mainpage-secondframe-eleventhimage.png');
const imageBread12 = require('../../Image/mainpage-secondframe-twelfthimage.png');
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