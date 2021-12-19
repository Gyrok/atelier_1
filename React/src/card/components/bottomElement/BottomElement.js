import React from 'react';
import {MarketPlace} from "./components/MarketPlace";
import {Account} from"./components/Account";


export const BottomElement =(props) =>{    

    switch (props.shopType) {  
          
        case 'BUY' :
            console.log("cartes",props.user.cardList)
            return ( 

                <MarketPlace stateMarket={props.shopType} cards={props.user.cardList}/>

                );
        case 'SELL':
            return ( 

                <MarketPlace stateMarket={props.shopType} cards={props.user.cardList}/>

                );

        default:
            return ( 
                <Account>changeShopState={props.updateShop}
                </Account>
                );
        }      
    }

