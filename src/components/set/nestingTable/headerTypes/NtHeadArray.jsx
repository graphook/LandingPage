import React, {Component, PropTypes} from 'react';
import HeaderObject from './NtHeadObject.jsx';
import HeaderOther from './NtHeadOther.jsx';

import s from 'components/styles/index.scss';

export default class HeaderArray extends Component {
  static propTypes = {
    path: PropTypes.array,
    type: PropTypes.object
  }
  render() {
    const tempPath = this.props.path.slice(0);
    tempPath.push('items');
    return (
      <div className={s.item}>
        {(() => {
          if (this.props.type.items.type === 'object') {
            return (
              <HeaderObject
                type={this.props.type.items}
                path={tempPath} />
            );
          } else if (this.props.type.items.type === 'array') {
            return (
              <HeaderArray
                type={this.props.type.items}
                path={tempPath} />
            );
          }
          return (
            <HeaderOther
              type={this.props.type.items}
              path={tempPath} />
          );
        })()}
      </div>
    );
  }
}
