import React from 'react';
import {  Image } from 'semantic-ui-react';

 export const UserSmallDisplay=(props) =>{
    return (
        <div>
            <h2>{props.name} {props.surname}</h2>
            <Image src={props.img} wrapped ui={false} className="ui avatar image"/>
        </div>
        );
    }
