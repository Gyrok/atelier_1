import React from 'react';
import { TableBody, Table, Grid } from 'semantic-ui-react';

import { CardLineItem } from './components/CardLineItem';
import { CardDetail } from './components/CardDetail';

export class MarketPlace extends React.Component {
    constructor(props) {
        super(props);
        this.state = {marketState : props.stateMarket,
                    currentCard : "",
                    cardsLoad : false
                };
        
        this.handleOnCardSelected=this.handleOnCardSelected.bind(this);
        this.listeIDCards=props.cardsID;
        this.cardsList=[];
        this.display_list2 = [];

      }

      handleOnCardSelected= (card) =>{
            this.setState({currentCard : card});
      } 

      
    
    getCardsRender(){
        let array_render=[];
        
        for(var i=0;i<this.props.cards.Cards.length ;i++){
            console.log(this.props.cards.Cards[i])
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


    getCardsRender2(){
        let array_render=[];
        for(var i=0;i<this.cardsList.length ;i++){
            console.log(this.cardsList[i])
            array_render.push(
                
                <CardLineItem
                key={i} 
                card={this.cardsList[i]}
                onClickHandler={this.handleOnCardSelected}
                />
                );
        }
        return array_render;
    }

    createButton(){
        let array_render=[];
        array_render.push(
            <input type="button" value="Show Cards" ></input>
        )
                
        return array_render;
    }
    /******** cards backend *******/
    recup_card(ID){
        console.log("ID",ID);
        fetch('http://localhost:8082/card/'+ID,{ method: 'GET'})
        .then(response => response.json() )
        .then(responseData => {
            console.log("reponseData",responseData);
            this.cardsList.push(responseData);
        })
        .catch(function () {
          console.log("error");
        })
        //return responseData;
    }



    async getCards(){
        console.log("Bonsoir",this.listeIDCards)
        for(var i=0;i<this.listeIDCards.length;i++){
               await this.recup_card(this.listeIDCards[i]);
        }
    }

    display_list = this.getCardsRender(); 

    
    
    render() {  
        
        if (!this.state.cardsLoad){

        
            this.getCards();
            console.log("coucou")
            console.log("cardList",this.cardsList);
            this.display_list2= this.createButton();
            this.setState({cardsLoad : true});
        }
        else {
            this.display_list2 = this.getCardsRender2();
            //this.setState({display_list2:this.getCardsRender2()});
            for(var i=0;i<this.cardsList.length;i++){
                console.log("arrayPrint",this.cardsList[i].name);
            }
        }
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
                            <Table.HeaderCell>Affinity</Table.HeaderCell>
                            <Table.HeaderCell>Energy</Table.HeaderCell>
                            <Table.HeaderCell>HP</Table.HeaderCell>
                            <Table.HeaderCell>Price</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <TableBody>   
                        {this.display_list2}
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