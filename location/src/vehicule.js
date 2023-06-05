import React from 'react';
import { Link } from 'react-router-dom';
import './vehicule.css';
import { useEffect, useState } from 'react';



import audiRS6 from './image/audiRS6.jpg';
import bmwX5 from './image/bmwX5.jpg';
import mercedesCClass from './image/mercedesCClass.jpg';
import teslaModelS from './image/teslaModelS.jpg';
import fordMustang from './image/fordMustang.jpg';
import volkswagenGolf from './image/volkswagenGolf.jpg';
import toyotaCamry from './image/toyotaCamry.png';
import hyundaiTucson from './image/hyundaiTucson.jpg';
import nissanRogue from './image/nissanRogue.jpg';
import chevroletImpala from './image/chevroletImpala.jpg';
import lexusES from './image/lexusES.jpg';
import subaruOutback from './image/subaruOutback.jpg';
import mazdaCX5 from './image/mazdaCX5.jpg';
import kiaSoul from './image/kiaSoul.jpg';
import jeepWrangler from './image/jeepWrangler.jpg';
import fiat500 from './image/fiat500.jpg';
import peugeot308 from './image/peugeot308.png';
import renaultClio from './image/renaultClio.png';
import opelCorsa from './image/opelCorsa.jpg';
import seatLeon from './image/seatLeon.jpg';
import audiA4 from './image/audiA4.jpg';
import peugeot1007 from './image/peugeot1007.jpg';
import mercedesAMGA45 from './image/mercedesAMGA45.jpg';
import bentleyContinental from './image/bentleyContinental.jpg';

export const vehicles = [
  {
    id: 1,
    make: 'Audi',
    model: 'RS6',
    year: 2021,
    price: 180,
    image: audiRS6,
    kilometrage: 5000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 2,
    make: 'BMW',
    model: 'X5',
    year: 2022,
    price: 120,
    image: bmwX5,
    kilometrage: 7500,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 3,
    make: 'Mercedes',
    model: 'C-Class',
    year: 2020,
    price: 100,
    image: mercedesCClass,
    kilometrage: 2500,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 4,
    make: 'Tesla',
    model: 'Model S',
    year: 2023,
    price: 150,
    image: teslaModelS,
    kilometrage: 10000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 5,
    make: 'Ford',
    model: 'Mustang',
    year: 2022,
    price: 110,
    image: fordMustang,
    kilometrage: 34000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 6,
    make: 'Volkswagen',
    model: 'Golf',
    year: 2021,
    price: 190,
    image: volkswagenGolf,
    kilometrage: 5580,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 7,
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    price: 95,
    image: toyotaCamry,
    kilometrage: 35000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 8,
    make: 'Hyundai',
    model: 'Tucson',
    year: 2021,
    price: 85,
    image: hyundaiTucson,
    kilometrage: 65000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 9,
    make: 'Nissan',
    model: 'Rogue',
    year: 2022,
    price: 100,
    image: nissanRogue,
    kilometrage: 75000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 10,
    make: 'Chevrolet',
    model: 'Impala',
    year: 2020,
    price: 95,
    image: chevroletImpala,
    kilometrage: 5000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 11,
  make: 'Lexus',
  model: 'ES',
  year: 2021,
  price: 110,
  image: lexusES,
  kilometrage: 43000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 12,
  make: 'Subaru',
  model: 'Outback',
  year: 2022,
  price: 90,
  image: subaruOutback,
  kilometrage: 87000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 13,
  make: 'Mazda',
  model: 'CX-5',
  year: 2020,
  price: 100,
  image: mazdaCX5,
  kilometrage: 35000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 14,
  make: 'Kia',
  model: 'Soul',
  year: 2021,
  price: 80,
  image: kiaSoul,
  kilometrage: 95000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 15,
  make: 'Jeep',
  model: 'Wrangler',
  year: 2022,
  price: 120,
  image: jeepWrangler,
  kilometrage: 26000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 16,
  make: 'Fiat',
  model: '500',
  year: 2020,
  price: 90,
  image: fiat500,
  kilometrage: 76000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 17,
  make: 'Peugeot',
  model: '308',
  year: 2021,
  price: 85,
  image: peugeot308,
  kilometrage: 45000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 18,
  make: 'Renault',
  model: 'Clio',
  year: 2022,
  price: 95,
  image: renaultClio,
  kilometrage: 23000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 19,
  make: 'Opel',
  model: 'Corsa',
  year: 2020,
  price: 80,
  image: opelCorsa,
  kilometrage: 55000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
  id: 20,
  make: 'Seat',
  model: 'Leon',
  year: 2021,
  price: 100,
  image: seatLeon,
  kilometrage: 85000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
},
{
    id: 21,
    make: 'Audi',
    model: 'A4',
    year: 2021,
    price: 80,
    image: audiA4,
    kilometrage: 87000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 22,
    make: 'Peugeot',
    model: '1007',
    year: 2020,
    price: 75,
    image: peugeot1007,
    kilometrage: 96000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 23,
    make: 'Mercedes',
    model: 'AMG A45',
    year: 2021,
    price: 150,
    image: mercedesAMGA45,
    kilometrage: 3000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  },
  {
    id: 24,
    make: 'Bentley',
    model: 'Continental',
    year: 2022,
    price: 300,
    image: bentleyContinental,
    kilometrage: 2000,
    etat: 'Disponible',
    ville: 'Montpellier',
    pays: 'France'
  }
  
];










const Vehicule = () => {
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetch('https://rent-a-car-gie0.onrender.com/api/vehicules')
      .then(response => response.json())
      .then(data => setVehicles(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="vehicle-container">
      <h2>Catalogue de véhicules</h2>
      <div className="menu-container">
        <Link to="/">Accueil</Link>
        <Link to="/aboutPage">À Propos</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <div className="vehicle-list">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="vehicle-card">
            <Link to={`/description/${vehicle.id}`}>
              <img src={vehicle.image} alt={vehicle.make + ' ' + vehicle.model} />
            </Link>
            <h3>{vehicle.make}</h3>
            <p>{vehicle.model}</p>
            <p>Année : {vehicle.year}</p>
            <p>Prix par jour : {vehicle.price} €</p>
            <p>Kilométrage : {vehicle.kilometrage}</p>
            <p>État : {vehicle.etat}</p>
            <p>Localisation : {vehicle.ville}, {vehicle.pays}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vehicule;


