import React, {Component, PropTypes} from 'react';
import HeaderArray from './NtHeadArray.jsx';
import HeaderOther from './NtHeadOther.jsx';

import s from 'components/styles/index.scss';

export default class HeaderObject extends Component {
  static propTypes = {
    type: PropTypes.object,
    path: PropTypes.array
  }
  render() {
    return (
      <div className={s.itemContainer}>
        {this.props.type.properties.map((prop, index) => {
          const tempPath = this.props.path.slice(0);
          tempPath.push('properties');
          tempPath.push(index);
          const keyIndicator = prop.id;
          if (prop.type === 'object') {
            return (
              <div className={s.item} key={tempPath.join()}>
                <span>{keyIndicator}</span>
                <HeaderObject
                  type={prop}
                  path={tempPath} />
              </div>
            );
          } else if (prop.type === 'array') {
            return (
              <div className={s.item} key={tempPath.join()}>
                <span>{keyIndicator}[]</span>
                <HeaderArray
                  type={prop}
                  path={tempPath} />
              </div>
            );
          }
          return (
            <div className={s.item} key={tempPath.join()}>
              <span>{keyIndicator}</span>
              <HeaderOther
                type={prop}
                path={tempPath} />
            </div>
          );
        })}
      </div>
    );
  }
}
