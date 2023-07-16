
import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useTransition, animated } from "react-spring";

import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { useTransition, animated } from 'react-spring';

import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ChatBox from "./components/ChatBox/ChatBox";
import CreateNft from "./pages/CreateNft/CreateNft";
import Settings from "./pages/Settings/Settings";
import LandingScreen from "./pages/LandingScreen/LandingScreen";
import SignUp from "./pages/SignUp/SignUp";
import AboutModal from "./components/About/AboutModal";

import NFT  from "./components/NFT/NFT";
import { AuthContext } from "./auth/AuthContextComponent";



const AnimatedRoutes = ({ children }) => {
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

// 

const App = () => {

  const [walletAddress, setWalletAddress] = useState("")
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const [showResults, setShowResults] = useState(false); 


  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  useEffect(() => {
    const logged = localStorage.getItem("isloggedin");
    setIsLoggedIn(logged);

    const handleBeforeUnload = () => {
      setIsLoggedIn(false);
      localStorage.clear();
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [setIsLoggedIn]);


  const handleAboutOpen = () => {
    setAboutModalOpen(true);
  };

  const handleAboutClose = () => {
    setAboutModalOpen(false);
  };

  return (
    <>{}
        {isLoggedIn && <Navbar setShowResults={setShowResults} wallet={{walletAddress,setWalletAddress }} />}{" "}
      {/* <-- Passed setShowResults here */}
      <AnimatedRoutes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutModal />} />
        {/* <Route path="/nft" element={<NFT />} /> */}
        <Route path="/create" element={<CreateNft walletAddress={walletAddress} />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={<SignUp />} />
      </AnimatedRoutes>
      <AboutModal isOpen={isAboutModalOpen} onRequestClose={handleAboutClose} />
      <ChatBox />
    </>
  );
};

export default App;
