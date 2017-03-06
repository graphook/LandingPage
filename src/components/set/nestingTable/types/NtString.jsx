import React, {PropTypes, Component} from 'react';

import s from 'components/styles/index.scss';

class NtString extends Component {
  static propTypes = {
    data: PropTypes.string
  }
  render() {
    return (
      <div className={s.ntLeaf + ' ' + s.ntItem}>
        {this.props.data}
      </div>
    );
  }
}

module.exports = NtString;
