import React from 'react';
import './assets/css/App.css';
import SousComponent from './components/SousComponent';
import Title from './components/Title';
import Logo from './components/Logo';
import Histoire from './components/Histoire';
import wording from './wording.json';

function App() {
  return (
    <div className="App">
      <div className='App-header'>
        <Logo />
        <SousComponent text="Какого цвета яблоко ?" />
        <Histoire image={wording.histoire1.image} text={wording.histoire1.text} phase={"1"} />
      </div>
      
    </div>
  );
}

export default App;
