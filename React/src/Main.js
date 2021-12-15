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
  function submitUser(data)
    {
      console.log("TODO faire le submit");
    }
    function loginUser(data)
    {
      console.log("TODO faire le login");
    }
    
    return (
          <Router>
      
            <Routes>
              <Route exact path="/" element ={<UserLogin />}/>
           
              <Route path="/addUser" element ={<UserForm />}/>

              <Route path="/loginUser" element ={<UserLogin />}/>

              <Route path="/card" element={<Card />}/>

            </Routes>
          </Router>

    


          
    );
    
}
