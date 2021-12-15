import React from 'react';
import {TopElement} from '../components/TopElement';
import {BottomElement} from '../components/BottomElement';



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
      // FAIRE REQUETE
      return (
        <div>

          <TopElement User={{
          id:this.props.user.id,
          name:this.props.user.name,
          surname:this.props.user.surname,
          img:this.props.user.img,
          money:this.props.user.money,
      
      }} shopState={this.state.shopState}/>

        
        
          <BottomElement handleBuy={this.handleBuy} handleSell={this.handleSell}
          handlePlay={this.handlePlay} state={this.state}/>
        </div>
      );
    }

  





}
