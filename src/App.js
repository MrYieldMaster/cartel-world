import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavbarComponent from './components/NavBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import GameInfo from './pages/GameInfo';
import Community from './pages/Community'; 



function App() {
  return (
      <Router>
          <NavbarComponent />
          <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/game-info" element={<GameInfo />} />
             <Route path="/community" element={<Community />} />
             {/* Define other routes here */}
         </Routes>

          <Footer />
      </Router>
  );
}

export default App;

