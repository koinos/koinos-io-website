import React, { useState } from 'react';
import AnimatedBackground from './AnimatedBackground';
import AnimatedBackgroundSpace from './AnimatedBackgroundSpace';
import AnimatedBackgroundBlocks from './AnimatedBackgroundBlocks';
import AnimatedBackgroundClickBlocks from './AnimatedBackgroundClickBlocks';

const backgrounds = [
  { component: AnimatedBackground },
  { component: AnimatedBackgroundSpace },
  { component: AnimatedBackgroundBlocks },
  { component: AnimatedBackgroundClickBlocks },
];

const BackgroundManager = () => {
  const [currentBackground, setCurrentBackground] = useState(0);

  const CurrentBackgroundComponent = backgrounds[currentBackground].component;

  return (
    <>
      <CurrentBackgroundComponent />
      <div style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        zIndex: 1000,
        display: 'flex',
        flexDirection: 'column',
        gap: '10px'
      }}>
        {backgrounds.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBackground(index)}
            style={{
              width: '12px',
              height: '12px',
              borderRadius: '50%',
              border: 'none',
              background: currentBackground === index ? '#ffffff' : '#6c757d',
              opacity: currentBackground === index ? 1 : 0.5,
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
            aria-label={`Switch to background ${index + 1}`}
          />
        ))}
      </div>
    </>
  );
};

export default BackgroundManager;