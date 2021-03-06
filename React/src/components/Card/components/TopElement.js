import React from 'react';
import { Grid } from 'semantic-ui-react'

import { UserSmallDisplay } from '../../User/components/UserSmallDisplay';
export const TopElement=(props)=> {
        return ( 

            <Grid divided='vertically'>
                <Grid.Row columns={3}>

                    <Grid.Column floated='left'>
                        <div>Money: {props.User.money}</div>
                    </Grid.Column>

                    <Grid.Column>
                        <h1>{props.shopState}</h1>
                    </Grid.Column>

                    <Grid.Column floated='right'>
                        <UserSmallDisplay 
                                surname={props.User.surname}
                                name={props.User.name}
                                img={props.User.img}>
                        </UserSmallDisplay>
                    </Grid.Column>
                    
                </Grid.Row>
            </Grid>

            );
    }
