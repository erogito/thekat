import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { HOME_PAGE, LIST_PAGE } from './pages';

function App() {
  return (
    <main className='main'>
      <Router>
        <Switch>
          <Route exact path='/' component={HOME_PAGE} />
          <Route exact path='/list/' component={LIST_PAGE} />
        </Switch>
      </Router>
    </main>
  );
}

export default App;
