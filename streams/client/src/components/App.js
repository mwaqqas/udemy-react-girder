import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import Header from './Header';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import history from '../history';

const App = () => {
  return (
    <div>
      <div className="ui container">
        <Router history={history}>
          <Header />
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/:id" exact component={StreamShow} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
