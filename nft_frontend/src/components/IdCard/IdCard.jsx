import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import './idcard.css';

const IdCard = () => {
  const user = {
    name: 'Devin Shrek',
    image:
      'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/08/Retrofuturism-in-design.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces',
    detail1: 'Wallet Id Number',
    detail2: 'NY, NY',
    detail3: '72 inches',
  };

  const [scale, setScale] = useState(1);
  const [isDetailVisible, setDetailVisible] = useState(false);

  const scaleProps = useSpring({ transform: `scale(${scale})` });

  const detailProps1 = useSpring({
    transform: isDetailVisible ? 'translate(100px, 50px)' : 'translate(0px, 0px)',
    config: { tension: 210, friction: 20 },
  });

  const detailProps2 = useSpring({
    transform: isDetailVisible ? 'translate(-50px, 100px)' : 'translate(0px, 0px)',
    config: { tension: 210, friction: 20 },
  });

  const detailProps3 = useSpring({
    transform: isDetailVisible ? 'translate(50px, -100px)' : 'translate(0px, 0px)',
    config: { tension: 210, friction: 20 },
  });

  const handleCardClick = () => {
    setDetailVisible(!isDetailVisible);
  };

  return (
    <div className="idCardContainer">
      <animated.div
        className="idCard"
        style={scaleProps}
        onMouseEnter={() => setScale(1.2)}
        onMouseLeave={() => setScale(1)}
        onClick={handleCardClick}
      >
        <h2>{user.name}</h2>
        <div className="id-card-content">
          <img src={user.image} alt={user.name} />
        </div>
      </animated.div>
      <animated.p className={isDetailVisible ? "spread" : ""} style={detailProps1}>{user.detail1}</animated.p>
      <animated.p className={isDetailVisible ? "spread" : ""} style={detailProps2}>{user.detail2}</animated.p>
      <animated.p className={isDetailVisible ? "spread" : ""} style={detailProps3}>{user.detail3}</animated.p>
    </div>
  );
};

export default IdCard;
