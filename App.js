import './App.css';
import { BrowserRouter as Switch,BrowserRouter} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Signup from './components/Navbar/Signup';
import Home from './components/Navbar/Home';
import { Route } from 'react-router-dom';
import { Route as Router } from 'react-router-dom';
import Login from './components/Navbar/Login';
import Balance from './components/Navbar/Balance';
import Account from './components/Navbar/Account';

function App() {
  return (
    <>
    <BrowserRouter>
    <Router>
      <Switch>
        <Route exact path="/Signup" component={Signup}><Signup/>
        </Route>
        <Route exact path="/Home" component={Home}/>
        <Route exact path="/Login" component={Login}/>
        <Route exact path="/Balance" component={Balance}/>
        <Route exact path="/Account" component={Account}/>

      </Switch>
    </Router>
    <Navbar/>
    </BrowserRouter>
    </>
    );
};

export default App;
