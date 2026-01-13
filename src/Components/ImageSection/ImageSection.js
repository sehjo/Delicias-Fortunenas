import "./ImageSection.css";
import panesImage from "../../Image/panes2.png";

export function ImageSection() {
  return (
    <section className="image-section">
      <div >
        <div className="image-section-content">
        </div>
      </div>
      <div className="image-section-background">
        <img src={panesImage} alt="Deliciosos panes artesanales" />
      </div>
    </section>
  );
}
