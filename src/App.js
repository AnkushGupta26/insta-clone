import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={SignUp}/>
      </Switch>
    </Router>
  );
}

export default App;
