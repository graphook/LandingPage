import React from 'react';
import {Route, IndexRoute} from 'react-router';
import Layout from './components/layout/Layout.jsx';

import Home from './components/home/Home.jsx';
import Documentation from './components/documentation/Documentation.jsx';
import Contact from './components/contact/Contact.jsx';

export default () => {
  return (
    <Route path="/" component={Layout}>
      <IndexRoute path="" component={Home} />
      <Route path="/documentation" component={Documentation} />
      <Route path="/documentation/:topic" component={Documentation} />
      <Route path="/documentation/:topic/:subTopic" component={Documentation} />
      <Route path="/contact" component={Contact} />
    </Route>
  );
};
