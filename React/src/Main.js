import React from 'react';
import {UserForm} from './components/UserForm/UserForm'
import { Login } from './user/login/login'
import {Card} from './components/Card/containers/Card'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Create function component
export const Main =(props) =>{
  

    var uid = "";

    function login(data)
    {
      var uid = data;
      console.log("user id after state change: ",uid);
    }
    
    return (
          <Router>
      
            <Routes>
              <Route exact path="/" element ={<Login login={login}/>}/>
           
              <Route path="/addUser" element ={<UserForm />}/>

              <Route path="/loginUser" element ={<Login login={login}/>}/>

              <Route path="/card" element={<Card uid={uid}/>}/>

            </Routes>
          </Router>
    );
}
