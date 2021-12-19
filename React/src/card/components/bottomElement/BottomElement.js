import React from 'react';
import {MarketPlace} from "./components/MarketPlace";
import {Account} from"./components/Account";


export const BottomElement=(props) =>{    

    function updateShop(shopType, shopPhrase){
        props.updateShop(shopType,shopPhrase);
    }

    async function getCardsToBuy(){
        await fetch();

        return cardsToBuy;
    }


    async function getCardsToSell(){
        await fetch();
            
        return cardsToSell;
    }
    switch (props.shopType) {  
          
        case 'BUY' :
            let cardsToBuy = getCardsToBuy();
            return ( 
                    <MarketPlace stateMarket={props.shopType} cardsToBuy={cardsToBuy}/>
                );
        case 'SELL':
            let cardsToSell = getCardsToSell();
            return ( 
                    <MarketPlace stateMarket={props.shopType} cardsToSell={cardsToSell}/>
                );

        default:
            return ( 
                    <Account updateShop={updateShop}/>
                );
    }      
}

