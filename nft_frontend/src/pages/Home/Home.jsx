import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import IdCard from '../../components/IdCard/IdCard';
import './home.css';
import '../../App.css';

const Home = () => {
  const [showIdCard, setShowIdCard] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIdCard(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const titleAnimation = useSpring({
    from: { transform: 'translateX(100%)', opacity: 0 },
    to: async (next) => {
      if (showIdCard) {
        await next({ transform: 'translateX(0)', opacity: 0 });
      } else {
        await next({ transform: 'translateX(0)', opacity: 1 });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await next({ transform: 'translateX(-100%)', opacity: 0 });
      }
    },
    config: { duration: 1000 },
  });
  

  const idCardAnimation = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    delay: 4000,
    config: { duration: 2000 },
  });

  return (
    <div className="home-container">
      <animated.h1 style={titleAnimation} className='home-title'>
        Hello and Welcome!
      </animated.h1>
      <div className="spacer" />
      {showIdCard && (
        <animated.div style={idCardAnimation}>
          <IdCard />
        </animated.div>
      )}
    </div>
  );
};

export default Home;
