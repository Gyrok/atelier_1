import React, { useState } from 'react';
import {TopElement} from './components/topElement/TopElement';
import {BottomElement} from './components/bottomElement/BottomElement';



export const CardShop=(props)=>{

    let user = "";

    function handleBuy(){
            
    }

    function handleSell(){
 
    }

    function handlePlay(){

    }
    
    function updateUser(data){
      user = data;
    }
    async function getUserById (){

      const requestUrl = 'http://localhost:8082/user/'+props.uid;

      await fetch(requestUrl)

      .then(function (response) {
          return response.json();})

      .then((data) => {
          this.updateUser(data);
      });
    }
    
    
     
    return (
      <div>

        <TopElement user={
        {
          id:user.id,
          name:user.surName,
          surname:user.lastName,
          img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png', //user img
          money:user.account,  // user money
        }
        }/>

      
      
        <BottomElement cardsID={user.cardList} handleBuy={handleBuy} handleSell={handleSell}
        handlePlay={handlePlay} />
      </div>
    );
}
