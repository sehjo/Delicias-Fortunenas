import "./About2.css";
import panesBaguette from "../../../Video/panesbaguette.mp4";

export function About2() {
  return (
    <>
      <div className="about2-container">
        <div className="about2-text-container">
          <h1>Acerca de nosotros</h1>
          <div className="objetive-content">
            <div className="objetive-question">
              <h2>
                Porqué
                <br />
                elegirnos?
              </h2>
            </div>
            <div className="objetive-info">
              <h3>OBJETIVO</h3>
              <p>
                Porque creemos en el trabajo bien hecho, en los detalles que
                marcan la diferencia y en construir relaciones duraderas con
                cada cliente.
              </p>
            </div>
          </div>
        </div>

        <div>
          <video autoPlay loop muted playsInline className="about2-video">
            <source src={panesBaguette} type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
      </div>
    </>
  );
}
