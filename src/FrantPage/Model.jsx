import React, { useEffect } from 'react';
import { toast } from 'react-toastify';  // Import react-toastify
import 'react-toastify/dist/ReactToastify.css'; // Import CSS
import './Model.css';

function Model({ data ,type}) {
  
  useEffect(() => {
     if (data) {
      if(type === 'error') {
        toast.error(data, {
          autoClose: 1200,
          style: {
            fontSize: '20px',
            background: 'white', 
            color: 'black',
            top: "50px"
          },
          position: 'top-right'
        });
      } else {
        toast.success(data, {
          autoClose: 1200,
          style: {
            fontSize: '20px',
            background: 'white',
            color: 'black',
            top: "50px"
          },
          position: 'top-right'
        });
      }
    }
  }, [data, type]); 
 
  return null;
}

export default Model;
