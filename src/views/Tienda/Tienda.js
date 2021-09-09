import React, { useContext } from 'react'
import { ItemsContext } from '../../Components/ItemsContext';
import { Button, Image } from "semantic-ui-react"
import CardExampleCard from '../../Components/Cards/Cards';


const Tienda = ({ img, name, price, description }) => {
    const [items, setItems] = useContext(ItemsContext);
    return (
      <div className="divCards">
        <nav>
          <p>Items:{items}</p>  
        </nav>
      <buttton onClick={setItems}>Modificar</buttton>

        <h1>Tienda online de pedidos</h1>
        <CardExampleCard className="cards">
          <Image src={img} />
          <CardExampleCard.Content>
            <CardExampleCard.Header>{name}</CardExampleCard.Header>
            <CardExampleCard.Meta>
              <span className="date">{price}</span>
            </CardExampleCard.Meta>
            <CardExampleCard.Description>{description}</CardExampleCard.Description>
          </CardExampleCard.Content>
          <CardExampleCard.Content extra>
            <div>
              <Button primary onClick={setItems}>Agregar</Button>
              <Button secondary onClick={setItems}>Borrrar</Button>
            </div>
          </CardExampleCard.Content>
        </CardExampleCard>
      </div>
    );
};

export default Tienda;

 






























