import React, {Component, PropTypes} from 'react';
import types from './types/type.map';
import NtHead from './NtHead.jsx';

import s from 'components/styles/index.scss';

const NtObject = types.object;

export default class NestingTable extends Component {
  static propTypes = {
    type: PropTypes.object,
    focused: PropTypes.bool,
    horizontalScrollOffset: PropTypes.number,
    data: PropTypes.array
  }
  constructor(props) {
    super(props);
    this.state = {
      headerHeight: 0
    };
  }
  render() {
    return (
      <div className={s.nestingTable}>
        <NtHead type={this.props.type} />
        {(() => {
          if (this.props.focused) {
            return (
              <div className={s.ntFixedHead}
                  style={{left: -this.props.horizontalScrollOffset}}>
                <NtHead type={this.props.type} />
              </div>
            );
          }
        })()}
        {this.props.data.map((row, index) => {
          return (
            <div className={s.ntRow} key={row._id}>
              <NtObject
                type={this.props.type}
                data={row}
                path={[index]}/>
            </div>
          );
        })}
      </div>
    );
  }
}
/*
data
type
*/
