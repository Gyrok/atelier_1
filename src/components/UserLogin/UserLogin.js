import React, {useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import * as userList from '../../sources/user.json';

function processInput(){

}

function submitOrder(username,password){
    if(username !== "" && password !== ""){
        console.log("c'est parti!");
        const userId = fetch('localhost:8082/auth', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: username,
                pwd: password,
            })
        })

        const user = fetch('localhost:8082/user/'+{userId}, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
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