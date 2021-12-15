import React from 'react'
import { Table } from 'semantic-ui-react'



export const CardLineItem = (props) => {
    var color = "white";
    function onClickHandler(){
      color = "blue";
      props.onClickHandler(props.card);
    }
    return(
      <Table.Row onClick={onClickHandler} color={color}>
        <Table.Cell>{props.card.name}</Table.Cell>
        <Table.Cell>{props.card.description}</Table.Cell>
        <Table.Cell>{props.card.family}</Table.Cell>
        <Table.Cell>{props.card.affinity}</Table.Cell>
        <Table.Cell>{props.card.energy}</Table.Cell>
        <Table.Cell>{props.card.hp}</Table.Cell>
        <Table.Cell>{props.card.price}</Table.Cell>
      </Table.Row>
    );
}
