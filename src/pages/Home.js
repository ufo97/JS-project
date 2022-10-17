import React from 'react';
import '../assets/css/App.css';

import SousComponent from '../components/SousComponent';
import Title from '../components/Title';
import Logo from '../components/Logo';
import Histoire from '../components/Histoire';
import wording from '../wording.json';

const Home = () => {
  return (
    <div className="App">
    <div className='App-header'>
        <Logo />
        <Title text={wording.histoire1.text} />
        <SousComponent text="Какого цвета яблоко ?" />
        <Histoire image={wording.histoire1.image} text={wording.histoire1.text} />
    </div>
    
  </div>
  );
}

export default Home;
