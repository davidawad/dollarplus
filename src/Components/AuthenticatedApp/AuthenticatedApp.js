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
import Transferboard from '../dashboard/Transferboard.js';
import SignUp from '../SignUp/SignUp.js';
import SignInSide from '../SignInSide/SignInSide.js';


import { positions } from '@material-ui/system';

function AuthenticatedApp(props) {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <DashboardRender {...props} />
          </Route>
          <Route path="/dashboard">
            <DashboardRender {...props} />
          </Route>

          <Route path="/transfer">
            <TransferboardRender {...props} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


function DashboardRender(props) {

  console.log(props)

  let ret = (
          <Dashboard 
            {... props}
          />);

  return ret;
}


function TransferboardRender(props) {

  let ret = (
          <Transferboard 
            {... props}
          />);

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



