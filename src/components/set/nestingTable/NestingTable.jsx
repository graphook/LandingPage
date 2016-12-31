import React, {Component} from 'react';
import NtObject from './types/NtObject.jsx';
import NtHead from './NtHead.jsx'

export default class NestingTable extends Component {
  handleDataChange = (path, value) => {
    let curVal = this.props.data
    path.forEach((key, i) => {
      if (i < (path.length - 1)) {
        curVal = curVal[key];
      }
    });
    curVal[path[path.length - 1]] = value;
    this.props.onDataChange(this.props.data);
  }
  render() {
    return (
      <div className="nestingTable">
        <NtHead type={this.props.type} />
        {this.props.data.map((row, index) => {
          return (
            <div className="ntRow">
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
typeExtendable
typeModifiable
dataModyifiable
data
type
onDataChange(newData)
onTypeChange(newType)
*/
