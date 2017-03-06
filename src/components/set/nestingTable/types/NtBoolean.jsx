import React, {PropTypes, Component} from 'react';

import s from 'components/styles/index.scss';

class NtBoolean extends Component {
  static propTypes = {
    data: PropTypes.bool
  }
  render() {
    return (
      <div className={s.ntLeaf + ' ' + s.ntItem}>
        {(this.props.data) ? 'TRUE' : 'FALSE'}
      </div>
    );
  }
}

module.exports = NtBoolean;
