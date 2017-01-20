import React, {Component, PropTypes} from 'react';

export default class Overview extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
  }
  render() {
    return (
      <h1>{this.props.children}</h1>
    );
  }
}
