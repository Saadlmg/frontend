import axios from 'axios';
import { vehicles } from './vehicule.js';

const addVehiclesToDatabase = async () => {
  try {
    // Make an HTTP POST request to add vehicles to the database
    for (const vehicle of vehicles) {
      await axios.post('http://localhost:3000/api/vehicles', vehicle);
    }
    console.log('Vehicles added to the database successfully!');
  } catch (error) {
    console.error('Error adding vehicles to the database:', error);
  }
};

addVehiclesToDatabase();
