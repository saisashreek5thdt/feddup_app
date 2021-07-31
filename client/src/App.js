import './App.css';
import {Route, Switch, Redirect} from 'react-router-dom'

import {Home, Signin, Signout, Register} from './pages'

function App() {
  return (
    <Switch>
      <Route path="/signin" component={Signin} exact />
      <Route path="/register" component={Register} exact />
      <Route path="/signout" component={Signout} exact />
      <Route path="/" component={Home} exact />
    </Switch>
  );
}

export default App;
