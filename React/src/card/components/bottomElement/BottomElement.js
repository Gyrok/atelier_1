import React from 'react';
import {MarketPlace} from "./components/MarketPlace";
import {Account} from"./components/Account";


export const BottomElement =(props) =>{    

    function updateShop(shopType, shopPhrase){
        props.updateShop(shopType,shopPhrase);
    }

    switch (props.shopType) {  
          
        case 'BUY' :
            return ( 

                <MarketPlace stateMarket={props.shopType} cards={props.user.cardList}/>

                );
        case 'SELL':
            return ( 

                <MarketPlace stateMarket={props.shopType} cards={props.user.cardList}/>

                );

        default:
            return ( 
                <Account updateShop={updateShop}>
                </Account>
                );
        }      
    }

