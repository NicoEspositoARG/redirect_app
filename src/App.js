import React, {useState, useEffect} from 'react';
import logo from './working.png';
import './App.css';


function App() {
  const [counter, setCounter] = useState(5)
  useEffect(() => {
    if (counter > 0) {
    setTimeout(() => {
      setCounter(prevState => prevState-1);
    }, 1000)}
    else {
      window.location.replace('http://onsainventory.fibercorp.com.ar')
    };
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Serás redirigido a la nueva ubicación en.. {counter > 0 && counter}
        </p>
          {/* <p>{counter > 0 && counter}</p> */}
        <a
          className="App-link"
          href="http://onsainventory.fibercorp.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          ONSA Inventory
        </a>
      </header>
    </div>
  );
}

export default App;
