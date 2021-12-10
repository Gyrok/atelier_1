import React from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import * as userList from '../../sources/user.json';

function processInput(){

}

function submitOrder(){
    
}

function cancelOrder(){

}

export const UserLogin=(props)=>{
    return(
        
        <Form>
        <Header as='h4' dividing>
            User Login
        </Header>
        <Form.Field>
            <Form.Input type="text" label="Surname" placeholder="surname" onChange={processInput}  name="surname"/>
        </Form.Field>

        <Form.Field>
            <Form.Input type="password" label="Pwd" placeholder="password" onChange={processInput}  name="pwd"/>
        </Form.Field>


        <Button type='submit' onClick={cancelOrder} >Cancel</Button>
        <Button type='submit' onClick={submitOrder} >Submit</Button>
    </Form>
      

    )

}