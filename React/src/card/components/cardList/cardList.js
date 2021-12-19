import React from 'react';
import { Grid, Segment } from 'semantic-ui-react';


export const CardList=(props)=>{

    let CardsName=""
    console.log("listCards_cardlist",props.cards);
    for (var i=0;i<props.cards.length;i++){
        CardsName=props.cards[i].name;
        console.log("CardName_cardList",CardsName);
        
    }

    return (
        <Segment>OUI
            
            {CardsName}
        </Segment>
    )
}