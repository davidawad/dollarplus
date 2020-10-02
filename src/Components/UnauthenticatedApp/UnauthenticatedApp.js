import React, { useState } from 'react';
import { getState } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import logo from './../../logo.svg';
import './UnauthenticatedApp.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Button, Paper } from '@material-ui/core';
import Dashboard from '../dashboard/Dashboard.js';
import SignUp from '../SignUp/SignUp.js';
import SignInSide from '../SignInSide/SignInSide.js';


import { positions } from '@material-ui/system';






// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function UnauthenticatedApp() {

  return (
    <Router>
      <div>
        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/about">
            <AboutRender/>
          </Route>
          <Route path="/sign_up">
            <SignUpRender/>
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
  const [username, setUsername] = useState('username');
  const [signedIn, setSignedIn] = useState('signedIn');

  return SignInSideRender(setSignedIn);
}

// TODO this about page
function AboutRender() {
  return (
    null
  );
}

function SignInSideRender(setSignedIn) {
  return (
    <SignInSide
      callback={setSignedIn}
      />
  );
}

function SignUpRender() {
  return (
    <SignUp/>
  );
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


export default UnauthenticatedApp;



