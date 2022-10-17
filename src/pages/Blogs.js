import React, { useState } from 'react';

import Logo from '../components/Logo';
import Popup from '../components/Popup';

const Blogs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
    return (
    <>
    <div>
      <Logo />
      <h1>Vous êtes en SAGI?</h1>
      <h2>Enigme Hub est un site réalisé par des étudiants de SAGI comme projet HTML 5.</h2>
      
      <button onClick={togglePopup}>J'ai 18 ans ou plus - Entrer</button> 
    
      {isOpen && <Popup
        content={<>
          <b>Règles du jeu</b>
          <p>Les règles sont simple. Résoudre les énigmes. Tout au long de l'aventure sur ce site, des énigmes vont vous permettre d'avancer. </p>
          <p>En résoudre le plus possible pour aller le plus loin possible, tel sont les règles</p>
          <a href='../home'>Cliquez ici pour continuer</a>
        </>}
        handleClose={togglePopup}
      />}
    </div>
    </>
    )
  };
  
  export default Blogs;
  