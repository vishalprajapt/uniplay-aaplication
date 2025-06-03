import React from 'react';
import { useSpring, animated, useTrail } from '@react-spring/web';

function Logo() {
  const styledata = useSpring({
    loop: { reverse: true },
    from: { transform: 'perspective(400px) translateZ(0px) scale(1)' },
    to: { transform: 'perspective(800px) translateZ(50px) scale(1.1)' },
    config: { mass: 1, tension: 120, friction: 14 },
  });

  const text = ['U', 'n', 'i', 'P', 'l', 'a', 'y'];
  const trail = useTrail(text.length, {
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 150, friction: 30 },
  });

  return (
    <div style={{
      background: 'linear-gradient(to bottom, #ffffff 0%, #e6f6f8 30%, #3492a0 100%)',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      
      {/* Logo Text */}
      <div style={{
        display: 'flex',
        fontSize: '60px',
        fontWeight: 'bold',
        color: 'rgb(34, 245, 203)',
        fontFamily: 'Stencil',
        marginBottom: '40px',
        letterSpacing: '5px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.7)'
      }}>
        {trail.map((style, index) => (
          <animated.span key={index} style={style}>
            {text[index]}
          </animated.span>
        ))}
      </div>

      {/* Animated Logo Image */}
      <animated.div style={{
        ...styledata,
      
      width: '250px',
        height: '250px',
        borderRadius: '50%',
        background: 'rgb(255, 255, 255)',
         boxShadow: '0 8px 30px rgba(27, 207, 192, 0.44)',
        border: '2px solid rgb(52, 230, 185)',
         
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <img
          src="/img/uniplay4.png"
          alt="Uniplay Logo"
          style={{
            width: '170px',
            height: '170px',
           
          
           
          }}
        />
      </animated.div>
    </div>
  );
}

export default Logo;
