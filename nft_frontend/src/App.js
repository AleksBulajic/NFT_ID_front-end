// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/NavBar/NavBar";
import Home from "./pages/Home/Home";
import ChatBox from "./pages/ChatBox/ChatBox";
import CreateNft from "./pages/CreateNft/CreateNft";
import Settings from "./pages/Settings/Settings";
import SignUp from "./pages/SignUp/SignUp";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateNft />} />
        <Route path="/chatbox" element={<ChatBox />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/signup" element={SignUp} />
      </Routes>
    </Router>
  );
};

export default App;
