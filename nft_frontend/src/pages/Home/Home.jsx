import React, { useState, useEffect, useContext } from "react";
import { useSpring, animated } from "react-spring";
import IdCard from "../../components/IdCard/IdCard";
import ArtCollection from "./ArtCollection";
import ThemeContext from "../Settings/ThemeContext";
import "./home.css";



const Home = () => {
  const [showIdCard, setShowIdCard] = useState(false);
  const { themeColor } = useContext(ThemeContext);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIdCard(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const titleAnimation = useSpring({
    from: { transform: "translateX(100%)", opacity: 0 },
    to: async (next) => {
      if (showIdCard) {
        await next({ transform: "translateX(0)", opacity: 0 });
      } else {
        await next({ transform: "translateX(0)", opacity: 1 });
        await new Promise((resolve) => setTimeout(resolve, 3000));
        await next({ transform: "translateX(-100%)", opacity: 0 });
      }
    },
    config: { duration: 1000 },
  });

  const idCardAnimation = useSpring({
    from: { transform: "scale(0)" },
    to: { transform: "scale(1)" },
    delay: 4000,
    config: { duration: 2000 },
  });

  const arts = [
    {
      name: "Art 1",
      image: "https://wallpapercave.com/dwp2x/wp7051632.jpg",
      type: "image"
    },
    { 
      name: "Art 2", 
      image: "https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1412093-dC7PzCV7Xs-high.mp4", 
      type: "video"
    },
    { 
      name: "Art 3", 
      image: "https://wallpapercave.com/dwp2x/wp7051645.jpg", 
      type: "image"
    },
    { 
      name: "Art 4", 
      image: "https://wallpapercave.com/dwp2x/wp7051768.jpg", 
      type: "image"
    },
    { 
      name: "Art 5", 
      image: "https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1057998-a17OliJ2Zf-high.mp4", 
      type: "video"
    },
    { 
      name: "Art 6", 
      image: "https://w0.peakpx.com/wallpaper/766/987/HD-wallpaper-spiderman-miles-lost-in-space-spiderman-into-the-spider-verse-spiderman-superheroes-artwork-artist-digital-art-deviantart.jpg", 
      type: "image" 
    },
    { 
      name: "Art 7", 
      image: "https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1296625-Astronaut_floats_03-high.mp4", 
      type: "video" 
    },
  ];
  return (
    <div className="home-container" style={{ backgroundColor: themeColor }}>
      <animated.h1 style={titleAnimation} className='home-title'>
        Hello and Welcome!
      </animated.h1>
      <div className="content-container">
        {showIdCard && (
          <animated.div style={idCardAnimation}>
            <IdCard />
          </animated.div>
        )}
      </div>
      <div className="art-collection-wrapper">
        <ArtCollection arts={arts} />
      </div>
    </div>
  );
};


export default Home;
