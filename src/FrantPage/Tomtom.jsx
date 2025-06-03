import React, { useEffect, useRef } from 'react';
import tt from '@tomtom-international/web-sdk-maps';
import '@tomtom-international/web-sdk-maps/dist/maps.css';

const TomTomMap = ({ lat, lon }) => {
  const mapElement = useRef();

  // console.log("mapElement",mapElement)

  useEffect(() => {
    const map = tt.map({
      key: 'zamdzUCbb3xJsLbv7XN0aR62ey5JRHXx', 
      container: mapElement.current,
      center: [lon, lat],
        zoom: 12,
    });

    const marker = new tt.Marker().setLngLat([lon, lat]).addTo(map);

    return () => map.remove();
  }, [lat, lon]);

  return (
    <div
      ref={mapElement}
      style={{
        width: '100%',
        height: '400px',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginTop: '10px'
      }}
    ></div>
  );
};

export default TomTomMap;
