import React from 'react';
import { TableBody, Table, Grid } from 'semantic-ui-react';

import { CardLineItem } from './components/CardLineItem';
import { CardDetail } from './components/CardDetail';

export class MarketPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {marketState : props.stateMarket,
                    currentCard : ""};
        this.cardID_liste=this.getCards();
        this.handleOnCardSelected=this.handleOnCardSelected.bind(this);

      }

      handleOnCardSelected= (card) =>{
            this.setState({currentCard : card});
      } 

      getCardsRender(){
        let array_render=[];
        
        for(var i=0;i<this.props.cards.Cards.length;i++){
            
            array_render.push(
                
                <CardLineItem
                   key={i}
                   
                   card={this.props.cards.Cards[i]}
                   onClickHandler={this.handleOnCardSelected}
                   
                />
                );
        }
        return array_render;
    }

    recup_card(cardID){
        fetch('http://localhost:8082/card/'+cardID,{ method: 'GET'})
        .then(response => response.json() )
        .then(responseData => {
          
          console.log("id",responseData.id);
          
          //this.user=response;
          return responseData;
        })
        .catch(function () {
          console.log("error");
        });
    }

    getCards(){
        let cardList=[];
        console.log(this.props.cardsID)
        for(var i=0;i<this.props.cardsID.length;i++){
            
            cardList.push(
                
                this.recup_card(this.props.cardsID[i])
                );
        }
        return cardList;
    }

        display_list = this.getCardsRender();
        
        

        render() {  
            console.log(this.cardID_liste)             
            return (

            <Grid divided="vertically">
                <Grid.Row columns={3}>
                <Grid.Column>
                <Table celled>

                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Family</Table.HeaderCell>
                            <Table.HeaderCell>Affinity</Table.HeaderCell>
                            <Table.HeaderCell>Energy</Table.HeaderCell>
                            <Table.HeaderCell>HP</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <TableBody>   
                        {this.display_list}
                        
                    </TableBody>

                </Table>
                </Grid.Column>
                <Grid.Column>
                <Table celled>

                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Description</Table.HeaderCell>
                                <Table.HeaderCell>Family</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <TableBody>   
                            {this.cardID}
                            
                        </TableBody>

                        </Table>
                </Grid.Column>
                <Grid.Column>
                    <CardDetail   marketState={this.state.marketState} card={this.state.currentCard} />
                </Grid.Column>
                </Grid.Row>
            </Grid>
        )

    }
}