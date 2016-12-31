import React, {Component} from 'react';

import s from 'components/styles/index.scss';

export default class HeaderOther extends Component {
  render() {
    return (<div className={s.leafItem + ' ' + s.item}>{this.props.type.type}</div>)
  }
};
