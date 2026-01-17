import "./About1.css";
import videoSrc from "../../../Video/slowmainvideo.mp4";

const principalMesage2 = (
  <>
    <strong>Delicias Fortuneñas</strong> nace en el 2020 a pocas semanas de haberse declarado la
    pandemia del <strong>COVID-19</strong> en Costa Rica, las empresas donde laborábamos cerraron
    por el peligro que representan la pandemia para la salud, a partir de esto,
    decidimos que no podíamos quedarnos de brazos cruzados, que necesitamos un
    ingreso económico para poder continuar con nuestras vidas, con todos
    encerrados en casa, comenzamos hornear y a probar productos con el pequeño
    horno de la cocina de nuestro hogar, horneamos <strong>panes de molde o cuadrado</strong>,
    además de panes tradicionales costarricenses como el pan <strong>“casero de
    levadura”</strong> nuestros canales de ventas fueron exclusivamente las redes
    sociales, ya que no había otra forma. Llegó el año 2021 y mientras
    trabajábamos en otras cosas al mismos tiempo <strong>Delicias Fortuneñas</strong> crecía, con
    el apoyo de nuestros amigos alemanes <strong>Thomas y Marion</strong> logramos independencia
    y trabajar exclusivamente en nuestro sueño. Y es si como con mucho trabajo y
    dedicación, creamos <strong>Delicias Fortuneñas.</strong> Desde entonces han pasado casi 6
    años, haciendo productos artesanales con mucho amor, calidad y dedicación…
    <br /> 
    <br /> 
    <strong>¡Sea parte de este hermoso emprendimiento y pida sus productos ahora!</strong>
  </>
);

export function About1() {
  return (
    <div className="background">
      <div className="info">
        <div>
          <video autoPlay loop muted>
            <source src={videoSrc} type="video/mp4" /> 
            Tu navegador no soporta el elemento de video.
          </video>
        </div>

        <div>
          <h1>
            Delicias
            <br></br>
            Fortuneñas.
          </h1>
          <p>{principalMesage2}</p>
        </div>
      </div>
    </div>
  );
}
