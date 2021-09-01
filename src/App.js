import React from 'react'
import './App.css'
import Header from './Components/Header/Header.js'
import Navbar from './Components/Navbar/Navbar.js'
import CardExampleCard from "./Components/Cards/Cards";
import Img1 from './Img/capuchino.jpg';
import Img2 from './Img/tortabalcarce.jpg';
import Img3 from './Img/dulcedeleche.jpg';
import Img4 from './Img/frutasalacrema.jpg';
import Img5 from './Img/doscucuruchos.jpg';
// views
import Home from './views/Home/Home';
import Nosotros from './views/Nosotros/Nosotros';
import Contacto from './views/Contacto/Contacto';
import Tienda from "./views/Tienda/Tienda";

// React Router Dom
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// import Footer from './Components/Footer/Footer' 


const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/nosotros" component={Nosotros} />
          <Route path="/contacto" component={Contacto} />
          <Route path="/tienda" component={Tienda} />
        </Switch>

        <Header />
        <CardExampleCard
          img={Img1}
          name="Cafe/Capuchino"
          price="$200"
          description="Descripcion del sabor/producto"
        />
        <CardExampleCard
          img={Img2}
          name="Porcion de torta"
          price="$300"
          description="Descripcion del sabor/producto"
        />
        <CardExampleCard
          img={Img3}
          name="1/4 Kilo de Helado"
          price="$450"
          description="Descripcion del sabor/producto"
        />
        <CardExampleCard
          img={Img4}
          name="1/2 Kilo de Helado"
          price="$700"
          description="Descripcion del sabor/producto"
        />
        <CardExampleCard
          img={Img5}
          name="1 Kilo de Helado"
          price="$1300"
          description="Descripcion del sabor/producto"
        />
      </div>
    </Router>
  );
}
   
export default App;


