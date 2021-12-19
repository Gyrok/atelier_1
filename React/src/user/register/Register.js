import React, {useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';





export const Register=(props)=>{
    
    // Defined states for form variables
    const [login, setLogin] = useState("");
    const [surname, setSurname] = useState("");
    const [lastname, setLastName] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdCheck, setPwdCheck] = useState("");
    
    const navigate = useNavigate();
    
    async function submitOrder(){
        console.log("hello")

        if(pwd === pwdCheck){
            const requestUrl = 'http://localhost:8082/user';
            try {
                await fetch(requestUrl,{
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body : JSON.stringify({
                    login:login,
                    surName:surname,
                    lastName: lastname,
                    pwd:pwd,
                    img:"'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png'",
                    money:"5000",})
                })
                .then(res => {
                    console.log(res);
                    console.log("Welcome")
                    window.alert("Welcome new player!")
                })
                .catch(function () {
                    console.log("error");
                });

            }

            catch(e){
                console.log("error at register: "+e);
            }
        }
        else {
            window.alert("Confirm your password")
        }

        redirectLogin();
    }
    function redirectLogin(){
        
        navigate("/loginUser", { replace: true });
        
    }
    return(
        
        <Form>
            <Header as='h4' dividing>
                User Registration
            </Header>
            
            <Form.Field>
                <Form.Input type="text" label="Login" placeholder="login" onChange={e => setLogin(e.target.value)}  name="login"/>
            </Form.Field>

            <Form.Field>
                <Form.Input type="text" label="Surname" placeholder="surname" onChange={e => setSurname(e.target.value)}  name="surname"/>
            </Form.Field>

            <Form.Field>
                <Form.Input type="text" label="Lastame" placeholder="lastname" onChange={e => setLastName(e.target.value)}  name="lastname"/>
            </Form.Field>

            <Form.Field>
                <Form.Input type="password" label="Pwd" placeholder="password" onChange={e => setPwd(e.target.value)}  name="pwd"/>
            </Form.Field>

            <Form.Field>
                <Form.Input type="password" label="Pwd re-enter" placeholder="password" onChange={e => setPwdCheck(e.target.value)}  name="pwdCheck"/>
            </Form.Field>

            <Button type='submit' onClick={()=>redirectLogin()}>Use existing account</Button>
            <Button type='submit' onClick={()=>submitOrder()}>Submit</Button>

        </Form>

    )

}