import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {fetchSet, fetchItems} from 'redux/modules/setDetails';
import {fetchType} from 'redux/modules/type';
import Waypoint from 'react-waypoint';

// import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch, getState}, params: {id}}) => {
    const promises = [];
    promises.push(dispatch(fetchSet(id)).then(() => {
      const state = getState();
      const typeId = state.set.hash[id].type;
      return Promise.all([
        dispatch(fetchItems(id, state.set.hash[id].items, 0)),
        dispatch(fetchType(typeId))
      ]);
    }));
    return Promise.all(promises);
  }
}])
@connect(state => ({
  setHash: state.set.hash
}), {fetchSet, fetchItems, fetchType})
export default class Set extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string
    }),
    fetchSet: PropTypes.func,
    setHash: PropTypes.object,
    fetchItems: PropTypes.func,
    fetchType: PropTypes.func
  };
  componentDidMount() {
    const id = this.props.params.id;
    this.props.fetchSet(id).then(() => {
      const typeId = this.props.setHash[id].type;
      return Promise.all([
        this.props.fetchItems(id, this.props.setHash[id].items, 0),
        this.props.fetchType(typeId)
      ]);
    });
  }
  loadMore = () => {
    console.log('loading more');
  }
  render() {
    return (
      <div>
        <h1>Set</h1>
        <Waypoint onEnter={this.loadMore} />
      </div>
    );
  }
}
