import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './description.css';

const Description = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [vehicle, setVehicle] = useState(null);
  
  useEffect(() => {
    const fetchVehicle = async () => {
      const token = localStorage.getItem('token');
      const response = await fetch(`http://localhost:3000/api/vehicules/${id}`, {
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

  if (!vehicle) {
    return <div>Loading...</div>;
  }

  const handleLouerClick = () => {
    navigate(`/location/${id}`, { state: { vehicle } });
  };

  return (
    <div className="description-container">
      <div className="menu-container">
        <Link to="/">Accueil</Link>
        <Link to="/vehicule">Véhicules</Link>
      </div>
      <h2>{vehicle.make} {vehicle.model}</h2>
      <img src={`../${vehicle.image}`} alt={vehicle.make + ' ' + vehicle.model} />
      <p>Année : {vehicle.model}</p>
      <p>Prix par jour : {vehicle.price} €</p>
      <p>Kilométrage : {vehicle.kilometrage}</p>
      <p>État : {vehicle.etat}</p>
      <p>Localisation : {vehicle.ville}, {vehicle.pays}</p>
      <button onClick={handleLouerClick}>Louer</button>
    </div>
  );
};

export default Description;
