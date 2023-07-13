import React from 'react';
import { useSpring, animated } from 'react-spring';
import './idcard.css';  

const IdCard = () => {
  const user = {
    name: 'Devin Shrek',
    image: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2022/08/Retrofuturism-in-design.jpg?auto=format&q=60&w=1860&h=1860&fit=crop&crop=faces',
    detail1: 'Wallet Id Number',
    detail2: 'NY, NY',
    detail3: '72 inches'
  };

  const [props, set] = useSpring(() => ({
    scale: 1,
  }));

  return (
    <animated.div 
      className="idCard" 
      style={props} 
      onMouseEnter={() => set({ scale: 1.2 })} 
      onMouseLeave={() => set({ scale: 1 })} 
    >
      <h2>{user.name}</h2>
      <div className="id-card-content">
        <img src={user.image} alt={user.name} />
        <p>{user.detail1}</p>
        <p>{user.detail2}</p>
        <p>{user.detail3}</p>
      </div>
    </animated.div>
  );
};

export default IdCard;
