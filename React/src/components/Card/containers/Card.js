import React, {useState } from 'react';
import {TopElement} from '../components/TopElement';
import {BottomElement} from '../components/BottomElement';



export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shopState: "ACTION"};
        this.handleBuy=this.handleBuy.bind(this);
        this.handleSell=this.handleSell.bind(this);
        this.handlePlay =this.handlePlay.bind(this);
        
        this.userID=6;  //props.userID;
        this.user=this.callID();
        
      }

     
    handleBuy(){
            this.setState({shopState: "BUY"});

    }
    handleSell(){
        this.setState({shopState: "SELL"});
    }
    handlePlay(){
        this.setState({shopState: "PLAY"});
    }
    

    async callID (){
        fetch('http://localhost:8082/user/'+this.userID,{ method: 'GET'})
        .then(response => response.json() )
        .then(response => {
          
          console.log("id",response.id);
          console.log("lastName",response.lastName);
          this.user=response;
        })
        .catch(function () {
          console.log("error");
        });
    }
    
    

    render() {
     
      return (
        <div>

          <TopElement User={{
          id:this.userID,
          name:this.user.surName,
          surname:this.user.lastName,
          img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png', //user.img,
          money:5000,  //user.money,
      
      }} shopState={this.state.shopState}/>

        
        
          <BottomElement handleBuy={this.handleBuy} handleSell={this.handleSell}
          handlePlay={this.handlePlay} state={this.state}/>
        </div>
      );
    }

  





}
