import React from 'react'
import { Card, Image, Icon, TableBody, Table, Grid } from 'semantic-ui-react';



export const CardDetail = (props) => {
    const marketState = props.marketState;

    function handleClick(){

    }
    
    return (
    <Card>
        <Image src={props.card.img} wrapped ui={false} />
        <Card.Content>
        <Card.Header>{props.card.name}</Card.Header>
        <Card.Meta>
           HP: {props.card.hp}
        </Card.Meta>
        <Card.Description>
           {props.card.description}
        </Card.Description>
        </Card.Content>
        <Card.Content extra>
        <a>
            Price : {props.card.price}
        </a>
        </Card.Content>
        <Card.Content extra>
        <input type="button" value={marketState} onClick={handleClick}></input>
        </Card.Content>
    </Card>
    )
}