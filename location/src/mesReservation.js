import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './mesReservation.css';

const MesReservation = () => {
  // State for reservations
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      const clientId = localStorage.getItem('id');  // Get client id from local storage
      const response = await fetch(`http://localhost:3000/api/locations/client/${clientId}`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setReservations(data);  // Set reservations to the received data
      }
    };

    fetchReservations().catch((error) => console.error(error));
  }, []);

  // Current date for comparison
  const currentDate = new Date();

  const userHasCurrentReservations = reservations.some(reservation => {
    const endDate = new Date(reservation.date_fin);
    return endDate >= currentDate;
  });
  const userHasPastReservations = reservations.some(reservation => {
    const endDate = new Date(reservation.date_fin);
    return endDate < currentDate;
  });

  return (
    <div className="mes-reservations-container">
      <h2>Mes Réservations</h2>
      <div className="menu-container">
        <Link to="/">Accueil</Link>
        <Link to="/vehicule">Catalogue de véhicules</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="reservation-list">
        {userHasCurrentReservations && (
          <div>
            <h3>Véhicules en cours de location :</h3>
            {reservations
              .filter(reservation => new Date(reservation.date_fin) >= currentDate)
              .map(reservation => (
                <div key={reservation.id} className="reservation-card">
                  <img src={`../${reservation.vehicule.image}`} alt={reservation.vehicule.make + ' ' + reservation.vehicule.model} />
                  <h4>{reservation.vehicule.make}</h4>
                  <p>{reservation.vehicule.model}</p>
                  <p>Année : {reservation.vehicule.model}</p>
                  <p>Date de début : {reservation.date_debut}</p>
                  <p>Date de fin : {reservation.date_fin}</p>
                </div>
              ))}
          </div>
        )}
        {userHasPastReservations && (
          <div>
            <h3>Anciennes réservations :</h3>
            {reservations
              .filter(reservation => new Date(reservation.date_fin) < currentDate)
              .map(reservation => (
                <div key={reservation.id} className="reservation-card">
                  <img src={`../${reservation.vehicule.image}`} alt={reservation.vehicule.make + ' ' + reservation.vehicule.model} />
                  <h4>{reservation.vehicule.make}</h4>
                  <p>{reservation.vehicule.model}</p>
                  <p>Année : {reservation.vehicule.year}</p>
                  <p>Date de début : {reservation.date_debut}</p>
                  <p>Date de fin : {reservation.date_fin}</p>
                </div>
              ))}
          </div>
        )}
        {!userHasCurrentReservations && !userHasPastReservations && (
          <p>Vous n'avez aucune voiture en cours de location ou de voiture que vous avez déjà louée.</p>
        )}
        <Link to="/vehicule">Voir le catalogue de véhicules</Link>
      </div>
    </div>
  );
};

export default MesReservation;
