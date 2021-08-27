import './Cards.css'
import React from "react";
import { Button, Card, Image, Description } from "semantic-ui-react";


const CardExampleGroups = ({ name, img, description }) => {
  return (
    <Card.Group>
      <Card>
        <Card.Content>
          <Image
            floated='right'
            size='mini'
            src={img}
          />
          <Card.Header>{name}</Card.Header>
          <Card.Description>
            {description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>
              Comprar
            </Button>
            <Button basic color='red'>
              Borrar
            </Button>
          </div>
        </Card.Content>
      </Card>
  
    </Card.Group>
  )
}

export default CardExampleGroups;




