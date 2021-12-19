import React, { useState } from 'react';
import {Register} from './user/register/Register'
import { Login } from './user/login/login'
import {CardShop} from './card/CardShop'

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

//Create function component
export const Main =(props) =>{

  let [user, setUser] = useState({
                                id: -5,
                                login: "place holder",
                                pwd: "12",
                                account: 0.0,
                                lastName: "placeholder",
                                surName: "placeholder",
                                email: "placeholder@placeholder.placeholder",
                                cardList: [
                                    1,
                                    2,
                                    3,
                                    4,
                                    5
                                ]
                            });


  function updateuser(newuser){
    setUser(newuser);
  }

    return (
          <Router>
      
            <Routes>
              <Route exact path="/" element ={<Login updateuser={updateuser}/>}/>
           
              <Route path="/addUser" element ={<Register />}/>

              <Route path="/loginUser" element ={<Login updateuser={updateuser}/>}/>

              <Route path="/card" element={<CardShop user={user}/>}/>

            </Routes>
          </Router>
    );
}
