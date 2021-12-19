import React from 'react';
import {MarketPlace} from "./components/MarketPlace";
import {Account} from"./components/Account";


export const BottomElement=(props) =>{    
    
    const user=props.user;

    function updateShop(shopType, shopPhrase){
        props.updateShop(shopType,shopPhrase);
    }

    function recup_cardSell(ID){
        console.log("ID",ID);
        var responseData =  fetch('http://localhost:8082/card/'+ID,{ method: 'GET'})
        
        .catch(function () {
          console.log("error");
        })

        return responseData;
    }

    async function getCardsToSell(){
        var cardsToSell = []
        console.log("cardsList",user.cardList);
        for(var i=0;i<user.cardList.length;i++){
            //const card = await recup_cardSell(props.user.cardList[i]);
            
            var card =  await fetch('http://localhost:8082/card/'+props.user.cardList[i],{ method: 'GET'})
            cardsToSell.push(card);
            console.log("Card_BottomE",card);
        }
        console.log("Cardtosell_Bottom",cardsToSell);
        return cardsToSell;
    }


    async function getCardsToBuy(){
        var cardsToBuy = [];
        //await recup_cardSell(props.user.cardList[i])
        //cardsToSell.push();
        return cardsToBuy;
    }
    
    
    let cardsToBuy = [];
    getCardsToBuy();
    let cardsToSell = getCardsToSell();
    

    switch (props.shopType) {  
          
        case 'BUY' :
            //let cardsToBuy = getCardsToBuy();
            return ( 
                    <MarketPlace stateMarket={props.shopType} cardsList={cardsToBuy}/>
                );
        case 'SELL':
            //let cardsToSell = getCardsToSell();
            return ( 
                    <MarketPlace stateMarket={props.shopType} cardsList={cardsToSell}/>

                );

        default:
            return ( 
                    <Account updateShop={updateShop}/>
                );
    }      
}

