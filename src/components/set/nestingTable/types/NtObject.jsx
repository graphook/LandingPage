import React, {Component, PropTypes} from 'react';
import types from './type.map.js';

import s from 'components/styles/index.scss';

class NtObject extends Component {
  static propTypes = {
    type: PropTypes.object,
    data: PropTypes.object,
    path: PropTypes.array
  }
  render() {
    return (
      <div className={s.ntObject}>
        {Object.keys(this.props.type.properties).map((propKey) => {
          const ChildComponent = types[this.props.type.properties[propKey].type];
          const tempPath = this.props.path.slice(0);
          tempPath.push(propKey);
          return (
            <ChildComponent
                key={tempPath.join()}
                type={this.props.type.properties[propKey]}
                data={this.props.data[propKey]}
                path={tempPath} />
            );
        })}
      </div>
    );
  }
}

module.exports = NtObject;
