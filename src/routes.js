import React from 'react';
import {Route} from 'react-router';

import Home from './components/home/Home.jsx';

export default () => {
  return (
    <Route path="/" component={Home} />
  );
};
