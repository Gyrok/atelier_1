import React from 'react';



export const TopElement =(props) =>{
  

 

    return (
        <div class="ui clearing segment">
        <h3 class="ui right floated header">
            <i class="user circle outline icon"></i>
            <div class="content">
                <span id="userNameId">{props.user.surName}</span>
                <div class="sub header"><span>{props.user.account}</span>$</div>
            </div>
        </h3>

        <h3 class="ui left floated header">
            <i class="money icon"></i>
            <div class="content">
                {props.shopType}
                <div class="sub header">{props.shopPhrase}</div>
            </div>
        </h3>
    </div>
    );
}
