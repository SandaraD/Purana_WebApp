import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, StandaloneSearchBox } from '@react-google-maps/api';

const MapComponent = ({ onLocationSelect }) => {
  const [coordinates, setCoordinates] = useState(null);
  const [searchBox, setSearchBox] = useState(null);

  const handlePlacesChanged = () => {
    const places = searchBox.getPlaces();
    if (places.length > 0) {
      const place = places[0];
      const location = place.geometry.location;
      const lat = location.lat();
      const lng = location.lng();
      setCoordinates({ lat, lng });

      onLocationSelect({ lat, lng });
    }
  };

  return (
    <LoadScript googleMapsApiKey="YOUR_GOOGLE_API_KEY">
      <GoogleMap
        mapContainerStyle={{ width: '100%', height: '400px' }}
        zoom={10}
        center={coordinates || { lat: 6.9271, lng: 79.8612 }} 
      >
        <StandaloneSearchBox
          onLoad={ref => setSearchBox(ref)}
          onPlacesChanged={handlePlacesChanged}
        >
          <input
            type="text"
            placeholder="Search for a location"
            style={{
              boxSizing: 'border-box',
              border: '1px solid transparent',
              width: '240px',
              height: '32px',
              padding: '0 12px',
              borderRadius: '3px',
              fontSize: '14px',
              outline: 'none',
              position: 'absolute',
              left: '50%',
              marginLeft: '-120px',
              top: '10px',
            }}
          />
        </StandaloneSearchBox>

        {coordinates && <Marker position={coordinates} />}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
