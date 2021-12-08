import React from 'react';
import { Grid, Segment } from 'semantic-ui-react'

 

 export const Account=(props)=> {
    function handleBuy(){
       props.handleBuy()
    }
    function handleSell(){
        props.handleSell()
     }
     function handlePlay(){
        props.handlePlay()
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