import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';

import s from '../styles/index.scss';

export default class SetCreate extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <div className={s.createSet + ' ' + s.infoPage}>
        <Helmet title="create a set" />
        <div className={s.infoContainer}>
          <h2>Create a New Data-Set</h2>

        </div>
      </div>
    );
  }
}
