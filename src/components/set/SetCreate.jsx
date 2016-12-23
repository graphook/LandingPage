import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

export default class SetCreate extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <h1>Set Create</h1>
    );
  }
}
