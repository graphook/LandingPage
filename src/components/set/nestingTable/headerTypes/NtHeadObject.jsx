import React, {Component} from 'react';
import HeaderArray from './NtHeadArray.jsx';
import HeaderOther from './NtHeadOther.jsx';

import s from 'components/styles/index.scss';

export default class HeaderObject extends Component {
  render() {
    return (
      <div className={s.itemContainer}>
        {this.props.type.properties.map((prop, index) => {
          let tempPath = this.props.path.slice(0);
          tempPath.push('properties');
          tempPath.push(index);
          let keyIndicator = prop.id;
          if (prop.type === 'object') {
            return (
              <div className={s.item}>
                <span>{keyIndicator}</span>
                <HeaderObject
                  type={prop}
                  path={tempPath} />
              </div>
            )
          } else if (prop.type === 'array') {
            return (
              <div className={s.item}>
                <span>{keyIndicator}[]</span>
                <HeaderArray
                  type={prop}
                  path={tempPath} />
              </div>
            )
          } else {
            return (
              <div className={s.item}>
                <span>{keyIndicator}</span>
                <HeaderOther
                  type={prop}
                  path={tempPath} />
              </div>
            )
          }
        })}
      </div>
    )
  }
};
