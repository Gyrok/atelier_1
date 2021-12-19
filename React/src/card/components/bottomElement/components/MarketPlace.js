import React, {useState} from 'react';
import { Grid, Segment } from 'semantic-ui-react';
import {CardList} from '../../cardList/CardList';
import {CardDetail} from '../../card/CardDetailed';


export const MarketPlace=(props)=>{
    
    let [activeCard, setActiveCard] = useState("");
    
    function updateActiveCard(newCard){
        setActiveCard(newCard);
    }

    return (
        <Segment>
            
            <Grid divided='vertically'>
                <Grid.Row columns={2}>

                    <Grid.Column>
                        <CardList updateActiveCard={updateActiveCard} cardList={props.cardList} />
                    </Grid.Column>

                    <Grid.Column>
                        <CardDetail activeCard={activeCard}/>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>
        </Segment>
    )
}
