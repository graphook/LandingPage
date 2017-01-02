import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {fetchSet, fetchItems} from 'redux/modules/setDetails';
import {fetchType} from 'redux/modules/type';
import Waypoint from 'react-waypoint';
import NestingTable from './nestingTable/NestingTable.jsx';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import s from '../styles/index.scss';

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
  setHash: state.set.hash,
  itemHash: state.item.hash,
  page: state.setDetails.page,
  numPerPage: state.setDetails.numPerPage,
  set: state.set.hash[state.setDetails.id],
  type: state.type.hash[state.set.hash[state.setDetails.id].type]
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
  constructor(props) {
    super(props);
    this.state = {
      tableFocus: false,
      horizontalScrollOffset: 0
    }
  }
  componentDidMount() {
    const id = this.props.params.id;
    this.props.fetchSet(id).then(() => {
      const typeId = this.props.setHash[id].type;
      return Promise.all([
        this.props.fetchItems(id, this.props.setHash[id].items, 0),
        this.props.fetchType(typeId)
      ]);
    });
    this.node = ReactDOM.findDOMNode(this);
  }
  loadMore = () => {

  }
  handleScroll = () => {
    this.setState({horizontalScrollOffset: this.node.scrollLeft});
  }
  render() {
    const data = [];
    for (var i = 0; i < (this.props.numPerPage * (this.props.page + 1)); i++) {
      data.push(this.props.itemHash[this.props.set.items[i]]);
    }
    return (
      <div className={s.set} onScroll={this.handleScroll}>
        <div className={s.infoArea} style={{marginLeft: this.state.horizontalScrollOffset}}>
          <div className={s.setInfo}>
            <div>
              <h1>{this.props.set.title}</h1>
              <p>{this.props.set.description}</p>
            </div>
            <nav>
              <Link to='/'>
                <i className="fa fa-user"></i>{this.props.set.creatorName}
              </Link>
              <Link to={'/type/' + this.props.set.type}>
                <i className="fa fa-file-text"></i>{this.props.set.typeName}
              </Link>
              <span>
                <i className="fa fa-file"></i> {this.props.set.items.length}
              </span>
              <a>
                <i className="fa fa-star-o"></i>{this.props.set.stars}
              </a>
            </nav>
          </div>
          <nav className={s.dataNav}>
            {(() => {
              if (this.props.location.query.view === 'json') {
                return (
                  <Link
                      to={{
                        pathname: this.props.location.pathname,
                        query: {...this.props.location.query, view:'table'}
                      }}>
                    <i className="fa fa-table"></i>table view
                  </Link>
                )
              } else {
                return (
                  <Link
                      to={{
                        pathname: this.props.location.pathname,
                        query: {...this.props.location.query, view:'json'}
                      }}>
                    <i className="fa fa-align-right"></i>json view
                  </Link>
                )
              }
            })()}
            <Link to='/'>
              <i className="fa fa-book"></i>docs
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
            )
          } else {
            return (
              <NestingTable
                type={this.props.type}
                data={data}
                focused={this.state.focusTable}
                horizontalScrollOffset={this.state.horizontalScrollOffset} />
            )
          }
        })()}
        <Waypoint onEnter={this.loadMore} />
      </div>
    );
  }
}
