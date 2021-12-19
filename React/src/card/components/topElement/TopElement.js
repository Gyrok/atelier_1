import React from 'react';



export const TopElement =(props) =>{
  

    console.log("user that is to be displayed:"+props.user.id); // the problem is that the user is passed before it actualises.

    return (
        <div className="ui clearing segment">
        <h3 className="ui right floated header">
            <i className="user circle outline icon"></i>
            <div className="content">
                <span id="userNameId">{props.user.surName}</span>
                <div className="sub header"><span>{props.user.account}</span>$</div>
            </div>
        </h3>

        <h3 className="ui left floated header">
            <i className="money icon"></i>
            <div className="content">
                {props.shopType}
                <div className="sub header">{props.shopPhrase}</div>
            </div>
        </h3>
    </div>
    )
}
