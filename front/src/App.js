import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onClick = () => {
      alert("clicked!");
  };
  
  return (
    <div className="App">
      <h3>sample</h3>
      <button onClick={onClick}>test</button>
    </div>
  );
}

export default App;
