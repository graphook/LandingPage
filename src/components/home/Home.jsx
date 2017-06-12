import React, { Component } from 'react';
import Search from 'components/search/Search.jsx';

import s from '../styles/index.scss';

export default class Home extends Component {
  render() {
    return (
      <div>
        <div key="background" className={s.banner}>
          <div key="title" className={s.centeredMessage + ' ' + s.largeHeader}>
            <h1>zenow</h1>
            <p>create, share, and find free public data</p>
          </div>
        </div>
        <Search />
      </div>
    );
  }
}
