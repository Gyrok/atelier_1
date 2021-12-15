import React from 'react';
import {UserForm} from './components/UserForm/UserForm'
import {UserLogin} from './components/UserLogin/UserLogin'
import {Card} from './components/Card/containers/Card'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";






//Create function component
export const Main =(props) =>{
  

    var userId = "";
    function loginUser(data)
    {
    
      
    var userId = data;
    console.log("user id after state change: ",userId);
    }
    
    return (
          <Router>
      
            <Routes>
              <Route exact path="/" element ={<UserLogin userLogin={loginUser}/>}/>
           
              <Route path="/addUser" element ={<UserForm />}/>

              <Route path="/loginUser" element ={<UserLogin userLogin={loginUser}/>}/>

              <Route path="/card" element={<Card userId={userId}/>}/>

            </Routes>
          </Router>

    


          
    );
    
}
