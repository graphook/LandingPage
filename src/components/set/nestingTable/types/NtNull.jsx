import React, {Component} from 'react';

import s from 'components/styles/index.scss';

class NtNumber extends Component {
  render() {
    return (
      <div className={s.ntLeaf + ' ' + s.ntItem}>NULL</div>
    );
  }
}

module.exports = NtNumber;
