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
    }, 3000);
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
      image: "https://cdn.pixabay.com/vimeo/365890980/abstract-27726.mp4?width=640&hash=d45867f83b48e0a39f8102d2a97e668e658f6f6f", 
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
      image: "https://cdn.pixabay.com/vimeo/217588604/asteroids-9135.mp4?width=640&hash=589dcecb1ab8354c6dbaa6f1b63e25f7c1e35794", 
      type: "video"
    },
    { 
      name: "Art 6", 
      image: "https://w0.peakpx.com/wallpaper/766/987/HD-wallpaper-spiderman-miles-lost-in-space-spiderman-into-the-spider-verse-spiderman-superheroes-artwork-artist-digital-art-deviantart.jpg", 
      type: "image" 
    },
    { 
      name: "Art 7", 
      image: "https://cdn.pixabay.com/vimeo/683077197/space-109043.mp4?width=1280&hash=e856d7f7a43afea66816eb1eb6e1862281bb354d", 
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
