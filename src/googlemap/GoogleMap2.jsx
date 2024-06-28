import React, { useState, useEffect } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import "../styles/mapstyle.css";

const center = {
  lat: 6.5244, // Latitude for Lagos, Nigeria
  lng: 3.3792, // Longitude for Lagos, Nigeria
};

function GoogleComponent2() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyATDQe0za84OhhWce-lPbQQHI4qbq9N20o"
  });

  const points = [
    { lat: 4.5244, lng: 4.3792 },
    { lat: 2.50244, lng: 3.3792 },
    { lat: 6.5244, lng: 5.3792 },
    { lat: 6.5244, lng: -3.3792 },
  ];

  const [map, setMap] = useState(null);
  const [mapContainerStyle, setMapContainerStyle] = useState({ width: '100%', height: '320px' });

  useEffect(() => {
    const updateMapContainerStyle = () => {
      if (window.innerWidth <= 668) {
        setMapContainerStyle({ width: '100%', height: '250px', borderRadius: '20px' });
      } else {
        setMapContainerStyle({ width: '100%', height: '320px' });
      }
    };

    // Set initial style
    updateMapContainerStyle();

    // Add event listener
    window.addEventListener('resize', updateMapContainerStyle);

    // Clean up event listener on component unmount
    return () => window.removeEventListener('resize', updateMapContainerStyle);
  }, []);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{ streetViewControl: false, mapTypeControl: false }}
    >
      {points.map((p, i) => (
        <Marker position={p} key={i} />
      ))}
    </GoogleMap>
  ) : <></>;
}

export default GoogleComponent2;
