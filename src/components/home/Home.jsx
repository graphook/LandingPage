import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';
import Search from 'components/search/search';

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
        <Search location={this.props.location} params={this.props.params} />
      </div>
    );
  }
}
