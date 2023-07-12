// App.jsx
import React, {useState} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
//import ChatBox from "./pages/ChatBox/ChatBox";
import CreateNft from "./pages/CreateNft/CreateNft";
import Settings from "./pages/Settings/Settings";
import AboutModal from "./components/About/AboutModal";

const App = () => {
  const [isAboutModalOpen, setAboutModalOpen] = useState(false);

  const handleAboutOpen = () => {
    setAboutModalOpen(true);
  };

  const handleAboutClose = () => {
    setAboutModalOpen(false);
  };

  return (
    <Router>
      <Navbar onAboutOpen={handleAboutOpen} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateNft />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
      <AboutModal isOpen={isAboutModalOpen} onRequestClose={handleAboutClose} />
    </Router>
  );
};

export default App;
