import "./About1.css";

const principalMesage = (
  <>
    <strong>Fundada en 2020 por Johanna y Eduardo,</strong> nuestra panadería
    nació de la resiliencia.
    <br></br>En medio de los desafíos de la pandemia, encendimos nuestro primer
    horno casero para transformar una necesidad en una pasión artesanal.
    <br></br>Lo que comenzó con panes tradicionales costarricenses y ventas por
    redes sociales, creció gracias a la dedicación y al apoyo invaluable de
    nuestros amigos Thomas y Marion, permitiéndonos alcanzar la independencia y
    dedicarnos por completo a nuestro sueño.
    <br></br>Hoy, tras casi 6 años de trayectoria, en Delicias Fortuneñas
    seguimos horneando con amor y calidad, llevando el auténtico sabor del pan
    artesanal desde nuestro taller hasta su hogar.
  </>
);

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
    <br></br>
    <br></br>
    <strong>¡Sea parte de este hermoso emprendimiento y pida sus productos ahora!</strong>
  </>
);

export function About1() {
  return (
    <div className="background">
      <div className="info">
        <div>
          <video autoPlay loop muted>
            <source src=".\Video\ssstik.io_1768015707037.mp4" type="video/mp4" /> 
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

// Misión
// “Elaborar productos de panadería artesanal que combinen la tradición costarricense con técnicas de
// alta calidad, utilizando ingredientes frescos y procesos honestos para llevar bienestar y sabor
// auténtico a cada hogar y negocio que confía en nosotros.”

// Visión
// “Consolidarnos como la panadería artesanal de referencia en la zona, siendo reconocidos por
// nuestra innovación constante, el respeto a los tiempos de fermentación natural y el compromiso
// con la excelencia que nos permitió transformar un sueño nacido en casa en un legado de calidad.”
