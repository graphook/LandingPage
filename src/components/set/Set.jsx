import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {fetchSet, fetchItems} from 'redux/modules/setDetails';
import {fetchType} from 'redux/modules/type';
import {star, unstar, fetchUser} from 'redux/modules/profileDetails';
import Waypoint from 'react-waypoint';
import NestingTable from './nestingTable/NestingTable.jsx';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';
import {promptSignIn} from 'redux/modules/modal';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch, getState}, params: {id}}) => {
    const promises = [];
    promises.push(dispatch(fetchSet(id)).then(() => {
      const state = getState();
      const typeId = state.set.hash[id].type._id;
      return Promise.all([
        dispatch(fetchItems(id, state.set.hash[id].items, 0)),
        dispatch(fetchType(typeId))
      ]);
    }));
    promises.push(dispatch(fetchUser()));
    return Promise.all(promises);
  }
}])
@connect(state => {
  const props = {
    setHash: state.set.hash,
    itemHash: state.item.hash,
    page: state.setDetails.page,
    numPerPage: state.setDetails.numPerPage,
    id: state.setDetails.id,
    allItemsLoaded: state.setDetails.allItemsLoaded,
    itemError: state.setDetails.itemError,
    isStarred: (state.profileDetails.user.stars) ? state.profileDetails.user.stars.indexOf(state.setDetails.id) !== -1 : false,
    isLoggedIn: !!(state.auth.user)
  };
  if (state.setDetails.id && state.set.hash[state.setDetails.id]) {
    const set = state.set.hash[state.setDetails.id];
    Object.assign(props, {
      set: set,
      type: state.type.hash[set.type._id]
    });
  }
  return props;
}, {fetchSet, fetchItems, fetchType, star, unstar, promptSignIn})
export default class Set extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string
    }),
    location: PropTypes.shape({
      query: PropTypes.object,
      pathname: PropTypes.string
    }),
    fetchSet: PropTypes.func,
    fetchItems: PropTypes.func,
    fetchType: PropTypes.func,
    setHash: PropTypes.object,
    itemHash: PropTypes.object,
    page: PropTypes.number,
    numPerPage: PropTypes.number,
    set: PropTypes.object,
    type: PropTypes.object,
    allItemsLoaded: PropTypes.bool,
    itemError: PropTypes.object,
    id: PropTypes.string,
    isStarred: PropTypes.bool,
    star: PropTypes.func,
    unstar: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    promptSignIn: PropTypes.func
  };
  constructor(props) {
    super(props);
    this.state = {
      tableFocus: false,
      horizontalScrollOffset: 0
    };
  }
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
  }
  loadMore = () => {
    if (!this.props.allItemsLoaded) {
      this.props.fetchItems(this.props.params.id, this.props.set.items, this.props.page + 1);
    }
  }
  handleScroll = () => {
    if (this.state.horizontalScrollOffset !== this.node.scrollLeft) {
      this.setState({horizontalScrollOffset: this.node.scrollLeft});
    }
  }
  render() {
    if (this.props.set) {
      const data = [];
      for (let i = 0; i < (this.props.numPerPage * (this.props.page + 1)); i++) {
        if (this.props.itemHash[this.props.set.items[i]]) {
          data.push(this.props.itemHash[this.props.set.items[i]]);
        }
      }
      return (
        <div className={s.set} onScroll={this.handleScroll}>
          <div className={s.infoArea} style={{marginLeft: this.state.horizontalScrollOffset}}>
            <div className={s.setInfo}>
              <div>
                <h1>{this.props.set.title} ({this.props.set._id})</h1>
                <p>{this.props.set.description}</p>
              </div>
              <nav>
                <span>
                  <i className="fa fa-user"></i>{this.props.set.creator.username}
                </span>
                <Link to={'/type/' + this.props.set.type._id}>
                  <i className="fa fa-file-text"></i>{this.props.set.type.title}
                </Link>
                <span>
                  <i className="fa fa-file"></i> {this.props.set.items.length}
                </span>
                {!this.props.isStarred && (
                  <a onClick={() => (this.props.isLoggedIn) ? this.props.star(this.props.set._id) : this.props.promptSignIn() }>
                    <i className="fa fa-star-o"></i>{this.props.set.stars}
                  </a>
                )}
                {this.props.isStarred && (
                  <a onClick={() => this.props.unstar(this.props.set._id)}>
                    <i className="fa fa-star"></i>{this.props.set.stars}
                  </a>
                )}
              </nav>
            </div>
            <nav className={s.dataNav}>
              {(() => {
                if (this.props.location.query.view === 'json') {
                  return (
                    <Link
                        to={{
                          pathname: this.props.location.pathname,
                          query: {...this.props.location.query, view: 'table'}
                        }}>
                      <i className="fa fa-table"></i>table view
                    </Link>
                  );
                }
                return (
                  <Link
                      to={{
                        pathname: this.props.location.pathname,
                        query: {...this.props.location.query, view: 'json'}
                      }}>
                    <i className="fa fa-align-right"></i>json view
                  </Link>
                );
              })()}
              <Link to="/">
                <i className="fa fa-book"></i>rest api
              </Link>
            </nav>
          </div>
          <Waypoint
            onEnter={() => this.setState({focusTable: false})}
            onLeave={() => this.setState({focusTable: true})} />
          {(() => {
            if (this.props.location.query.view === 'json') {
              return (
                <pre className={s.jsonArea}>
                  {JSON.stringify(data, null, 2)}
                </pre>
              );
            }
            return (
              <NestingTable
                type={this.props.type}
                data={data}
                focused={this.state.focusTable}
                horizontalScrollOffset={this.state.horizontalScrollOffset} />
            );
          })()}
          <Waypoint onEnter={this.loadMore} />
          {(() => {
            if (this.props.allItemsLoaded) {
              return (
                <div className={s.centeredMessage}>
                  <i className="fa fa-check"></i> no more items
                </div>
              );
            } else if (this.props.itemError.item) {
              return (
                <div className={s.centeredMessage + ' ' + s.error}>
                  <i className="fa fa-times"></i> {this.props.itemError.item}
                </div>
              );
            }
          })()}
        </div>
      );
    }
    return (<div>Fail!</div>);
  }
}
