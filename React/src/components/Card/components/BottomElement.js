import React from 'react';
import {Account} from './bottomElementComponents/Account';
import {MarketPlace} from './bottomElementComponents/MarketPlace';
import * as cardsBuy from '../../../sources/cards_buy.json';
import * as cardsSell from '../../../sources/cards_sell.json';

   

 

 export const BottomElement=(props)=> {
    
    switch (props.state.shopState) {  
        case 'BUY' :
            console.log("cartes",props.cardsID)
            return ( 

                <MarketPlace stateMarket="BUY" cardsID={props.cardsID} cards={cardsBuy.default}/>

                );
        case 'SELL':
            return ( 

                <MarketPlace stateMarket="SELL" cards={cardsSell.default}/>

                );
        case 'PLAY':
            return ( 
                <Account handleBuy={props.handleBuy} handleSell={props.handleSell}
                handlePlay={props.handlePlay}>
                </Account>
                );
        default:
            return ( 
                <Account handleBuy={props.handleBuy} handleSell={props.handleSell}
                handlePlay={props.handlePlay}>
                </Account>
                );
        }      
    }
