import React from 'react';
import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar/Navbar';
import CallToAction from './components/CallToAction/CallToAction';
import FourColumnFooterWithNewsAndLocalization from './components/Footers/FourColumnFooterWithNewsAndLocalization';
// import BottomBanner from './components/Banners/BottomBanner';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CallToAction />
      <header className="App-header">
        <Home />
      </header>
      <FourColumnFooterWithNewsAndLocalization />
      {/* <BottomBanner /> */}
    </div>
  );
}

export default App;
