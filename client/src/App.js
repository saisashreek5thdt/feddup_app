import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

import {Home, Signin, Signout, Register, Dashboard, Adminlogin} from './pages'

function App() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/signout" component={Signout} exact />
      <Route path="/dashboard" component={Dashboard} exact />
      <Route path="/adminlogin" component={Adminlogin} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default App;
