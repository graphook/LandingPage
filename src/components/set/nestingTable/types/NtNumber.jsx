import React from 'react';

import s from 'components/styles/index.scss';

const NtNumber = React.createClass({
  render() {
    return (
      <div className={s.ntLeaf + ' ' + s.ntItem}>
        {this.props.data}
      </div>
    );
  }
});

module.exports = NtNumber;
