import './App.css';
import Login from './Login';
import Register from './Register';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage';
import React, { useState } from 'react';
function App() {
  const storedLoggedIn = localStorage.getItem('loggedIn');
  const [loggedIn, setLoggedIn] = useState(storedLoggedIn === 'true');

  const handleLogin = () => {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  };

  const handleLogout = () => {
    setLoggedIn(false);
    localStorage.setItem('loggedIn', 'false');
  };

  const redirectToRegister = () => {
  };

  return (
    <BrowserRouter basename="/blog">
      <Routes>
        <Route
          path="/"
          element={
            !loggedIn ? (
              <Login setLoggedIn={handleLogin} redirectToRegister={redirectToRegister} />
            ) : (
              <Navigate to="/home" />
            )
          }
        />
        <Route
          path="/register"
          element={<Register redirectToLogin={() => <Navigate to="/" />} />}
        />
        <Route
          path="/home"
          element={loggedIn ? <Homepage onLogout={handleLogout} /> : <Navigate to="/" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
