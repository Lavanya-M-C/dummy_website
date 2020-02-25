import React from 'react';
import {Switch, Route} from 'react-router-dom';

import './App.scss';
import HomePage from './pages/homepage/homepage.component';
import PostPage from './pages/postpage/postpage.component';

const App = () => (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/post' component={PostPage} />
    </Switch>
  </div>
);

export default App;
