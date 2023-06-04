/*import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image/audiRS6.jpg';
import logo1 from './image/largeChoix.jpg';
import './homePage.css';


function homePage() {
  return (
    <div>
      <header>
        <h1>Location de voitures</h1>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="#">Véhicules</Link></li>
            <li><Link to="#">À propos</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li className="right"><Link to="/login">Login</Link></li>
          </ul>
        </nav>
      </header>
      
      <section className="banner">
        <h2>Réservez votre voiture dès maintenant</h2>
        <p>Découvrez notre large sélection de véhicules pour répondre à tous vos besoins de location.</p>
        <a href="#" className="btn">Réserver maintenant</a>
      </section>
      
      <section className="services">
        <h3>Nos services</h3>
        <div className="service">
          <img src={logo} alt="Service de location de voitures" />
          <h4>Large choix de véhicules</h4>
          <p>Nous proposons une variété de voitures adaptées à tous les budgets et besoins.</p>
        </div>
        <div className="service">
          <img src="key-icon.png" alt="Service de location de voitures" />
          <h4>Processus de réservation facile</h4>
          <p>Notre système de réservation en ligne est simple et pratique.</p>
        </div>
        <div className="service">
          <img src="support-icon.png" alt="Service de location de voitures" />
          <h4>Service client disponible</h4>
          <p>Notre équipe est là pour vous aider et répondre à toutes vos questions.</p>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2023 Location de voitures. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default homePage;


/*
ligne 18
<li class="right"><a href="#">Login</a></li>

link pour se co a login
<li className="right"><Link to="/login">Login</Link></li>

nv ligne
<li className="right"><Link to="#" onClick={() => setModalIsOpen(true)}>Login</Link></li>
*/


/*import React from 'react';
import { Link } from 'react-router-dom';
import logo from './image/audiRS6.jpg';
import logo1 from './image/largeChoix.jpg';
import './homePage.css';

function homePage({ openLoginModal }) {
  return (
    <div>
      <header>
        <h1>Location de voitures</h1>
        <nav>
          <ul>
            <li><Link to="/">Accueil</Link></li>
            <li><Link to="#">Véhicules</Link></li>
            <li><Link to="#">À propos</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li className="right"><button onClick={openLoginModal}>Login</button></li>
          </ul>
        </nav>
      </header>

      <section className="banner">
        <h2>Réservez votre voiture dès maintenant</h2>
        <p>Découvrez notre large sélection de véhicules pour répondre à tous vos besoins de location.</p>
        <a href="#" className="btn">Réserver maintenant</a>
      </section>
      
      <section className="services">
        <h3>Nos services</h3>
        <div className="service">
          <img src={logo} alt="Service de location de voitures" />
          <h4>Large choix de véhicules</h4>
          <p>Nous proposons une variété de voitures adaptées à tous les budgets et besoins.</p>
        </div>
        <div className="service">
          <img src="key-icon.png" alt="Service de location de voitures" />
          <h4>Processus de réservation facile</h4>
          <p>Notre système de réservation en ligne est simple et pratique.</p>
        </div>
        <div className="service">
          <img src="support-icon.png" alt="Service de location de voitures" />
          <h4>Service client disponible</h4>
          <p>Notre équipe est là pour vous aider et répondre à toutes vos questions.</p>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2023 Location de voitures. Tous droits réservés.</p>
      </footer>
    </div>
  );
}

export default homePage;

*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from './image/audiRS6.jpg';
import logo1 from './image/largeChoix.jpg';
import './homePage.css';
import Login from './login.js';

function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [clientEmail, setClientEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');
    if(token && email) {
      setIsLoggedIn(true);
      setClientEmail(email);
      if(role === 'admin') {
        setIsAdmin(true);
      }
    }
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginClose = () => {
    setShowLogin(false);
  };

  const handleHomeClick = () => {
    window.location.reload();
  };

  return (
    <div>
      <header>
        <h1>Location de voitures</h1>
        <nav>
          <ul>
            <li><button className="nav-link" onClick={handleHomeClick}>
                Accueil
            </button></li>
            <li><Link to="/vehicule" className="nav-link">Véhicules</Link></li>
            <li><Link to="/aboutPage" className="nav-link">À propos</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
            {isAdmin && <li><Link to="/admin" className="nav-link">Admin Panel</Link></li>}
            <li className="right">
              {isLoggedIn ? (
                <Link to="/compte" className="nav-link">Hello :  {clientEmail} </Link>
              ) : (
                <button className="nav-link" onClick={handleLoginClick}>Login</button>
              )}
            </li>
          </ul>
        </nav>
      </header>
      
      <section className="banner">
        <h2>Réservez votre voiture dès maintenant</h2>
        <p>Découvrez notre large sélection de véhicules pour répondre à tous vos besoins de location.</p>
        <Link to="/vehicule" className="btn">Réserver maintenant</Link>
      </section>
      
      <section className="services">
        <h3>Nos services</h3>
        <div className="service">
          <img src={logo} alt="Service de location de voitures" />
          <h4>Large choix de véhicules</h4>
          <p>Nous proposons une variété de voitures adaptées à tous les budgets et besoins.</p>
        </div>
        <div className="service">
          <img src={logo} alt="Service de location de voitures" />
          <h4>Processus de réservation facile</h4>
          <p>Notre système de réservation en ligne est simple et pratique.</p>
        </div>
        <div className="service">
          <img src={logo} alt="Service de location de voitures" />
          <h4>Service client disponible</h4>
          <p>Notre équipe est là pour vous aider et répondre à toutes vos questions.</p>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2023 Location de voitures. Tous droits réservés.</p>
      </footer>

      {showLogin && <Login onClose={handleLoginClose} />}
    </div>
  );
}

export default HomePage;


/*
<li><Link to="#">Contact</Link></li> ligne 156

marche tres bien: <Link to="/contact">Contact</Link>

<li className="right">
              <button onClick={handleLoginClick}>Login</button>
            </li>
ce qui marche

<li><Link to="#">Véhicules</Link></li>

acceuil ancien:
<li><Link to="/">Accueil</Link></li>
acceuil nouveau:
<button className="nav-link" onClick={handleHomeClick}>
                Accueil
              </button>


<li><Link to="#">À propos</Link></li> pour a propos
            */