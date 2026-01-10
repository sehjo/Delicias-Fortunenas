import "./Personal.css";
import thomasMarion from "../../../Image/ThomasyMarion.png";

export function Personal() {
  return (
    <>
      <div className="grid-container">
        <PersonalCard src={thomasMarion} alt="Tomas Y Marion" titulo="Grandes personas y amigos." desc="Con el apoyo de: Thomas y Marion" />
      </div>
    </>
  );
}

export function PersonalCard({ src, alt, titulo, desc }) {
  return (
    <section className="personal-info">
      <img src={src} alt={alt} className="personal-photo" />
      <div>
        <h2>{titulo}</h2>
        <h3>{desc}</h3>
      </div>
    </section>
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
