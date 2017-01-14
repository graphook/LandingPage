import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

export default class TypeVisualizer extends Component {
  static propTypes = {
    type: PropTypes.object,
  };
  constructor(props) {
    super(props);
    this.state = {};
    if (props.type.fields) {
      Object.keys(props.type.fields).forEach((field) => {
        this.state[field] = false;
      });
    }
  }
  object = (type) => {
    const info = [];
    const requires = new Set(type.requires);
    if (type.requiresAtLeast) {
      info.push(<li>requires at least {type.requiresAtLeast.count} of the following:{type.requiresAtLeast.fields.map(field => ' ' + field).toString()}</li>);
    }
    Object.keys(type.fields).forEach((field) => {
      info.push(<li className={s.field}><a onClick={() => {
        this.state[field] = !this.state[field];
        this.setState(this.state);
      }}>
        <i className={(this.state[field]) ? 'fa fa-chevron-down' : 'fa fa-chevron-right'}></i>{field}{(requires.has(field)) ? ' (required)' : ''}:
      </a></li>);
      if (this.state[field]) {
        info.push(<li><TypeVisualizer type={type.fields[field]} /></li>);
      }
    });
    return info;
  }
  array = (type) => {
    return [
      <li>items:</li>,
      <li><TypeVisualizer type={type.items} /></li>
    ];
  }
  constant = (type) => {
    return (
      <li>value: {JSON.stringify(type.value)}</li>
    );
  }
  string = (type) => {
    if (type.regex) {
      return (
        <li>regex: {type.regex}</li>
      );
    }
  }
  render() {
    return (
      <ul className={s.typeVisualizer}>
        <li><strong>{this.props.type.type}</strong> {this.props.type.description}</li>
        {(() => {
          if (this.props.type.default) {
            return (<li>default: {JSON.stringify(this.props.type.default)}</li>);
          }
        })()}
        {(this[this.props.type.type]) ? this[this.props.type.type](this.props.type) : ''}
      </ul>
    );
  }
}
