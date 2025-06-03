
import React, { useState } from 'react';
import { useTransition, animated } from '@react-spring/web';

function ModalExample() {
  const [showModal, setShowModal] = useState(false);

  const transitions = useTransition(showModal, {
    from: { opacity: 0, transform: 'scale(0.8)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0.8)' },
    config: { tension: 200, friction: 20 },
  });

  return (
    <div style={{ minHeight: '100vh', background: '#f0f0f0', padding: '40px' }}>
      <button
        onClick={() => setShowModal(!showModal)}
        style={{
          padding: '10px 20px',
          fontSize: '18px',
          backgroundColor: '#3492a0',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
        }}
      >
        {showModal ? 'Hide' : 'Show'} Modal
      </button>

      {transitions((style, item) =>
        item ? (
          <animated.div
            style={{
              ...style,
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: style.transform.to(t => `${t} translate(-50%, -50%)`),
              width: '300px',
              padding: '30px',
              background: 'white',
              borderRadius: '10px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
              zIndex: 1000,
            }}
          >
            <h2 style={{ margin: 0 }}>Hello UniPlay 👋</h2>
            <p>This is a smooth animated modal using useTransition.</p>
          </animated.div>
        ) : null
      )}
    </div>
  );
}

export default ModalExample;
