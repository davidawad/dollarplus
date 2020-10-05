import React from 'react'
//import {useUser} from './context/auth'
import * as CONSTANTS from '../CONSTANTS.js';
import AuthenticatedApp from '../AuthenticatedApp/AuthenticatedApp'
import UnauthenticatedApp from '../UnauthenticatedApp/UnauthenticatedApp'

// const AuthenticatedApp = React.lazy(() => import('../AuthenticatedApp/AuthenticatedApp.js'))
// const UnauthenticatedApp = React.lazy(() => import('../UnauthenticatedApp/UnauthenticatedApp.js'))


let sampleUser = {
  name: false, 
  walletTotal: 3024.00, // in usd
}

// for demo purposes 
if (false) {
  sampleUser.name = 'Jonathan SIGSEGV'
}


function App() {
  const [user, setUser] = React.useState(sampleUser)

  let ret = <UnauthenticatedApp setUser={setUser} />
  
  if (user.name !== false) {
    ret = <AuthenticatedApp user={user} />
  }

  return ret; 
  
  // return user ? <AuthenticatedApp user={user} /> : <UnauthenticatedApp setUser={setUser}/>

  // return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
  
  // return <AuthenticatedApp /> 
}

export default App;
