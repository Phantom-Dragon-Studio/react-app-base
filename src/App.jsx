import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <Home />
        </div>
      </header>
    </div>
  );
}

export default App;
