import React from 'react';

import s from 'components/styles/index.scss';

const NtString = React.createClass({
  render() {
    return (
      <div className={s.ntLeaf + ' ' + s.ntItem}>
        {this.props.data}
      </div>
    );
  }
});

module.exports = NtString;
