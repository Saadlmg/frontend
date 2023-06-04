/*import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact</h2>
      <Link to="/" className="home-link">Accueil</Link>
      <form>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea id="message" rows="4"></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
};

export default Contact;
*/

// contact.js
import React from 'react';
import { Link } from 'react-router-dom';
import './contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Contact</h2>
        <p>Veuillez nous contacter pour toute demande de renseignements ou de réservation.</p>
      </div>
      <div className="contact-info">
        <div className="contact-address">
          <h3>Adresse</h3>
          <p>123 Rue de la Location</p>
          <p>34000 Montpellier</p>
        </div>
        <div className="contact-phone">
          <h3>Téléphone</h3>
          <p>+33 9 76 23 48 92</p>
        </div>
        <div className="contact-email">
          <h3>Email</h3>
          <p>info@locationvoitures.com</p>
        </div>
      </div>
      <form>
        <div>
          <label htmlFor="name">Nom :</label>
          <input type="text" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email :</label>
          <input type="email" id="email" />
        </div>
        <div>
          <label htmlFor="message">Message :</label>
          <textarea id="message" rows="4"></textarea>
        </div>
        <button type="submit">Envoyer</button>
      </form>
      <Link to="/" className="home-link">Accueil</Link>
    </div>
  );
};

export default Contact;
