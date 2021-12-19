import React, {useState} from 'react';



export const BottomElement =(props) =>{
  
    const [shopState, setShopState] = useState("");

    function updateShop(newType, newPhrase){
        props.updateShop(newType,newPhrase);
    }

    

    switch (shopState) {  
          
        case 'BUY' :
            console.log("cartes",props.cardsID)
            return ( 

                <MarketPlace stateMarket={shopState} cardsID={props.cardsID} cards={cardsBuy.default}/>

                );
        case 'SELL':
            return ( 

                <MarketPlace stateMarket={shopState} cards={cardsSell.default}/>

                );

        default:
            return ( 
                <Account>changeShopState={updateShop}
                </Account>
                );
        }      
    }

