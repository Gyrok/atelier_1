import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'

 

 export const Account=(props)=> {
    function handleBuy(){
       props.updateShop("BUY","use your money to buy cards")
    }
    function handleSell(){
        rops.updateShop("SELL","sell your cards to get money")
     }
     function handlePlay(){
        rops.updateShop("PLAY","feature available soon TM")
     }
    return ( 
        
        <Segment>
            
        <Grid divided='vertically'>
            <Grid.Row columns={3}>
            <Grid.Column>
                    <input type="button" value="Buy" onClick={handleBuy}></input>
                </Grid.Column>
                <Grid.Column>
                </Grid.Column>
                <Grid.Column>
                    <input type="button" value="Sell" onClick={handleSell}></input>
                </Grid.Column>
                
            </Grid.Row>
            <Grid.Row columns={3}>
                <Grid.Column>
                </Grid.Column>

                <Grid.Column>
                    <input type="button" value="Play" onClick={handlePlay}></input>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        </Segment>
        );
            
    }