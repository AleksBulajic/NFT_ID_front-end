import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ChatBox from "./components/ChatBox/ChatBox";
import CreateNft from "./pages/CreateNft/CreateNft";
import Settings from "./pages/Settings/Settings";
import LandingScreen from "./pages/LandingScreen/LandingScreen";
import SignUp from "./pages/SignUp/SignUp";
import AboutModal from "./components/About/AboutModal";
import ThemeContext from "./pages/Settings/ThemeContext";

const AnimatedRoutes = ({ children, themeColor }) => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)"  },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)"  },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Routes location={item}>
        {children}
      </Routes>
    </animated.div>
  ));
};

const App = () => {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [themeColor, setThemeColor] = useState('#2f1c2c');

  const handleAboutOpen = () => {
    setAboutModalOpen(true);
  };

  const handleAboutClose = () => {
    setAboutModalOpen(false);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <div style={{ backgroundColor: themeColor, minHeight: '100vh' }}>
      <Navbar onAboutOpen={handleAboutOpen} />
      <AnimatedRoutes themeColor= {themeColor}>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateNft />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<SignUp />} />
      </AnimatedRoutes>
      <AboutModal isOpen={isAboutModalOpen} onRequestClose={handleAboutClose} />
      <ChatBox />
      </div>
    </ThemeContext.Provider>
  )
};

export default App;
