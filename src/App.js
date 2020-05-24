import React from 'react';
import './App.css';
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import SiteForm from './components/SiteForm';

function App() {
  return (
    <Router>
      <div>
        <AmplifySignOut />
        My App
        <nav>
          <ul>
            <li>
              <Link to="/new">New</Link>
            </li>
          </ul>
        </nav>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/new">
            <SiteForm />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default withAuthenticator(App, true);
