import React, {Component, PropTypes} from 'react';
import HeaderObject from './headerTypes/NtHeadObject.jsx';
import {clone} from 'lodash';

import s from 'components/styles/index.scss';

const encodeType = (oldType) => {
  const type = clone(oldType, true);
  if (type.type === 'object') {
    type.properties = Object.keys(type.properties).map((prop) => {
      type.properties[prop].id = prop;
      return encodeType(type.properties[prop]);
    });
    return type;
  } else if (type.type === 'array') {
    type.items = encodeType(type.items);
    return type;
  }
  return type;
};

const decodeType = (oldType) => {
  const type = clone(oldType, true);
  if (type.type === 'object') {
    const tempProperties = {};
    type.properties.forEach((prop) => {
      tempProperties[prop.id] = decodeType(prop);
      delete tempProperties[prop.id].id;
    });
    type.properties = tempProperties;
    return type;
  } else if (type.type === 'array') {
    type.items = decodeType(type.items);
    return type;
  }
  return type;
};

export default class NtHead extends Component {
  static propTypes = {
    type: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      type: encodeType(this.props.type)
    };
  }
  componentWillReceiveProps(newProps) {
    this.setState({
      type: encodeType(newProps.type)
    });
  }
  render() {
    return (
      <div className={s.ntHeadArea}>
        <HeaderObject
          type={this.state.type}
          path={[]} />
      </div>
    );
  }
}
