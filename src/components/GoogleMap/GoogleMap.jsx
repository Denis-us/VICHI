// key = AIzaSyCD908jHkpJVYVuTdDJgZezHlrSuCBGw7c

import React, {useState} from 'react';
import { GoogleMap, MarkerF, useLoadScript, DirectionsService, DirectionsRenderer  } from '@react-google-maps/api';


export default function GoogleMapComponent() {

  const {isLoaded} = useLoadScript ({
    googleMapsApiKey: "AIzaSyCD908jHkpJVYVuTdDJgZezHlrSuCBGw7c"
  })

  if(!isLoaded) return <div>
    Loading...
  </div>

  return (
      <Map />
  );
}

const mapOptions = {
    styles: [
      {
        elementType: 'geometry',
        stylers: [
          { invert_lightness: true },
          { "saturation": -100 },
          { "lightness": -5 }
        ]
      },
      {
        featureType: 'all',
        elementType: 'labels',
        stylers: [
            { invert_lightness: true },
            { "saturation": -100 },
            { "lightness": 40 },
            { hue: '#FFFFFF' },
        ]
      }
      
    ]
  };

const containerStyle = {

  width: '800px',
  height: '475px',
  borderRadius: '30px'
};

const center = {
  lat: 50.46467025011272,
  lng: 30.625634225751806
};

function Map() {
  const [directions, setDirections] = useState(null);

  const onDirectionsLoad = (result) => {
    setDirections(result);
  };

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      options={mapOptions}
    >
      <DirectionsService
        options={{
          destination: center,
          origin: navigator.geolocation.getCurrentPosition(),
          travelMode: 'DRIVING',
        }}
        callback={onDirectionsLoad}
      />
      {directions && (
        <DirectionsRenderer
          directions={directions}
          options={{
            suppressMarkers: true,
          }}
        />
      )}
      <MarkerF position={center} />
    </GoogleMap>
  );
  }