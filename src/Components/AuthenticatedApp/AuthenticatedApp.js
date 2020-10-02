import React, { useState } from 'react';
import { getState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import logo from './../../logo.svg';
import './AuthenticatedApp.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';
import Dashboard from '../dashboard/Dashboard.js';
import SignUp from '../SignUp/SignUp.js';
import SignInSide from '../SignInSide/SignInSide.js';


import { positions } from '@material-ui/system';

function AuthenticatedApp() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <AboutRender/>
          </Route>
          <Route path="/dashboard">
            <dashBoard/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

function Home(){

  // Declare a new state variable, username
  let [username, setUsername] = useState('username');
  const [signedIn, setSignedIn] = useState('signedIn');

  username = 'Logged In User!'

  if(signedIn) {
    return DashboardRender(username); 
  }
}

// TODO this about page
function AboutRender() {
  return (
    null
  );
}

function DashboardRender(passedUsername) {

  let DefaultUser = "Not Logged In User"
  let ret = (
          <Dashboard 
            username={DefaultUser}
          />);

  // we were given a user
  if(typeof passedUsername !== 'undefined')  {
    ret = (
      <Dashboard
        username={passedUsername}
      />
    )
  }

  return ret;
}






// if signed in render a different form? lol

{/* 
<Container maxWidth="lg" className="App">
      <Paper>

        <Button variant="contained" color="secondary" position={positions.top}>
          This is a button in the corner? 
        </Button>
        
        
        <br></br>
        
        <img src={logo} className="App-logo" alt="logo" />
        
        
        <Typography variant="h4" component="h1" gutterBottom>
          Create React App + Material-UI
        </Typography>
        
        

        <Button variant="contained" color="primary">
          Primary Button
        </Button>
        <Button variant="contained" color="secondary">
          Secondary Button
        </Button>


        

      </Paper>
    </Container>
*/} 


export default AuthenticatedApp;



