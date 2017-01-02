import React, {PropTypes, Component} from 'react';

import s from 'components/styles/index.scss';

class NtNumber extends Component {
  static propTypes = {
    data: PropTypes.number
  }
  render() {
    return (
      <div className={s.ntLeaf + ' ' + s.ntItem}>
        {this.props.data}
      </div>
    );
  }
}

module.exports = NtNumber;
