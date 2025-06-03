import React from 'react';
import { useTrail, animated } from '@react-spring/web';

const items = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

function FallingDivs() {
  const trail = useTrail(items.length, {
    from: { opacity: 0, transform: 'translateY(-100px)' },  // ऊपर से नीचे गिरना
    to: { opacity: 1, transform: 'translateY(0px)' },
    config: { mass: 1, tension: 180, friction: 20 },
  });

  return (
    <div style={{
      minHeight: '100vh',
      background: '#3492a0',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '30px',
      padding: '40px',
    }}>
      {trail.map((style, index) => (
        <animated.div
          key={index}
          style={{
            ...style,
            width: '80px', // चौड़ाई कम
            height: '400px', // ऊँचाई ज़्यादा
            backgroundColor: '#fff',
            color: '#3492a0',
            fontSize: '18px',
            fontWeight: 'bold',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
            writingMode: 'vertical-rl', // text vertical दिखे
            textAlign: 'center'
          }}
        >
          {items[index]}
        </animated.div>
      ))}
    </div>
  );
}

export default FallingDivs;
