/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the user is logged in and is an admin
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('https://rent-a-car-gie0.onrender.com/api/admin', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((response) => {
          setUsers(response.data.users);
        })
        .catch((error) => {
          console.error(error);
          navigate('/login');
        });
    } else {
      navigate('/login');
    }
  }, [navigate]);

  return (
    <div>
      <h2>Administration</h2>
      {users.map((user, index) => (
        <div key={index}>
          <p>Nom d'utilisateur : {user.username}</p>
          <p>Email : {user.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Admin;
*/

/*import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './admin.css';

const AdminPanel = () => {
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    nom: '',
    prenom: '',
    email: '',
    mot_de_passe: ''
  });

  // Charger la liste des admins au chargement de la page
  useEffect(() => {
    fetchAdmins();
  }, []);

  // Fonction pour récupérer la liste des admins
  const fetchAdmins = async () => {
    try {
      const response = await axios.get('https://rent-a-car-gie0.onrender.com/api/admins'); // Modifier l'URL de l'API si nécessaire
      setAdmins(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Fonction pour créer un nouvel admin
  const createAdmin = async () => {
    try {
      const response = await axios.post('https://rent-a-car-gie0.onrender.com/api/admins', newAdmin); // Modifier l'URL de l'API si nécessaire
      setAdmins([...admins, response.data]);
      setNewAdmin({
        nom: '',
        prenom: '',
        email: '',
        mot_de_passe: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Fonction pour supprimer un admin
  const deleteAdmin = async (adminId) => {
    try {
      await axios.delete(`https://rent-a-car-gie0.onrender.com/api/admins/${adminId}`); // Modifier l'URL de l'API si nécessaire
      setAdmins(admins.filter((admin) => admin.id !== adminId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Panel d'administration</h2>

      <h3>Ajouter un nouvel admin</h3>
      <input
        type="text"
        placeholder="Nom"
        value={newAdmin.nom}
        onChange={(e) => setNewAdmin({ ...newAdmin, nom: e.target.value })}
      />
      <input
        type="text"
        placeholder="Prénom"
        value={newAdmin.prenom}
        onChange={(e) => setNewAdmin({ ...newAdmin, prenom: e.target.value })}
      />
      <input
        type="email"
        placeholder="Email"
        value={newAdmin.email}
        onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={newAdmin.mot_de_passe}
        onChange={(e) => setNewAdmin({ ...newAdmin, mot_de_passe: e.target.value })}
      />
      <button onClick={createAdmin}>Créer</button>

      <h3>Liste des admins</h3>
      {admins.map((admin) => (
        <div key={admin.id}>
          <p>{admin.nom} {admin.prenom}</p>
          <p>Email: {admin.email}</p>
          <button onClick={() => deleteAdmin(admin.id)}>Supprimer</button>
        </div>
      ))}
    </div>
  );
};

export default AdminPanel;
*/

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'
import './admin.css';

const AdminPanel = () => {
  const [clients, setClients] = useState([]);
  const [locations, setLocations] = useState([]);
  const [admins, setAdmins] = useState([]);
  const [newAdmin, setNewAdmin] = useState({
    nom: '',
    prenom: '',
    email: '',
    mot_de_passe: ''
  });
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 
  const token = localStorage.getItem('token');
  // Charger la liste des admins au chargement de la page
  useEffect(() => {
    // Retrieve the role from local storage
    
    const email = localStorage.getItem('email');
    const role = localStorage.getItem('role');

    // If the user is not an admin, navigate to the home page
    if (role !== 'admin') {
      navigate('/');
    }

    fetchAdmins();
    fetchClients();
    fetchLocations();
  }, []);


  const fetchLocations = async () => {
    try {
      const response = await axios.get('https://rent-a-car-gie0.onrender.com/api/locations', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLocations(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteLocation = async (locationId) => {
    try {
      await axios.delete(`https://rent-a-car-gie0.onrender.com/api/locations/${locationId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setLocations(locations.filter((location) => location.id !== locationId));
    } catch (error) {
      console.error(error);
    }
  };

  // Fonction pour récupérer la liste des admins
  const fetchAdmins = async () => {
    try {
      const response = await axios.get('https://rent-a-car-gie0.onrender.com/api/admins', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAdmins(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchClients = async () => {
    try {
      const response = await axios.get('https://rent-a-car-gie0.onrender.com/api/clients', {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClients(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteClient = async (clientId) => {
    try {
      await axios.delete(`https://rent-a-car-gie0.onrender.com/api/clients/${clientId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setClients(clients.filter((client) => client.id !== clientId));
    } catch (error) {
      console.error(error);
    }
  };

  // Fonction pour créer un nouvel admin
  const createAdmin = async () => {
    try {
      const response = await axios.post('https://rent-a-car-gie0.onrender.com/api/admins', newAdmin, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAdmins([...admins, response.data]);
      setNewAdmin({
        nom: '',
        prenom: '',
        email: '',
        mot_de_passe: ''
      });
    } catch (error) {
      console.error(error);
    }
  };

  // Fonction pour supprimer un admin
  const deleteAdmin = async (adminId) => {
    try {
      await axios.delete(`https://rent-a-car-gie0.onrender.com/api/admins/${adminId}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAdmins(admins.filter((admin) => admin.id !== adminId));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Panel d'administration</h2>

      {token ? (
        <>
          {/* Formulaire de création d'un nouvel admin */}
          <h3>Ajouter un nouvel admin</h3>
          <input
            type="text"
            placeholder="Nom"
            value={newAdmin.nom}
            onChange={(e) => setNewAdmin({ ...newAdmin, nom: e.target.value })}
          />
          <input
            type="text"
            placeholder="Prénom"
            value={newAdmin.prenom}
            onChange={(e) => setNewAdmin({ ...newAdmin, prenom: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            value={newAdmin.email}
            onChange={(e) => setNewAdmin({ ...newAdmin, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Mot de passe"
            value={newAdmin.mot_de_passe}
            onChange={(e) =>
              setNewAdmin({ ...newAdmin, mot_de_passe: e.target.value })
            }
          />
          <button onClick={createAdmin}>Créer</button>

          {/* Liste des admins */}
          <h3>Liste des admins</h3>
          {admins.map((admin) => (
            <div key={admin.id}>
              <p>
                {admin.nom} {admin.prenom}
              </p>
              <p>Email: {admin.email}</p>
              <button onClick={() => deleteAdmin(admin.id)}>Supprimer</button>
            </div>
          

          ))}
        
        
        </>
      ) : null}

{token ? (
        <>
          <h3>Liste des clients</h3>
          {clients.map((client) => (
            <div key={client.id}>
              <p>
                {client.nom} {client.prenom} - {client.email}
              </p>
              <button onClick={() => deleteClient(client.id)}>Supprimer</button>
              <Link to={`/edit-client/${client.id}`}>Modifier</Link>
            </div>
          ))}
        </>
      ) : null}
    
    {token ? (
        <>
          <h3>Liste des locations</h3>
          {locations.map((location) => (
            <div key={location.id}>
              <p>ID: {location.id}</p>
              <p>Date début: {new Date(location.date_debut).toLocaleDateString()}</p>
              <p>Date fin: {new Date(location.date_fin).toLocaleDateString()}</p>
              <p>Coût total: {location.cout_total}</p>
              <p>Véhicule ID: {location.vehicule_id}</p>
              <p>Client ID: {location.client_id}</p>
              <button onClick={() => deleteLocation(location.id)}>Supprimer</button>
              <Link to={`/edit-location/${location.id}`}>Modifier</Link>
            </div>
          ))}
        </>
      ) : null}
    
    </div>
  );
};

export default AdminPanel;
