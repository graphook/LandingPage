import React from 'react';
import s from '../styles/index.scss';

const SetResult = React.createClass({
  propTypes: {
    data: React.PropTypes.shape({
      title: React.PropTypes.string,
      description: React.PropTypes.string,
      numItems: React.PropTypes.number
    })
  },
  render() {
    return (
      <div className={s.setResult}>
        <h2>{this.props.data.title}</h2>
        <p className={s.description}>{this.props.data.description}</p>
        <p>{this.props.data.numItems} items</p>
      </div>
    );
  }
});

export default SetResult;
