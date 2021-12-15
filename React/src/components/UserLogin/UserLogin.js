import React, {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Header,Button } from 'semantic-ui-react'

export const UserLogin=(props)=>{
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
   
    const navigate = useNavigate();
    
function updateUid(data){
    let userId = data.id;
    console.log("this is uid: "+userId);
    props.userLogin(userId);
}
async function makeRequest(){
    if(username !== "" && password !== ""){
        const url1 = 'http://localhost:8082/auth?login='+username+"&pwd="+password;
        console.log(url1);
        await fetch(url1, {
            method: 'POST'
            
        })
            .then(function (response) {
                return response.json();
            })

            .then(
                (data)=> { fetch('http://localhost:8082/user/'+data)

                .then(function (response) {
                    return response.json();})

                .then((data) => {
                    updateUid(data);
                });
            }); 
    }
}

function submitOrder(){
    console.log(username);
    console.log(password);
    makeRequest();
    Redirect();
    
    
}

    function cancelOrder(){

    }

    
    function Redirect(){
        
        navigate("/card", { replace: true });
        //return <h1>IF HERE SOME1 F*CKED UP</h1>; 
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


        <Button type='button' onClick={cancelOrder} >Cancel</Button>
        <Button type='button' onClick={submitOrder} >Submit</Button>
    </Form>
      

    )

}