import React, { useState, useEffect, useRef } from 'react';

const LocationService = ({ value, onChange }) => {
  const [map, setMap] = useState(null);
  const [autocomplete, setAutocomplete] = useState(null);
  const mapRef = useRef(null); 
  const apiKey = 'API_KEY';

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places&callback=initMap`;
      script.async = true;
      script.defer = true;
      script.setAttribute('loading', 'lazy');
      document.head.appendChild(script);

      window.initMap = () => {
        initializeMap();
      };

      return () => {
        script.remove();
        delete window.initMap;
      };
    } else {
      initializeMap();
    }
  }, []);

  const initializeMap = () => {
    const mapOptions = {
      center: { lat: 8.310551640978389, lng: 80.39730789194405 }, 
      zoom: 7.5,
      mapTypeId: 'roadmap',
    };

    const mapInstance = new window.google.maps.Map(mapRef.current, mapOptions);
    setMap(mapInstance);

    const input = document.getElementById('autocomplete-input');
    const autocompleteInstance = new window.google.maps.places.Autocomplete(input, {
      fields: ['geometry', 'name', 'formatted_address'],
      types: ['establishment', 'geocode'],
    });
    setAutocomplete(autocompleteInstance);

    autocompleteInstance.addListener('place_changed', () => {
      const place = autocompleteInstance.getPlace();
      console.log('Selected Place:', place);

      if (place.geometry) {
        const location = place.geometry.location;

        
        mapInstance.setCenter(location);
        mapInstance.setZoom(14);
        new window.google.maps.Marker({
          position: location,
          map: mapInstance,
          title: place.name,
        });

       
        if (onChange) {
          onChange([location.lng(), location.lat()]);
        }
      } else {
        alert('No geometry data available for this place. Please try another.');
      }
    });
  };

  return (
    <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
      
      <input
        id="autocomplete-input"
        type="text"
        placeholder="Search for a place"
        style={{
          width: '80%',
          padding: '10px',
          fontSize: '16px',
          position: 'absolute',
          top: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          borderRadius: '8px',
          border: '1px solid #ccc',
        }}
      />

     
      <div
        ref={mapRef}
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </div>
  );
};

export default LocationService;
