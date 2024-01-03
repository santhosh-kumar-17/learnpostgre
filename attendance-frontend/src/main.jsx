import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/navbar.jsx';
import Landing from './components/Landing.jsx';
import Register from './components/Register.jsx';
import Signup from './components/Signup.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<Register />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
