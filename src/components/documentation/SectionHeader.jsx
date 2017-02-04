import React, {Component, PropTypes} from 'react';
import {Element} from 'react-scroll';

export default class SectionHeader extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    name: PropTypes.string
  }
  render() {
    return (
      <Element name={this.props.name}>
        <h1>{this.props.children}</h1>
      </Element>
    );
  }
}
