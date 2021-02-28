import React from 'react';
import ReactDOM from 'react-dom';
import {Route,Link,Switch,BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';

const routing = (
//inside of this router we create multiple route
  <Router>
    <Route  path ="/" component = {A} />
  </Router>
)
ReactDOM.render( routing,
  <React.StrictMode>
   
  </React.StrictMode>,
  document.getElementById('root')
);

