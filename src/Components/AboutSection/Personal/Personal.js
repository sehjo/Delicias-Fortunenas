import "./Personal.css";
import thomasMarion from "../../../Image/ThomasyMarion.png";
import eduardoMiranda from "../../../Image/EduardoMiranda.png";
import JohannaVargas from "../../../Image/johanna_image.jpeg";

export function Personal() {
  return (
    <>
      <div>
        <div className="grid-container">
          <PersonalCard
            src={thomasMarion}
            alt="Tomas Y Marion"
            title="Grandes personas y amigos."
            desc="Con el apoyo de: Thomas y Marion"
          />
          <PersonalCard
            src={JohannaVargas}
            alt="Johanna Quesada"
            title="Dos emprendedores persiguiendo un sueño."
            desc="Fundadora: Johanna Vargas"
          />
          <PersonalCard
            src={eduardoMiranda}
            alt="Eduardo Miranda"
            title="Dos emprendedores persiguiendo un sueño."
            desc="Fundador: Eduardo Miranda"
          />
        </div>
      </div>
    </>
  );
}

export function PersonalCard({ src, alt, title, desc }) {
  return (
    <section className="personal-info">
      <img src={src} alt={alt} className="personal-photo" />
      <h2>{title}</h2>
      <h3>{desc}</h3>
    </section>
  );
}
