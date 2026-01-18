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
                {/* first row of images */} 
                <div id="div-imagen-1" className="bread-container">
                    <img alt = "ImagenBread1" src={imageBread1}/>
                    <span className="bread-name">Pan de Molde Rebanado</span>
                </div>
                <div id="div-imagen-2" className="bread-container">
                    <img alt = "ImagenBread2" src={imageBread2}/>
                    <span className="bread-name">Pan Blanco</span>
                </div>
                <div id="div-imagen-3" className="bread-container">
                    <img alt = "ImagenBread3" src={imageBread3}/>
                    <span className="bread-name">Realizamos Pedidos</span>
                </div>
            </div>
            {/* second row of images */}
            <div>
                <div id="div-imagen-4" className="bread-container">
                    <img alt = "ImagenBread4" src={imageBread4}/>
                    <span className="bread-name">Brioche de Autor</span>
                </div>
                <div id="div-imagen-5" className="bread-container">
                    <img alt = "ImagenBread5" src={imageBread5}/>
                    <span className="bread-name">Pan de Hamburguesa</span>
                </div>
                <div id="div-imagen-6" className="bread-container">
                    <img alt = "ImagenBread6" src={imageBread6}/>
                    <span className="bread-name">Pan Cena</span>
                </div>
            </div>
            {/* third row of images */}
            <div>
                <div id="div-imagen-7" className="bread-container">
                    <img alt = "ImagenBread7" src= {imageBread7}/>
                    <span className="bread-name">Pan Dulce</span>
                </div>
                <div id="div-imagen-8" className="bread-container">
                    <img alt = "ImagenBread8" src={imageneBread8}/>
                    <span className="bread-name">pan de con semillas de ajonjolí</span>
                </div>
                <div id="div-imagen-9" className="bread-container">
                    <img alt = "ImagenBread9" src={imageBread9}/>
                    <span className="bread-name">Pan de Hamburguesa Enriquecido</span>
                </div>
            </div>
            <div>
                {/* fourth row of images */}
                <div id="div-imagen-10" className="bread-container">
                    <img alt = "ImagenBread10" src={imageBread10}/>
                    <span className="bread-name">Pan de Ajo</span>
                </div>
                <div id="div-imagen-11" className="bread-container">
                    <img alt = "ImagenBread11" src={imageBread11}/>
                    <span className="bread-name">Hechos con Pasion y Calidad</span>
                </div>
                <div id="div-imagen-12" className="bread-container">
                    <img alt = "ImagenBread12" src={imageBread12}/>
                    <span className="bread-name">Pan Tradicional Para Hamburguesa</span>
                </div>
            </div>
        </div>
    );
}