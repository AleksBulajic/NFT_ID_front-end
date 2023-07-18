import React, { useState, useEffect, useContext } from "react";
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
import { AuthContext } from "./auth/AuthContextComponent";

const AnimatedRoutes = ({ children, themeColor }) => {
  const location = useLocation();

  const transitions = useTransition(location, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
  });

  return transitions((props, item) => (
    <animated.div style={props}>
      <Routes location={item}>{children}</Routes>
    </animated.div>
  ));
};

const App = () => {
  const [walletAddress, setWalletAddress] = useState("")
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showResults, setShowResults] = useState(false); 
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);
  const [themeColor, setThemeColor] = useState('#2f1c2c');

  useEffect(() => {
    const logged = localStorage.getItem("isloggedin");
    setIsLoggedIn(logged === "true");

    const handleBeforeUnload = () => {
      localStorage.setItem("isloggedin", isLoggedIn);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [isLoggedIn, setIsLoggedIn]);

  const handleAboutOpen = () => {
    setAboutModalOpen(true);
  };

  const handleAboutClose = () => {
    setAboutModalOpen(false);
  };

  return (
    <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
      <div style={{ backgroundColor: themeColor, minHeight: '100vh' }}>
        {isLoggedIn && (
          <Navbar
            onAboutOpen={handleAboutOpen}
            setShowResults={setShowResults}
            wallet={{ walletAddress, setWalletAddress }}
          />
        )}
        <AnimatedRoutes themeColor={themeColor}>
          <Route path="/" element={<LandingScreen />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<CreateNft walletAddress={walletAddress} />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/signup" element={<SignUp />} />
        </AnimatedRoutes>
        <AboutModal isOpen={isAboutModalOpen} onRequestClose={handleAboutClose} />
        {isLoggedIn && <ChatBox />} {/* Render ChatBox only if the user is logged in */}
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
