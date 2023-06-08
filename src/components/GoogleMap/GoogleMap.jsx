// key = AIzaSyCD908jHkpJVYVuTdDJgZezHlrSuCBGw7c

import React from 'react';
import { GoogleMap, Marker, LoadScript } from '@react-google-maps/api';

const containerStyle = {
    // position: 'absolute',

    width: '800px',
    height: '475px',
    borderRadius: '50px'
};

const center = {
  lat: 50.46467025011272,
  lng: 30.625634225751806
};

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

function Map() {
  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={16}
      options={mapOptions}
    >
      <Marker position={center} />
    </GoogleMap>
  );
}

export default function GoogleMapComponent() {
  return (
    
   
    <LoadScript googleMapsApiKey="AIzaSyCD908jHkpJVYVuTdDJgZezHlrSuCBGw7c">
      <Map />
    </LoadScript>
  );
}
