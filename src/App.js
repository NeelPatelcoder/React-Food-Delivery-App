import Navbar from './Components/Navbar'
import { BrowserRouter,Route,Switch } from 'react-router-dom'
import Login from './Components/Login'
import './App.css';
import Signup from './Components/Signup';
import Restorent from'./Restorents/Restorent'

function App() {
  return (
   
    <BrowserRouter>

      <Navbar />
      <Switch>
        
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={Signup} />
        <Route exact path='/menu' component={Restorent} />
        
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;


