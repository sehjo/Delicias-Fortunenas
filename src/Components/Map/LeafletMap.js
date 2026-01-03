import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const position = [10.451547, -84.641405];

export default function LeafletMap() {
  return (
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "400px", width: "100%" }}
    >
      {/* <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      /> */}

      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="&copy; OpenStreetMap &copy; CARTO"
      />

      <Marker position={position}>
        <Popup>
          <strong>Delicias Fortuneñas</strong>
          <br />
          La Fortuna, Costa Rica
          <br />
          <a
            href="https://maps.app.goo.gl/MWjtneu4ddrnpCyu8"
            target="_blank"
            rel="noopener noreferrer"
          >
          Google Maps
          </a>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
