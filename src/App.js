import React from 'react'
import './App.css'
import Header from './Components/Header/Header.js'
import Navbar from './Components/Navbar/Navbar.js'

// views
import Home from './views/Home/Home';
import Nosotros from './views/Nosotros/Nosotros';
import Contacto from './views/Contacto/Contacto';
import Tienda from './views/Tienda/Tienda';


// React Router Dom (para las view en el nav, SPA)
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Import de Context.Provider
import { ItemsProvider } from './Components/ItemsContext';
import ItemsList from './Components/ItemsList';


const App = () => {
  return (
    <ItemsProvider>
      <Router>
        <div className="App">
          <Navbar />
          <Header />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/nosotros" component={Nosotros} />
            <Route path="/contacto" component={Contacto} />
            <Route path="/tienda" component={Tienda} />
          </Switch>
         
          <ItemsList/> 
        </div>
      </Router>
    </ItemsProvider> 
  );
}

export default App;



