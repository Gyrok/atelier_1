import React from 'react';
import {TopElement} from '../components/TopElement';
import {BottomElement} from '../components/BottomElement';
import { Grid, Segment } from 'semantic-ui-react'
const User = {
    id:12,
    name:"John",
    surname:"Doe",
    pwd:"jdoepwd",
    img:'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png',
    money:1000,

};


export class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {shopState: ""};
        this.handleBuy=this.handleBuy.bind(this);
        this.handleSell=this.handleSell.bind(this);
        this.handlePlay =this.handlePlay.bind(this);
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
     
    render() { 

      return (
        <div>

          <TopElement User={User} shopState={this.state.shopState}/>

        
        
          <BottomElement handleBuy={this.handleBuy} handleSell={this.handleSell}
          handlePlay={this.handlePlay} state={this.state}/>
        </div>
      );
    }

  





}
