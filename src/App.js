import React from 'react'
import './App.css';
import Home from './componentes/Home/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './componentes/statics/navBar/NavBar';


function App() {
  return (
      <Router>
        <Navbar />
        <div style={{ minHeight: '100vh' }}>
        <Routes>
        <Route path="/NavBar" element={<Navbar />} />
        <Route path="/Home" element={<Home />} />
        </Routes>
        </div>
        {/* <Footer /> */}
      </Router>
  );
}

export default App;
