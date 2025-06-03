
import React,{useState,useRef,useEffect,useMemo} from 'react';
import { FaSearch } from "react-icons/fa";

function Serachbar({  onterm }) {
    const [searchbar, setsearchbar] = useState(false);
   // const [searchTerm, setSearchTerm] = useState("");
    const [inputvalue, setinputvalue]=useState("")
    const focusdata=useRef()
  
   

    //const fourCards = useMemo(() => cards.slice(0, 16), [cards]);
     
   useEffect(() => {
    const debounceTimer = setTimeout(() => {
      onterm(inputvalue);
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [inputvalue]);

    const handleMouseLeave = () => {
    setTimeout(() => {
      if (document.activeElement !== focusdata.current && inputvalue === "") {
        setsearchbar(false);
      }
    }, 100); // delay ensures blur events complete
  };
  
    return (
      <span
        onMouseEnter={() => setsearchbar(true)}
        onMouseLeave={handleMouseLeave}
        style={{
          display: "flex",
          gap: "10px",
          alignItems: "center",
        }}
      >
        <div style={{ fontSize: "25px", cursor: "pointer" }}>
          <FaSearch style={{color:"#3492a0"}} />
        </div>
  
        <div
          style={{
            overflow: "hidden",
            transition: "width 1s ease",
            width: searchbar  ? "160px" : "0px",
          }}
        >
          <input
           ref={focusdata}
            type="text"
            placeholder="Search..."
           value={inputvalue}
            onChange={(e) => {
                setinputvalue(e.target.value);
              debouncedSearch(e);
            }}
             onFocus={() => setsearchbar(true)}
          onBlur={() => {
            if (inputvalue === "") setsearchbar(false);
          }}
            style={{
              border:"1px solid #3492a0",
              padding: "5px",
              borderRadius: "4px",
              outline: "none",
              width: "150px",
              transition: "opacity 1s ease",
              opacity: searchbar  ? 1 : 0,
            }}
          />
        </div>
      </span>
    );
  };


export default Serachbar