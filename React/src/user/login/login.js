import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Header,Button } from 'semantic-ui-react'

export const Login=(props)=>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();
    
    function updateUid(data){
        let uid = data;
        console.log("this is uid: "+uid);
        if( uid !== -1){
            props.updateuid(uid);
            redirectCard();  
        }
    }

    async function makeRequest(){
        if(username !== "" && password !== ""){
            const requestUrl = 'http://localhost:8082/auth?login='+username+"&pwd="+password;
            try {
                let request = await fetch(requestUrl, { method: 'POST' })
                .then(response => response.json())
                .then(data => updateUid(data));
                
            }
            catch(e){
                console.log("error at login: "+e);

            }
        }
    }

    function submitOrder(){
        makeRequest();
        
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