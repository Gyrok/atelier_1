import React, {useState} from 'react';
import {MarketPlace} from "./components/MarketPlace";
import {Account} from"./components/Account";


export const BottomElement =(props) =>{
  
    const [shopState, setShopState] = useState("");

    function updateShop(newType, newPhrase){
        props.updateShop(newType,newPhrase);
    }

    

    switch (shopState) {  
          
        case 'BUY' :
            console.log("cartes",props.user.cardList)
            return ( 

                <MarketPlace stateMarket={shopState} cards={props.user.cardList}/>

                );
        case 'SELL':
            return ( 

                <MarketPlace stateMarket={shopState} cards={props.user.cardList}/>

                );

        default:
            return ( 
                <Account>changeShopState={updateShop}
                </Account>
                );
        }      
    }

