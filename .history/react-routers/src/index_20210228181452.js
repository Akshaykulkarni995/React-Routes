import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import user from './user';
import visit from './visit';
import notfound from './notfound';

const routing = (
  //inside of this router we create multiple route
  <Router>
    <div>
      <ul>
        <li><Link to = "/">
          Home</Link>
        </li>
        <li><Link>
          User</Link>
        </li>
          <li><Link>
            visit</Link>
          </li>
      </ul>
    </div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/user" component={user} />
        <Route path="/visit" component={visit} />
        <Route component={notfound} />
      </Switch>
  </Router>
)
ReactDOM.render( routing,

  document.getElementById('root')
);

