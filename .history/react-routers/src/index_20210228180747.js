import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import user from './user';
import visit from './visit';

const routing = (
//inside of this router we create multiple route
  <Router>
    <Switch>
    <Route  path ="/" component = {App} />
    <Route  path ="/react-routes" component = {user} />
    <Route  path ="/react-routing" component = {visit} />
    </Switch>
  </Router>
)
ReactDOM.render( routing,
 
  document.getElementById('root')
);

