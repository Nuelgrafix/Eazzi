import React, { useState } from 'react'
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '1035px',
  height: '320px',

};

const center = {
    lat: 6.5244, // Latitude for Lagos, Nigeria
    lng: 3.3792, // Longitude for Lagos, Nigeria
  };
function GoogleComponent2() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyATDQe0za84OhhWce-lPbQQHI4qbq9N20o"
  })

  const points= [
    {
        lat: 4.5244, // Latitude for Lagos, Nigeria
        lng: 4.3792, 
    },


    {
        lat: 2.50244, // Latitude for Lagos, Nigeria
        lng: 3.3792, 
    },


    {
        lat: 6.5244, // Latitude for Lagos, Nigeria
        lng: 5.3792, 
    },


    {
        lat: 6.5244, // Latitude for Lagos, Nigeria
        lng: -3.3792, 
    },


    



]

  const [map, setMap] = useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={
           {
            streetViewControl:false,
            mapTypeControl:false,
           }
        }
      >
        { /* Child components, such as markers, info windows, etc. */ 

        points.map((p,i)=>(
<Marker  position={p}  key={i} />
        ))
        }
        <></>
      </GoogleMap>
  ) : <></>
}

export default GoogleComponent2