import Navbar from './Components/Navbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Login from './Components/Login'
import './App.css';
import Signup from './Components/Signup';
import Restorent from'./Restorents/Restorent'
import React,{useState,useEffect} from 'react';
import {auth} from './firebase'
import Forgot from './Components/Forgot'
import Reset from './Components/Reset'

function App() {
  const [user, setUser] = useState(null)

   useEffect(() => {
    auth.onAuthStateChanged(user=>{
      if(user) setUser(user)
      else setUser(null)
    })
    
  }, [])
  return (
   
    <BrowserRouter>

      <Navbar user={user}/>
      <Switch>
        
        <Route exact path='/login' component={Login} user={user}/>
        <Route exact path='/signup' component={Signup} user={user}/>
        <Route exact path='/menu' component={Restorent} user={user} />
        <Route exact path='/forgot' component={Forgot} user={user} />
        {/* <Route exact path='/reset' component={Reset} user={user} /> */}
        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;


