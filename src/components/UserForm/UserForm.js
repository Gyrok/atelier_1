import React from 'react';
import { Form, Header,Button } from 'semantic-ui-react'

function processInput(){

}

function readJson () {
    console.log(this)
    
    fetch('http://localhost:3000/Card',{
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            }
         } )
    .then((response) => response.json()).then(json => {
        console.log(json);
    }).catch(function () {
        console.log("error");
    })
 }


function submitOrder(){
    console.log("hello")
    readJson();
}
function cancelOrder(){
    window.location.reload();
}

export const UserForm=(props)=>{
    return(
        
        <Form>
        <Header as='h4' dividing>
            User Registration
        </Header>
        <Form.Field>
            <Form.Input type="text" label="Surname" placeholder="surname" onChange={processInput}  name="surname"/>
        </Form.Field>
        <Form.Field>
            <Form.Input type="text" label="Name" placeholder="name" onChange={processInput}  name="name"/>
        </Form.Field>

        <Form.Field>
            <Form.Input type="password" label="Pwd" placeholder="password" onChange={processInput}  name="pwd"/>
        </Form.Field>
        <Form.Field>
            <Form.Input type="password" label="Pwd re-enter" placeholder="password" onChange={processInput}  name="pwdCheck"/>
        </Form.Field>

        <Button type='submit' onClick={()=>cancelOrder()}>Cancel</Button>
        <Button type='submit' onClick={()=>submitOrder()}>Submit</Button>
    </Form>

    )

}