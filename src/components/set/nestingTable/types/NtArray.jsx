import React from 'react';
import types from './type.map.js';

import s from 'components/styles/index.scss';

const NtArray = React.createClass({
  render() {
    let data = this.props.data
    let type = this.props.type;
    let Component = types[this.props.type.items.type];
    return (
      <div className={s.ntArrayContainer}>
        {this.props.data.map((elem, index) => {
          let tempPath = this.props.path.slice(0);
          tempPath.push(index);
          return (
            <div className={s.ntItem}>
              <Component
                  type={this.props.type.items}
                  data={elem}
                  path={tempPath} />
            </div>
          )
        })}
      </div>
    );
  }
});

module.exports = NtArray;
