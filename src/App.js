// import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://c8.alamy.com/compes/2bpx36k/tienda-de-helados-vector-de-senal-de-neon-ice-cream-shop-cartel-de-neon-sobre-fondo-de-pared-de-ladrillo-elemento-de-diseno-banner-de-luz-anuncio-de-neon-nig-2bpx36k.jpg"} className="App-logo" alt="logo"  />
        <p>
          {/* Edit <code>src/App.js</code> and save to reload. */
          <h1>Bienvenidos a Domo Blanco Helados</h1> }
        </p>
              
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>

       <img
          src={
            "https://us.123rf.com/450wm/alexraths/alexraths1909/alexraths190900006/129613115-varias-variedades-de-helado-en-conos-con-menta-ar%C3%A1ndano-fresa-pistacho-cereza-y-chocolate-aislado-so.jpg?ver=6"} alt="imagen helados"
        />
    </div>
  );
}


export default App;
