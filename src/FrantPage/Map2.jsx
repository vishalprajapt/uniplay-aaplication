import React, { useEffect, useState } from 'react';
import Model from './Model';
import SmallLoader from './SamollLoder';
import { FaSearch } from "react-icons/fa";
import { animated, useSpring } from '@react-spring/web';
import TomTomMap from './Tomtom';
import './Map2.css';

function Mapvalue({ locationtypedatavalue }) {
  const [inputValue, setInputValue] = useState("Delhi");
  const [lat, setLat] = useState(28.6273928);
  const [lon, setLon] = useState(77.1716954);
  const [alertmassage, setalertmassage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showmodel, setshowmodel] = useState(false);
  const [isMapLoading, setIsMapLoading] = useState(true);
  const [mapfetchdata, setmapfetchdata] = useState([]);
  const [isFocused, setIsFocused] = useState(false);

  const statedata = ["Delhi", "Bangalore", "Lucknow", "Patna", "Kolkata"];

  const styledata = useSpring({
    background: "#3492a0",
    color: "white",
    border: "1px solid #3492a0",
    borderRadius: "2px",
    config: { tension: "300px", friction: "20px" }
  });

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
    locationtypedatavalue(item);
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
    locationtypedatavalue(item.display_name);
  };

  return (
    <>
      {showmodel && <Model data={alertmassage} type={alertType} />}
      <div className="map-container">
        <div className="map-input-wrapper">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter a location"
            className="map-input"
            onFocus={() => setIsFocused(true)}
            onBlur={() => {
              setTimeout(() => setIsFocused(false), 200);
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
          <div className="map-loader">
            <SmallLoader />
          </div>
        ) : (
          <>
            <TomTomMap lat={lat} lon={lon} />
            <div className="location-buttons-wrapper">
              <h3 className="location-heading">Our Locations</h3>
              <div className="location-buttons">
                {statedata.map((item) => (
                  <button
                    key={item}
                    onClick={() => handlebutton(item)}
                    className="city-btn"
                    style={{
                      background: item.toLowerCase() === inputValue.toLowerCase() ? "#3492a0" : "white",
                      color: item.toLowerCase() === inputValue.toLowerCase() ? "white" : "#3492a0"
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

export default Mapvalue;
