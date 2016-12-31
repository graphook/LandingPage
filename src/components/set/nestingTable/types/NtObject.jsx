import React from 'react';
import types from './type.map.js';

import s from 'components/styles/index.scss';

const NtObject = React.createClass({
  render() {
    let data = this.props.data;
    let type = this.props.type;

    return (
      <div className={s.ntObject}>
        {Object.keys(this.props.type.properties).map((propKey) => {
          let Component = types[this.props.type.properties[propKey].type];
          let tempPath = this.props.path.slice(0);
          tempPath.push(propKey);
          return (
            <Component
                type={this.props.type.properties[propKey]}
                data={this.props.data[propKey]}
                path={tempPath} />
          )
        })}
      </div>
    );
  }
});

module.exports = NtObject;
