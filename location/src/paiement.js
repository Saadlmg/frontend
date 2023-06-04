/*import React, { useState } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';
import { vehicles } from './vehicule.js';
import './paiement.css';

const Paiement = () => {
  const { id } = useParams(); // Obtient l'ID du véhicule à partir des paramètres d'URL
  const location = useLocation(); // Obtient les données de l'état de navigation
  
  // Recherche du véhicule correspondant à l'ID
  const vehicle = vehicles.find((vehicle) => vehicle.id === parseInt(id));

  // Utilisation des hooks en dehors de la condition
  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  if (!vehicle || !location.state) {
    return <div>Le véhicule demandé n'existe pas ou les informations de location sont manquantes.</div>;
  }

  const { duration } = location.state;
  const totalPrice = vehicle.price * duration;


  const handlePaiementSubmit = (event) => {
    event.preventDefault();
    
    // Réinitialise les champs du formulaire
    setCardNumber('');
    setExpirationDate('');
    setCvv('');
  };

  return (
    <div className="paiement-container">
      <div className="menu-container">
        <Link to="/">Accueil</Link>
        <Link to={`/description/${id}`}>Retour à la description</Link>
      </div>
      <h2>{vehicle.make} {vehicle.model}</h2>
      <img src={vehicle.image} alt={vehicle.make + ' ' + vehicle.model} />
      <p>Année : {vehicle.year}</p>
      <p>Prix par jour : {vehicle.price} €</p>
      <p>Kilométrage : {vehicle.kilometrage}</p>
      <p>État : {vehicle.etat}</p>
      <p>Localisation : {vehicle.ville}, {vehicle.pays}</p>
      <h3>Informations de Paiement</h3>
      <p>Prix total à payer : {totalPrice} €</p>
      <form onSubmit={handlePaiementSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Numéro de carte :</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Date d'expiration :</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(event) => setExpirationDate(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV :</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            required
          />
        </div>
        <button type="submit">Payer</button>
      </form>
    </div>
  );
};

export default Paiement;
*/

import React, { useState } from 'react';
import { useParams, Link, useLocation, useNavigate } from 'react-router-dom';
import { vehicles } from './vehicule.js';
import './paiement.css';

const Paiement = () => {
  const { id } = useParams(); 
  const location = useLocation(); 
  const navigate = useNavigate(); // Ajout du hook useNavigate
  
  const vehicle = vehicles.find((vehicle) => vehicle.id === parseInt(id));

  const [cardNumber, setCardNumber] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [cvv, setCvv] = useState('');

  if (!vehicle || !location.state) {
    return <div>Le véhicule demandé n'existe pas ou les informations de location sont manquantes.</div>;
  }

  const { duration } = location.state;
  const totalPrice = vehicle.price * duration;

  const handlePaiementSubmit = (event) => {
    event.preventDefault();
    
    alert('La location et le paiement ont été validés.'); 
    navigate('/'); 

    setCardNumber('');
    setExpirationDate('');
    setCvv('');
  };

  return (
    <div className="paiement-container">
      <div className="menu-container">
        <Link to="/">Accueil</Link>
        <Link to={`/description/${id}`}>Retour à la description</Link>
      </div>
      <h2>{vehicle.make} {vehicle.model}</h2>
      <img src={vehicle.image} alt={vehicle.make + ' ' + vehicle.model} />
      <p>Année : {vehicle.year}</p>
      <p>Prix par jour : {vehicle.price} €</p>
      <p>Kilométrage : {vehicle.kilometrage}</p>
      <p>État : {vehicle.etat}</p>
      <p>Localisation : {vehicle.ville}, {vehicle.pays}</p>
      <h3>Informations de Paiement</h3>
      <p>Prix total à payer : {totalPrice} €</p>
      <form onSubmit={handlePaiementSubmit}>
        <div className="form-group">
          <label htmlFor="cardNumber">Numéro de carte :</label>
          <input
            type="text"
            id="cardNumber"
            value={cardNumber}
            onChange={(event) => setCardNumber(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="expirationDate">Date d'expiration :</label>
          <input
            type="text"
            id="expirationDate"
            value={expirationDate}
            onChange={(event) => setExpirationDate(event.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV :</label>
          <input
            type="text"
            id="cvv"
            value={cvv}
            onChange={(event) => setCvv(event.target.value)}
            required
          />
        </div>
        <button type="submit">Payer</button>
      </form>
    </div>
  );
};

export default Paiement;
