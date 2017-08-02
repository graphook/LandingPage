import React, {Component, PropTypes} from 'react';
import {Element} from 'react-scroll';
import Waypoint from 'react-waypoint'
import {setFocus} from 'redux/modules/documentation';
import { connect } from 'react-redux';

@connect(null, {setFocus})
export default class SectionHeader extends Component {
  static propTypes = {
    children: PropTypes.any.isRequired,
    name: PropTypes.string
  }
  render() {
    return (
      <Element name={this.props.name}>
        <Waypoint onEnter={() => {
          this.props.setFocus(this.props.name)
        }} />
        <h1>{this.props.children}</h1>
      </Element>
    );
  }
}
