import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { AuthProvider } from "./contexts/AuthContext";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/signup' component={SignUp} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </AuthProvider>
    </Router>
  );
}

export default App;
