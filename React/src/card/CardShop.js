import React, { useState } from 'react';
import {TopElement} from './components/topElement/TopElement';
import {BottomElement} from './components/bottomElement/BottomElement';



export const CardShop=(props)=>{
    let user;
    const [shopType, setShopType] = useState("Main page");
    const [shopPhrase, setShopPhrase] = useState("choose what you want to do");

    function updateShop(newType, newPhrase){
      setShopType(newType);
      setShopPhrase(newPhrase);
    }

    function updateUser(data){
      user = data;
    }
    async function getUserById(){

      const requestUrl = 'http://localhost:8082/user/'+props.uid;

      await fetch(requestUrl)

      .then(function (response) {
          return response.json();})

      .then((data) => {
          updateUser(data);
      });
    }
    
    getUserById();

    //'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png'
    return (
      <div>

        <TopElement user={user} shopType={shopType} shopPhrase={shopPhrase}/>

      
      
        <BottomElement user={user} updateShop={updateShop} shopType={shopType}/>
      </div>
    );
}
