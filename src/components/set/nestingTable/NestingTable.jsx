import React, {Component} from 'react';
import types from './types/type.map';
import NtHead from './NtHead.jsx'

import s from 'components/styles/index.scss';

const NtObject = types.object;

export default class NestingTable extends Component {
  render() {
    return (
      <div className={s.nestingTable}>
        <NtHead type={this.props.type} />
        {this.props.data.map((row, index) => {
          return (
            <div className={s.ntRow}>
              <NtObject
                type={this.props.type}
                data={row}
                path={[index]}/>
            </div>
          )
        })}
      </div>
    );
  }
}
/*
data
type
*/
