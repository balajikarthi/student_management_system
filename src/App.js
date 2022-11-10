import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { Switch, Route, Redirect } from 'react-router-dom';

const App = () => {

  return (
    <div>
      
    <Switch>
      <Route path='/login' component={Login} />
      <Route path='/signup' component={SignUp} />
      <Redirect from='/' to='/login' />
    </Switch>
    </div>
  );
};

export default App;