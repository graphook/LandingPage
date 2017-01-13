import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

export default class Documentation extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <div className={s.documentation}>
        <nav className={s.clickableShadow}>

        </nav>
        <div>

        </div>
      </div>
    );
  }
}
