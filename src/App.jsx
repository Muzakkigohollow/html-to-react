// Import necessary components
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './pages/Home';
import Register from './pages/Register0';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div>
        {/* Set up the routes */}
        <Routes>
          {/* Define a route for the homepage */}
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
