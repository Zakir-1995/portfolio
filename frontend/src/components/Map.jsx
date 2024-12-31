import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Pin from "./Pin";
import { mapData } from "../Data/mapData";
const Map = () => {
  return (
    <MapContainer
      center={
        [mapData[0].latitude, mapData[0].longitude]
        // || [52.3797, -1.60269]
      }
      zoom={8}
      scrollWheelZoom={false}
      className="w-full h-full "
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      <Pin item={mapData[0]} />
    </MapContainer>
  );
};

export default Map;
