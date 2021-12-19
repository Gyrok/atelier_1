import React, { useState } from 'react';
import {TopElement} from './components/topElement/TopElement';
import {BottomElement} from './components/bottomElement/BottomElement';



export const CardShop=(props)=>{
    let user = props.user;
    let [shopType, setShopType] = useState("Main page");
    let [shopPhrase, setShopPhrase] = useState("choose what you want to do");

    function updateShop(newType, newPhrase){
      setShopType(newType);
      setShopPhrase(newPhrase);
    }

    
    console.log("current user is : "+user.lastName);
    //'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png'
    return (
      <div>

        <TopElement user={user} shopType={shopType} shopPhrase={shopPhrase}/>
      
        <BottomElement user={user} updateShop={updateShop} shopType={shopType}/>
      </div>
    )
}
