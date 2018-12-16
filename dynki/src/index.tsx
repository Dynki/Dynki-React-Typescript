import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={App} />
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
