// import { PROPERTY_TYPES } from "@babel/types";
import React, { useState, createContext } from "react";

// Se crea context 
export const ItemsContext = createContext();

// Se crea componente provider
// state que pasamos al useState
const initialState = [
  { id: 1, name: "Cafe/Capuchino", price: 200},
  { id: 2, name: "Porcion de torta", price: 300 },
  { id: 3, name: "Vasito de helado", price: 300 },
  { id: 4, name: "Cucurucho" , price: 400 },
  { id: 5, name: "Pote de 1/4 kg de helado" , price: 500},
  { id: 6, name: "Pote de 1/2 kg de helado", price: 850},
  { id: 7, name: "Pote de 1 kg de helado", price: 1400 },
];

// pasamos props dentro del componente provider
export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(initialState);

  // return de nuestro context con un .provider
  // pasar props.children
  return (
    <ItemsContext.Provider value={{items, setItems}}>
      {children} 
    </ItemsContext.Provider>
  )
};
    
    
    
    