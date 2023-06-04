/*import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Either register a new user or log in an existing user
    try {
      let response;
      if (isRegistering) {
        response = await axios.post('http://localhost:3000/api/clients/', {
          email: username,
          mot_de_passe: password,
        });
      } else {
        response = await axios.post('http://localhost:3000/api/clients/login', {
          email: username,
          password: password,
        });
      }

      // Handle the response data as needed, e.g., store user data, set authentication tokens, etc.
      const userData = response.data;

      // The response data should include a JWT if the login was successful
      if (userData.token) {
        // Store the token in local storage or in a cookie
        localStorage.setItem('token', userData.token);

        // Close the modal after login
        onClose();

        navigate('/compte');
      } else {
        // Handle login failure, e.g., show a message to the user
        console.error('Login failed');
      }
    } catch (error) {
      // Handle the error as needed, e.g., show a message to the user
      console.error(error);
    }

    // Clear form fields
    setUsername('');
    setPassword('');
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="login-container">
      <button className="close-btn" onClick={onClose}>
        <span>&times;</span>
      </button>
      <h2>{isRegistering ? 'Inscription' : 'Connexion'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isRegistering ? "S'inscrire" : 'Se connecter'}</button>
      </form>
      <p onClick={handleToggleRegister}>
        {isRegistering
          ? 'Vous avez déjà un compte ? Connectez-vous ici.'
          : "Pas encore de compte ? Inscrivez-vous ici."}
      </p>
    </div>
  );
};

export default Login;
*/

import React, { useState } from 'react';
import './login.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ onClose }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistering, setIsRegistering] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Either register a new user or log in an existing user
    try {
      let response;
      if (isRegistering) {
        response = await axios.post('http://localhost:3000/api/clients/', {
          email: username,
          mot_de_passe: password,
        });
      } else {
        response = await axios.post('http://localhost:3000/api/clients/login', {
          email: username,
          password: password,
        });
      }

      // Handle the response data as needed, e.g., store user data, set authentication tokens, etc.
      const userData = response.data;

      // The response data should include a JWT if the login was successful
      if (userData.token) {
        // Store the token in local storage or in a cookie
        localStorage.setItem('token', userData.token);
        localStorage.setItem('email', username); // assuming the 'username' is the email
        localStorage.setItem('id', userData.id);
        localStorage.setItem('role', userData.role);

        // Close the modal after login
        onClose();

          // If the user is an admin, navigate to the admin page
          if (userData.role === 'admin') {
            navigate('/admin');
          } else {
            navigate('/compte');
          }
      } else {
        // Handle login failure, e.g., show a message to the user
        console.error('Login failed');
      }
    } catch (error) {
      // Handle the error as needed, e.g., show a message to the user
      console.error(error);
    }

    // Clear form fields
    setUsername('');
    setPassword('');
  };

  const handleToggleRegister = () => {
    setIsRegistering(!isRegistering);
  };

  return (
    <div className="login-container">
      <button className="close-btn" onClick={onClose}>
        <span>&times;</span>
      </button>
      <h2>{isRegistering ? 'Inscription' : 'Connexion'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Nom d'utilisateur</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">{isRegistering ? "S'inscrire" : 'Se connecter'}</button>
      </form>
      <p onClick={handleToggleRegister}>
        {isRegistering
          ? 'Vous avez déjà un compte ? Connectez-vous ici.'
          : "Pas encore de compte ? Inscrivez-vous ici."}
      </p>
    </div>
  );
};

export default Login;
