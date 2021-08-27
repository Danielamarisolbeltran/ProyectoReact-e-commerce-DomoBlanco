import React from 'react'
import './App.css'
import Header from './Components/Header/Header.js'
import Navbar from './Components/Navbar/Navbar.js'
import CardExampleGroups from "./Components/Cards/Cards";
// import Footer from './Components/Footer/Footer' 


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <CardExampleGroups />
      
      <div className="divCards">
        <CardExampleGroups
          className="cards"
          name="Producto 1"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 2"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 3"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 4"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
        <CardExampleGroups
          className="cards"
          name="Producto 5"
          img="Imagen del producto"
          price="Precio$"
          description="Descripcion del producto"
        />
      </div>
    </div>
  );
}
   
export default App;


