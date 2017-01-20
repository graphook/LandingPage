import React, {Component, PropTypes} from 'react';

export default class Overview extends Component {
  render() {
    return (
      <h1>{this.props.children}</h1>
    )
  }
}
