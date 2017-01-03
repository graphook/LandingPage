import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {searchTypes, updateSearchText} from 'redux/modules/typeSearch';
import {browserHistory} from 'react-router';
import Waypoint from 'react-waypoint';
import {throttle} from 'lodash';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch, getState}, location: {query: {q}}}) => {
    const promises = [];
    if (q !== getState().typeSearch.curSearch) {
      promises.push(dispatch(searchTypes(q)));
    } else if (!getState().typeSearch.loaded) {
      promises.push(dispatch(searchTypes()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    loading: state.typeSearch.loading,
    searchResults: state.typeSearch.results,
    typeHash: state.type.hash,
    searchText: state.typeSearch.searchText,
    curSearch: state.typeSearch.curSearch,
    page: state.typeSearch.page
  }), {updateSearchText, searchTypes})
export default class SetSearch extends Component {
  static propTypes = {
    searchText: PropTypes.string,
    loading: PropTypes.bool,
    searchTypes: PropTypes.func,
    curSearch: PropTypes.string,
    page: PropTypes.number,
    updateSearchText: PropTypes.func,
    searchResults: PropTypes.array,
    typeHash: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.searchThrottle = throttle(() => {
      this.props.searchTypes(this.refs.searchBox.value);
    }, 1000);
  }
  search = (e) => {
    e.preventDefault();
    browserHistory.push('/type?q=' + this.props.searchText);
  }
  loadMore = () => {
    if (!this.props.loading) {
      this.props.searchTypes(this.props.curSearch, this.props.page + 1);
    }
  }
  updateSearchText = (e) => {
    this.props.updateSearchText(e.target.value);
    this.searchThrottle();
  }
  goToSet = (id, e) => {
    if (e.target.tagName !== 'A') {
      browserHistory.push('/type/' + id);
    }
  }
  render() {
    return (
      <div className={s.search}>
        <form className={s.searchBar + ' ' + s.clickableShadow} onSubmit={this.search}>
          <input
              type="text"
              placeholder="find data types"
              onChange={this.updateSearchText}
              value={this.props.searchText}
              onBlur={this.search}
              ref='searchBox' />
          <input type="submit" value="search" />
        </form>
        <section className={s.searchResults}>
          {this.props.searchResults.map((result) => {
            const resultData = this.props.typeHash[result];
            return (
              <div className={s.setResult + ' ' + s.clickableShadow}
                  key={result}
                  onClick={this.goToSet.bind(null, resultData._id)}>
                <i className={'fa fa-2x ' + resultData.icon}></i>
                <h2>{resultData.title}</h2>
                <p className={s.description}>
                  {resultData.description}
                </p>
                <div className={s.rowFlex}>
                  <span>{resultData.numUses} <i className="fa fa-table"></i></span>
                </div>
              </div>
            );
          })}
        </section>
        <Waypoint onEnter={this.loadMore} />
        {(() => {
          if (this.props.searchResults.length === 0 && !this.props.loading) {
            return (
              <div className={s.centeredMessage}>
                <i className="fa fa-frown-o" aria-hidden="true">
                </i> no results for {this.props.curSearch}.
              </div>
            );
          }
        })()}
        {(() => {
          if (this.props.loading) {
            return (
              <div className={s.centeredMessage}>
                <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
