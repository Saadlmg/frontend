
import React, { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './compte.css';

const Compte = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (!token) {
      // If not logged in, redirect to the home page
      navigate('/');
    }
    if(token && email) {
      setIsLoggedIn(true);
      setClientEmail(email);
    }
  }, [navigate]);

  const handleLogout = () => {
    // Clear the user's token and email and redirect to the home page
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');

    navigate('/');
  };

  return (
    <div className="compte-container">
      <h1>Bonjour {clientEmail}</h1>
      <h2>Mon Compte</h2>
      <ul className="compte-links">
        <li>
          <Link to="/" className="compte-link">Acceuil</Link>
        </li>
        <li>
          <Link to="/vehicule" className="compte-link">Véhicules</Link>
        </li>
        <li>
          <Link to="/mesReservation" className="compte-link">Mes Réservations</Link>
        </li>
        <li>
          <Link to="/contact" className="compte-link">Contact</Link>
        </li>
      </ul>
      <button onClick={handleLogout}>Se déconnecter</button>
    </div>
  );
};

export default Compte;