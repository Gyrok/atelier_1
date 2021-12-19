import React, {useState} from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import {CardList} from '../../cardList/cardList';
import {CardDetail} from '../../card/CardDetailed';


export const MarketPlace=(props)=>{
    
    let [activeCard, setActiveCard] = useState("");
    
    function updateActiveCard(newCard){
        setActiveCard(newCard);
    }

    
    function handleBuy(){
        setActiveCard("");
        console.log("Showcards")
    }

    console.log("CARDS",props.cardsList);
    return (
        <Segment>
            
            <Grid divided='vertically'>
                <Grid.Row columns={2}>

                    <Grid.Column>
                        <CardList updateActiveCard={updateActiveCard} cards={props.cardsList} />
                    </Grid.Column>

                    <Grid.Column>
                        <CardDetail activeCard={activeCard}/>
                        <input type="button" value="ShowCards" onClick={handleBuy}></input>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
