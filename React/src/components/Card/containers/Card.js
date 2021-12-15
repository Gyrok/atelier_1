import React from 'react';
import {TopElement} from '../components/TopElement';
import {BottomElement} from '../components/BottomElement';



export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shopState: "ACTION"};
        this.handleBuy=this.handleBuy.bind(this);
        this.handleSell=this.handleSell.bind(this);
        this.handlePlay =this.handlePlay.bind(this);
        
        this.userID=props.userId;
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
    
    updateUser(data){
      this.user = data;
    }
    async callID (){

      const url1 = 'http://localhost:8082/user/'+this.props.userId;
      await fetch(fetch('http://localhost:8082/user/'+this.props.userId)

      .then(function (response) {
          return response.json();})

      .then((data) => {
          this.updateUser(data);
      }));
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

        
        
          <BottomElement cardsID={this.user.cardList} handleBuy={this.handleBuy} handleSell={this.handleSell}
          handlePlay={this.handlePlay} state={this.state}/>
        </div>
      );
    }

  





}
