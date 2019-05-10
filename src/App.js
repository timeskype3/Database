import React from 'react';
import logo from './logo.svg';
import Head from './Head.png';
import './App.css';
import Login from './Login';

function App() {
  return (
    <div className="App">
       
      <header className="App-header">
         <img src={Head} />
          <Login/>
        
      </header>
    </div>
  );
}

export default App;
