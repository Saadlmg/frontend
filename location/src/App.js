//import logo from './logo.svg';
/*import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import './login.css';
import HomePage from './homePage.js';
import Login from './login';


function App() {
  return (
    <div>
      <Login/>
    </div>
  );
}

export default App;
*/

/*import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './homePage.css';
import './login.css';
import HomePage from './homePage.js';
import Login from './login.js';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

*/

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { useState } from 'react';
import './homePage.css';
import './login.css';
import './contact.css';
import './aboutPage.css';
import './vehicule.css';
import './description.css';
import './location.css';
import './paiement.css';
import './compte.css';
import './admin.css';
import './mesReservation.css';
import HomePage from './homePage.js';
import Login from './login.js';
import Contact from './contact.js'
import AboutPage from './aboutPage.js';
import Vehicule from './vehicule.js';
import Description from './description.js';
import Location from './location.js';
import Paiement from './paiement.js';
import Compte from './compte';
import kstart from './kstart.js';
import Admin from './admin.js';
import MesReservation from './mesReservation.js';

function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeLoginModal = () => {
    setIsLoginModalOpen(false);
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage openLoginModal={openLoginModal} />} />
          <Route path="/login" element={<Login closeLoginModal={closeLoginModal} />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutPage" element={<AboutPage />} />
          <Route path="/vehicule" element={<Vehicule />} />
          <Route path="/description/:id" element={<Description />} />
          <Route path="/location/:id" element={<Location />} />
          <Route path="/paiement/:id" element={<Paiement />} />
          <Route path="/compte" element={< Compte />} />
          <Route path="/kstart" element={< kstart />} />
          <Route path="/admin" element={< Admin />} />
          <Route path="/mesReservation" element={< MesReservation />} />
        </Routes>
        {isLoginModalOpen && (
          <div className="login-modal">
            <Login closeLoginModal={closeLoginModal} />
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
