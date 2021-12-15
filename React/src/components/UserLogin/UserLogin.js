import React, {useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import {
    useNavigate
  } from "react-router-dom";

export const UserLogin=(props)=>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
function updateUid(data){
    let userId = data.id;
    console.log("this is uid: "+userId);
    props.userLogin(userId);
    
}

function submitOrder(username,password){
    console.log(username);
    console.log(password);
    
    async function makeRequest(){
        if(username !== "" && password !== ""){
            const url1 = 'http://localhost:8082/auth?login='+username+"&pwd="+password;
            console.log(url1);
            fetch(url1, {
                method: 'POST'
                
            })
            .then(function (response) {
                return response.json();
            })
            .then(
                (data)=> {fetch('http://localhost:8082/user/'+data)

            .then(function (response) {
                return response.json();})
            .then((data) => {
                updateUid(data);
                
            });
        }); 
                
        }
    await makeRequest();
    navigate("/card", { replace: true });
            
            
    }

    }

    function cancelOrder(){

    }
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