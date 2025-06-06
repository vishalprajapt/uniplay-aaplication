import React, { useEffect, useState } from 'react';
import Model from './Model';
import SmallLoader from './SamollLoder';
import { FaSearch } from "react-icons/fa";
import { animated, useSpring } from '@react-spring/web';
import TomTomMap from './Tomtom';
import { Link } from 'react-router-dom';
import "./Mapdata.css";

function Map({ locationvalue, typedata }) {
  const [inputValue, setInputValue] = useState("Delhi");
  const [lat, setLat] = useState(28.6273928);
  const [lon, setLon] = useState(77.1716954);
  const [alertmassage, setalertmassage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showmodel, setshowmodel] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [showcolor, setshowcolor] = useState(false);
  const [mapfetchdata, setmapfetchdata] = useState([]);
  const [mapdiv, setmapdiv] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const styledata = useSpring({
    background: showcolor ? "#3492a0" : "white",
    color: showcolor ? "white" : "#3492a0",
    border: "1px solid #3492a0",
    borderRadius: "2px",
    config: { tension: "300px", friction: "20px" }
  });

  const statedata = ["Delhi", "Bangalore", "Lucknow", "Patna", "Kolkata"];

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (inputValue.trim()) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(inputValue)}`)
          .then((res) => res.json())
          .then((data) => {
            setmapfetchdata(data);
          })
          .catch(() => {
            setalertmassage("Error fetching location");
            setAlertType("error");
            setshowmodel(true);
          });
      } else {
        setmapfetchdata([]);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [inputValue]);

  useEffect(() => {
    if (showmodel) {
      const timeout = setTimeout(() => {
        setshowmodel(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [showmodel]);

  useEffect(() => {
    if (lat && lon) {
      setIsMapLoading(false);
    }
  }, [lat, lon]);

  const handlebutton = async (item) => {
    locationvalue(item);
    setInputValue(item);
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(item)}`);
    const datavaluemost = await response.json();
    setLat(datavaluemost[0].lat);
    setLon(datavaluemost[0].lon);
  };

  const mapdatainformation = (item) => {
    setInputValue(item.display_name);
    setLat(item.lat);
    setLon(item.lon);
    setmapfetchdata([]);
    setIsFocused(false);
    locationvalue(item.display_name);
  };

  return (
    <>
      {showmodel && <Model data={alertmassage} type={alertType} />}
      <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
        <div style={{ marginBottom: '10px', position: 'relative' }}>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a location"
            style={{
              padding: '8px',
              width: '100%',
              maxWidth: '500px',
              border: '1px solid #ccc',
              borderRadius: '4px'
            }}
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setTimeout(() => {
                setIsFocused(false);
              }, 200);
            }}
          />
          {mapfetchdata.length > 0 && isFocused && (
            <div className="suggestions-container">
              {mapfetchdata.map((item, index) => (
                <div
                  key={index}
                  className="suggestion-item"
                  onMouseDown={() => mapdatainformation(item)}
                >
                  {item.display_name}
                </div>
              ))}
            </div>
          )}
        </div>

        {isMapLoading ? (
          <div style={{ height: '400px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <SmallLoader />
          </div>
        ) : (
          <>
            <TomTomMap lat={lat} lon={lon} />
            <div style={{ marginTop: '20px' }}>
              <h3 style={{ marginBottom: '10px', color: '#3492a0' }}>Our Locations</h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {statedata.map((item) => (
                  <button
                    key={item}
                    onClick={() => handlebutton(item)}
                    className="city-btn"
                    style={{
                      background: item.toLowerCase() === inputValue.toLowerCase() ? "#3492a0" : "White",
                      color: item.toLowerCase() === inputValue.toLowerCase() ? "White" : "#3492a0",
                      border: "1px solid #3492a0",
                      borderRadius: "4px",
                      padding: "8px 12px",
                      fontSize: "14px",
                      minWidth: "100px",
                      textAlign: "center"
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Map;
