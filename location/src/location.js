import React, { useState, useEffect  } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { vehicles } from './vehicule.js';
import './location.css';

const Location = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [vehicle, setVehicle] = useState(null);
  
  useEffect(() => {
    const fetchVehicle = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://rent-a-car-gie0.onrender.com/api/vehicules/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      } else {
        const data = await response.json();
        setVehicle(data);
      }
    };

    fetchVehicle().catch((error) => console.error(error));
  }, [id]);


  // Utilisation des hooks en dehors de la condition
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [driverLicense, setDriverLicense] = useState('');
  const [, setDuration] = useState(0); // Ajout de l'état pour la durée de location

  if (!vehicle) {
    return <div>Le véhicule demandé n'existe pas.</div>;
  }

  const handleLocationSubmit = async (event) => {
    event.preventDefault();
    
    // Calculez la durée de location en jours
    const startDateObj = new Date(startDate);
    const endDateObj = new Date(endDate);
    const timeDiff = Math.abs(endDateObj - startDateObj);
    const calculatedDuration = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));

    const cout_total = vehicle.price * calculatedDuration;
    const client_id = localStorage.getItem('id');

    const response = await fetch('https://rent-a-car-gie0.onrender.com/api/locations/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
      body: JSON.stringify({ 
        date_debut: startDate, 
        date_fin: endDate, 
        cout_total:cout_total, 
        vehicule_id: id, 
        client_id: client_id 
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      const data = await response.json();
      console.log('Location created: ', data);
    

    // Réinitialise les champs du formulaire
    setStartDate('');
    setEndDate('');
    setFirstName('');
    setLastName('');
    setPhoneNumber('');
    setDuration(calculatedDuration); // Stockez la durée de location dans l'état

    // Redirigez vers la page de paiement après la soumission
    navigate(`/paiement/${data.id}`, { state: { duration: calculatedDuration } });
  }
  };


  return (
    <div className="location-container">
      <div className="menu-container">
        <Link to="/">Accueil</Link>
        <Link to={`/description/${id}`}>Retour à la description</Link>
      </div>
      <h2>{vehicle.make} {vehicle.model}</h2>
      <img src={`../${vehicle.image}`} alt={vehicle.make + ' ' + vehicle.model} />
      <p>Année : {vehicle.year}</p>
      <p>Prix par jour : {vehicle.price} €</p>
      <p>Kilométrage : {vehicle.kilometrage}</p>
      <p>État : {vehicle.etat}</p>
      <p>Localisation : {vehicle.ville}, {vehicle.pays}</p>
      
      <form onSubmit={handleLocationSubmit}>
        <h3>Informations de location</h3>
        <div>
          <label>Date de début :</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div>
          <label>Date de fin :</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
        </div>
        <h3>Informations du locataire</h3>
        <div>
          <label>Prénom :</label>
          <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div>
          <label>Nom :</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div>
          <label>Numéro de téléphone :</label>
          <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} required />
        </div>
        <div>
          <label>Numéro de permis :</label>
          <input type="text" value={driverLicense} onChange={(e) => setDriverLicense(e.target.value)} required />
        </div>
        <button type="submit">Confirmer la location</button>
      </form>
    </div>
  );
};

export default Location;
