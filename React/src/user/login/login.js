import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Header,Button } from 'semantic-ui-react'

export const Login=(props)=>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();

    async function makeRequest(){
        
        const requestUrl = 'http://localhost:8082/auth?login='+username+"&pwd="+password;
        try {
            await fetch(requestUrl, { method: 'POST' })
            .then(response => response.json())
            .then(data => {
                if (data !== -1){
                    getUserById(data);
                }
            });
        }
        catch(e){
            console.log("error at login: "+e);

        }
    
    }

    function updateUser(data){
        props.updateuser(data);
        redirectCard();  
    }

    async function getUserById(uid){
        const requestUrl = 'http://localhost:8082/user/'+uid; // this fetch works the user object is correctly returned
        console.log("in cardshop the user get url is:"+requestUrl);
        try{
            await fetch(requestUrl)

            .then(function (response) {
                return response.json();})

            .then((data) => {
                updateUser(data);
            });
        }
        catch(e){
            console.log("erreur récupération user: "+e)
        }
        
    }
      
    function submitOrder(){
        if(username !== "" && password !== ""){
            makeRequest();
        }
    }
    
    function redirectCard(){
        navigate("/card", { replace: true });
    }    

    function redirectRegister(){
        navigate("/addUser", { replace: true });
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


        <Button type='button' onClick={redirectRegister} >Create account</Button>
        <Button type='button' onClick={submitOrder} >Submit</Button>
    </Form>
      

    )

}