import React from 'react'
import {useUser} from './context/auth'
import * as CONSTANTS from '../CONSTANTS.js';

const AuthenticatedApp = React.lazy(() => import('../AuthenticatedApp/AuthenticatedApp.js'))
const UnauthenticatedApp = React.lazy(() => import('../UnauthenticatedApp/UnauthenticatedApp.js'))

const [user, setUsername] = React.useState('username')


function App() {
  const user = useUser()
  return user ? <AuthenticatedApp /> : <UnauthenticatedApp />
}

export default App;
