import React from 'react';
import {UserForm} from './components/UserForm/UserForm'
import {UserLogin} from './components/UserLogin/UserLogin'
import {Card} from './components/Card/containers/Card'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect
} from "react-router-dom";






//Create function component
export const Main =(props) =>{
  const [userId, setUserId] = useState("");
  function submitUser(data)
    {
      console.log("TODO faire le submit");
    }
    function loginUser(data)
    {
      console.log("TODO faire le login");
      <Redirect  to="/card" />
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
