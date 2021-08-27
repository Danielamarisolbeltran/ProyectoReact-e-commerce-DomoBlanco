import './Cards.css'
import React from "react";
import { Card, Button, Image } from "semantic-ui-react";

const CardExampleCard = ({ img, name, price, description }) => (
  <div className="divCards">
    <Card className="cards">
      <Image src={img} />
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <Card.Meta>
          <span className="date">{price}</span>
        </Card.Meta>
        <Card.Description>{description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div>
            <Button primary>Agregar</Button>
            <Button secondary>Borrrar</Button>
          </div>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;
