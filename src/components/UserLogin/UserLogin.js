import React, {useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import * as userList from '../../sources/user.json';

function processInput(){

}

function submitOrder(username,password){
    console.log(username);
    console.log(password);

    if(username !== "" && password !== ""){
        let userId = "";
        const url1 = 'http://localhost:8082/auth?login='+username+"&pwd="+password;
        console.log(url1);
        fetch(url1, {
            method: 'POST'
        })
        .then(function (response) {
            console.log(response);
            return response.json();})
        .then(  (data)=> {fetch('http://localhost:8082/user/'+data)
        .then(function (response) {
            console.log(response);
            return response.json();})
        .then(data => console.log(data));});
        


        
        
    }

}

function cancelOrder(){

}

export const UserLogin=(props)=>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");


    return(
        
        <Form>
        <Header as='h4' dividing>
            User Login
        </Header>
        <Form.Field>
            <Form.Input type="text" label="Surname" placeholder="surname" onChange={e => setUserName(e.target.value)}  name="surname"/>
        </Form.Field>

        <Form.Field>
            <Form.Input type="password" label="Pwd" placeholder="password" onChange={e => setPassword(e.target.value)}  name="pwd"/>
        </Form.Field>


        <Button type='button' onClick={()=>cancelOrder()} >Cancel</Button>
        <Button type='button' onClick={()=>submitOrder(username,password)} >Submit</Button>
    </Form>
      

    )

}