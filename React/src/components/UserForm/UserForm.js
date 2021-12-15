import React, {useState } from 'react';
import { Form, Header,Button } from 'semantic-ui-react'
import { useNavigate } from 'react-router-dom';





export const UserForm=(props)=>{
    const [login, setLogin] = useState("");
    const [surname, setSurname] = useState("");
    const [lastname, setLastName] = useState("");
    const [pwd, setPwd] = useState("");
    const [pwdCheck, setPwdCheck] = useState("");
    
    const navigate = useNavigate();
    function cancelOrder(){
        window.location.reload();
    }
    
    function submitOrder(Login,surname,lastname,password,pwdCheck){
        console.log("hello")

        if(password === pwdCheck){
            fetch('http://localhost:8082/user',{
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify({
                login:Login,
                surName:surname,
                lastName: lastname,
                pwd:password,
                img:"'https://www.nicepng.com/png/full/982-9820051_heart-2352306885-deadpool-png.png'",
                money:"5000",})
                } )
            .then(res => {
                console.log(res);
                console.log("Wellcome")
                window.alert("Wellcome new player!")
            }).catch(function () {
                console.log("error");
            })
        }
        else {
            window.alert("Confirm your password")
        }

        Redirect();
    }
    function Redirect(){
        
        navigate("/loginUser", { replace: true });
        //return <h1>IF HERE SOME1 F*CKED UP</h1>; 
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

        <Button type='submit' onClick={()=>cancelOrder()}>Cancel</Button>
        <Button type='submit' onClick={()=>submitOrder(login,surname,lastname,pwd,pwdCheck)}>Submit</Button>
    </Form>

    )

}