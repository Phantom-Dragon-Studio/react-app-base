import logo from './logo.svg';
import './App.css';
import Home from './views/Home/Home';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
      </header>

      <div>
        <img src={logo} className="App-logo" alt="logo" />
        <Home />
      </div>
    </div>
  );
}

export default App;
