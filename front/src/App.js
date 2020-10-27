import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const onclick = () => {
      alert("clicked!")
  }
  
  return (
    <div className="App">
      <h3>sample</h3>
      <button onclick={onclick}>test</button>
    </div>
  );
}

export default App;
