import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

delete L.Icon.Default.prototype._getIconUrl;

const blackIcon = new L.Icon({
  iconUrl: "/black-icon.png",
  iconSize: [48, 48],
  iconAnchor: [48 , 48],
});

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
      zoom={12}
      scrollWheelZoom={true}
      style={{ height: "252px", width: "100%" }}
    >
      
      <TileLayer
        url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        attribution="© OpenStreetMap © CARTO"
      />

      <Marker position={position} icon={blackIcon}>
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
