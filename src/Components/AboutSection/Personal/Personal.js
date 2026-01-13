import "./Personal.css";
import thomasMarion from "../../../Image/ThomasyMarion.png";
import eduardoMiranda from "../../../Image/EduardoMiranda.png";
import JohannaVargas from "../../../Image/JohannaVargas.png";

export function Personal() {
  return (
    <>
    <div className="personal-section-title">
      {/* <h1>Nuestro Equipo</h1> */}
      <div className="grid-container">
        <PersonalCard
          src={thomasMarion}
          alt="Tomas Y Marion"
          titulo="Grandes personas y amigos."
          desc="Con el apoyo de: Thomas y Marion"
        />
        <PersonalCard
          src={JohannaVargas}
          alt="Johanna Quesada"
          titulo="Dos emprendedores persiguiendo un sueño."
          desc="Fundadora: Johanna Vargas"
        />
        <PersonalCard
          src={eduardoMiranda}
          alt="Eduardo Miranda"
          titulo="Dos emprendedores persiguiendo un sueño."
          desc="Fundador: Eduardo Miranda"
        />
      </div>
    </div>
      
    </>
  );
}

export function PersonalCard({ src, alt, titulo, desc }) {
  return (
    <section className="personal-info">
      <img src={src} alt={alt} className="personal-photo" />
      <h2>{titulo}</h2>
      <h3>{desc}</h3>
    </section>
  );
}
