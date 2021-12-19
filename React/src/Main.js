import React, { useState } from 'react';
import {Register} from './user/register/Register'
import { Login } from './user/login/Login'
import {Card} from './components/Card/containers/Card'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Create function component
export const Main =(props) =>{
  

  const [uid, setUid] = useState("");

    return (
          <Router>
      
            <Routes>
              <Route exact path="/" element ={<Login setUid={setUid}/>}/>
           
              <Route path="/addUser" element ={<Register />}/>

              <Route path="/loginUser" element ={<Login setUid={setUid}/>}/>

              <Route path="/card" element={<Card uid={uid}/>}/>

            </Routes>
          </Router>
    );
}
