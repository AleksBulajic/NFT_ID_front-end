import React, { useCallback, useState, useEffect, useContext } from "react";
import { useSpring, animated } from "react-spring";
import IdCard from "../../components/IdCard/IdCard";
import ArtCollection from "./ArtCollection";
import ThemeContext from "../Settings/ThemeContext";
import Particles from "react-tsparticles";
//import particleConfig from "./particlesConfig";
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
      type: "image",
    },
    {
      name: "Art 2",
      image:
        "https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1412093-dC7PzCV7Xs-high.mp4",
      type: "video",
    },
    {
      name: "Art 3",
      image: "https://wallpapercave.com/dwp2x/wp7051645.jpg",
      type: "image",
    },
    {
      name: "Art 4",
      image: "https://wallpapercave.com/dwp2x/wp7051768.jpg",
      type: "image",
    },
    {
      name: "Art 5",
      image:
        "https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1057998-a17OliJ2Zf-high.mp4",
      type: "video",
    },
    {
      name: "Art 6",
      image:
        "https://w0.peakpx.com/wallpaper/766/987/HD-wallpaper-spiderman-miles-lost-in-space-spiderman-into-the-spider-verse-spiderman-superheroes-artwork-artist-digital-art-deviantart.jpg",
      type: "image",
    },
    {
      name: "Art 7",
      image:
        "https://dsqqu7oxq6o1v.cloudfront.net/motion-array-1296625-Astronaut_floats_03-high.mp4",
      type: "video",
    },
  ];
  const particlesOptions = {
    particles: {
      number: {
        value: 50,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#ffffff",
      },
      shape: {
        type: "star",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    retina_detect: true,
  };
  const particlesInit = useCallback((main) => {
    console.log("Particles init", main);
  }, []);

  const particlesLoaded = useCallback((container) => {
    console.log("Particles loaded", container);
  }, []);

  return (
    <div
      className="home-container"
      style={
        themeColor.includes(".avif") ||
        themeColor.includes("data:image/") ||
        themeColor.includes("http")
          ? { backgroundImage: `url(${themeColor})` }
          : { backgroundColor: themeColor }
      }
    >
      <Particles
        params={particlesOptions}
        init={particlesInit}
        loaded={particlesLoaded}
      />
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

