// key = AIzaSyCD908jHkpJVYVuTdDJgZezHlrSuCBGw7c

import React, {useState, useEffect} from 'react';
import { GoogleMap, MarkerF, useLoadScript  } from '@react-google-maps/api';
import marker from '../../pictures/svg/marker.svg';


export default function GoogleMapComponent({ isMapCentered }) {

  const [mapCenter, setMapCenter] = useState(center);

  const {isLoaded} = useLoadScript ({
    googleMapsApiKey: "AIzaSyCD908jHkpJVYVuTdDJgZezHlrSuCBGw7c"
  })

  useEffect(() => {
    if (isMapCentered) {
      setMapCenter(center);
    }
  }, [isMapCentered]);

  if(!isLoaded) return <div>
    Loading...
  </div>

  return (
      <Map center={mapCenter} mapCenter={mapCenter}/>
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

function Map({ mapCenter }) {

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={mapCenter !== center ? mapCenter : center}
      zoom={14}
      options={mapOptions}
    >
      <MarkerF position={center} icon={marker}/>
    </GoogleMap>
  );
}