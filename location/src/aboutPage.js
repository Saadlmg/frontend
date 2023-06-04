import React from 'react';
import { Link } from 'react-router-dom';
import './aboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-container">
      <h2>À propos</h2>
      <p>
        Bienvenue sur notre site de location de voitures. Nous sommes dédiés à fournir une expérience de location de
        voitures exceptionnelle à nos clients. Avec notre large sélection de véhicules de haute qualité et notre service
        client attentif, nous nous efforçons de répondre à tous vos besoins de location de voitures.
      </p>
      <p>
        Notre équipe de professionnels qualifiés est là pour vous guider tout au long du processus de réservation et pour
        répondre à toutes vos questions. Nous nous engageons à vous offrir un service de qualité et une satisfaction
        client optimale.
      </p>
      <p>Explorez notre site pour découvrir notre gamme de véhicules et réservez votre voiture dès aujourd'hui.</p>

      <div className="menu-container">
        <Link to="/">Accueil</Link>
        <Link to="/vehicule">Véhicule</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </div>
  );
};

export default AboutPage;
