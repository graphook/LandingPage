import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

export default class Home extends Component {
  static propTypes = {
    location: PropTypes.object,
    params: PropTypes.object
  }

  render() {
    return (
      <div>
        <div key="background" className={s.banner}>
          <div key="title" className={s.centeredMessage + ' ' + s.largeHeader}>
            <h1>zenow</h1>
            <p>create, share, and find free public data</p>
          </div>
        </div>
      </div>
    );
  }
}
