import React, { Component, PropTypes } from 'react';

// import s from '../styles/index.scss';

export default class Documentation extends Component {
  static propTypes = {
    children: PropTypes.any,
  };
  render() {
    return (
      <h1>documentation</h1>
    );
  }
}
