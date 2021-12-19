import React from 'react';
import {TopElement} from './components/topElement/TopElement';
import {BottomElement} from './components/bottomElement/BottomElement';



export const CardShop=(props)=>{
    
    function updateUser(data){
      user = data;
    }
    async function getUserById(){

      const requestUrl = 'http://localhost:8082/user/'+props.uid;

      await fetch(requestUrl)

      .then(function (response) {
          return response.json();})

      .then((data) => {
          this.updateUser(data);
      });
    }
    
    let user = getUserById();
    //'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png'
    return (
      <div>

        <TopElement user={user}/>

      
      
        <BottomElement user={user}/>
      </div>
    );
}
