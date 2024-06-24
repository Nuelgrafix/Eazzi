import  { useState } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import PropTypes from "prop-types";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 6.5244, // Latitude for Lagos, Nigeria
  lng: 3.3792, // Longitude for Lagos, Nigeria
};

const GoogleMapComponent = ({ onChangeLocation }) => {
  const [marker, setMarker] = useState([]);

  const handleMapClick = (event) => {
    const newMarker = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    };
    setMarker([newMarker]);
    onChangeLocation(newMarker);
  };

  return (
    <section>
      <LoadScript googleMapsApiKey="AIzaSyATDQe0za84OhhWce-lPbQQHI4qbq9N20o">

        <GoogleMap
        google= {this.prop.google}
          mapContainerStyle={mapContainerStyle}
          zoom={10}
          center={center}
          onClick={handleMapClick}
        >
          {
          marker.map((m, i) => (
            <Marker key={i} position={m} />
          ))
          
          }
        </GoogleMap>
      </LoadScript>
    </section>
  );
};

GoogleMapComponent.propTypes = {
  onChangeLocation: PropTypes.func.isRequired,
};

export default GoogleMapComponent;
