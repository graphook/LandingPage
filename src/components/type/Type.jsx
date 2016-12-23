import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

export default class Type extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <h1>Type</h1>
    );
  }
}
