import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
/* eslint-disable react/prop-types */
const Pin = ({ item }) => {
  const position = [item.latitude, item.longitude];
  return (
    <Marker position={position}>
      <Popup>
        <div className="w-full ">
          <img
            src={item.img}
            alt={item.title}
            className="w-full rounded-md object-cover"
          />
          <h5 className="text-xs font-bold  mt-2">{item.title}</h5>
          <span className="text-[12px] font-light text-masala ">
            {item.address}
          </span>
        </div>
      </Popup>
    </Marker>
  );
};

export default Pin;

