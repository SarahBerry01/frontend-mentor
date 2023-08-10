import './App.css';
import Breakdown from './Breakdown';
import React, { useState } from 'react';


function Usermenu() {
  const [selectedButton, setSelectedButton] = useState('daily');

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    console.log(selectedButton)

  };
  return (
    <div className="userMenu">
      <div className="userCard">
        <div className="profileBorder"><img className="profileImg" src={require("./images/image-jeremy.png")} alt="profile" /></div>
        <p> Report for</p>
        <h1> Jeremy Robson</h1>
      </div>
      <div className="timeFrame">
        <button className={` ${selectedButton === 'daily' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('daily')}>Daily</button>
        <button className={` ${selectedButton === 'weekly' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('weekly')}>Weekly</button>
        <button className={` ${selectedButton === 'monthly' ? 'selected' : ''}`}
          onClick={() => handleButtonClick('monthly')}>Monthly</button>
      </div>

    </div>
  );
}

function App() {
  return (
    <div className="App">
      <div className="body">
        <Usermenu />
        <Breakdown />
      </div>
      <div className="attribution">
        Challenge by <a href="https://www.frontendmentor.io?ref=challenge">Frontend Mentor</a>.
        Coded by Sarah Berry.
      </div>
    </div >
  );
}

export default App;
