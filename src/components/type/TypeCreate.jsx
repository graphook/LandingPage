import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

export default class TypeCreate extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <h1>Type Create</h1>
    );
  }
}
