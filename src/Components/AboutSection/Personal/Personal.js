import "./Personal.css";
import thomasMarion from "../../../Image/ThomasyMarion.png";

export function Personal() {
  return (
    <>
      <div className="grid-container">
        <PersonalCard
          src={thomasMarion}
          alt="Tomas Y Marion"
          titulo="Grandes personas y amigos."
          desc="Con el apoyo de: Thomas y Marion"
        />
        <PersonalCard
          src={thomasMarion}
          alt="Tomas Y Marion"
          titulo="Grandes personas y amigos."
          desc="Con el apoyo de: Thomas y Marion"
        />
        <PersonalCard
          src={thomasMarion}
          alt="Tomas Y Marion"
          titulo="Grandes personas y amigos."
          desc="Con el apoyo de: Thomas y Marion"
        />
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
