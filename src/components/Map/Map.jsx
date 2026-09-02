import StyledMap from './StyledMap';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import LocationMarker from './LocationMarker';

const Map = () => {
  return (
    <StyledMap>
      <MapContainer center={[48.8566, 2.3522]} zoom={23}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </StyledMap>
  );
};

export default Map;
