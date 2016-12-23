import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

export default class Set extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <h1>Set</h1>
    );
  }
}
