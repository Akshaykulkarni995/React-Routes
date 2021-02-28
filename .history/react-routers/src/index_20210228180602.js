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
    <Route  path ="/react" component = {App} />
    <Route  path ="/react-" component = {user} />
    <Route  path ="/react" component = {visit} />
  </Router>
)
ReactDOM.render( routing,
 
  document.getElementById('root')
);

