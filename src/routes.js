import React from 'react';
import {IndexRoute, Route} from 'react-router';
import Layout from './components/layout/Layout.jsx';

import SetSearch from './components/set/SetSearch.jsx';
import Set from './components/set/Set.jsx';
import SetCreate from './components/set/SetCreate.jsx';
import TypeSearch from './components/type/TypeSearch.jsx';
import Type from './components/type/Type.jsx';
import TypeCreate from './components/type/TypeCreate.jsx';
import Profile from './components/profile/Profile.jsx';
import Documentation from './components/documentation/Documentation.jsx';

export default () => {
  return (
    <Route path="/" component={Layout}>
      { /* Home (main) route */ }
      <IndexRoute component={SetSearch}/>

      { /* Routes */ }
      <Route path="/set" component={SetSearch} />
      <Route path="/set/create" component={SetCreate} />
      <Route path="/set/:id" component={Set} />
      <Route path="/type" component={TypeSearch} />
      <Route path="/type/create" component={TypeCreate} />
      <Route path="/type/:id" component={Type} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/documentation/:focus" component={Documentation} />
      <Route path="/documentation/set/:id" component={Documentation} />
      <Route path="/documentation/set/:id/:focus" component={Documentation} />
      <Route path="/profile" component={Profile} />

      { /* Catch all route */ }
      { /* <Route path="*" component={NotFound} status={404} /> */ }
    </Route>
  );
};
