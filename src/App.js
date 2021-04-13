import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom'
import Routes from './core/Routes/Routes';
import { IsLoggedContext } from './shared/contexts/IsLoggedContext';
import { getCookieUtil } from './shared/utils/getCookieUtil';

function App() {

  const [isLogged, setIsLogged] = useState(!!getCookieUtil('token'));

  return (
    <div className= "App">
    <IsLoggedContext.Provider value={{ isLogged, setIsLogged }}>
      <Router>
        <Routes></Routes>
    </Router>
    </IsLoggedContext.Provider>
    </div>
   
  
  
    
  );
}


export default App;
