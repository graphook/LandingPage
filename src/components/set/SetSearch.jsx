import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {searchSets, updateSearchText} from 'redux/modules/setSearch';
import {browserHistory} from 'react-router';
import Waypoint from 'react-waypoint';
import {Link} from 'react-router';
import {throttle} from 'lodash';
import Helmet from 'react-helmet';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch, getState}, location: {query: {q}}}) => {
    const promises = [];
    if (q !== getState().setSearch.curSearch) {
      promises.push(dispatch(searchSets(q || '')));
    } else if (!getState().setSearch.loaded) {
      promises.push(dispatch(searchSets()));
    }
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    loading: state.setSearch.loading,
    searchResults: state.setSearch.results,
    setHash: state.set.hash,
    searchText: state.setSearch.searchText,
    curSearch: state.setSearch.curSearch,
    page: state.setSearch.page
  }), {updateSearchText, searchSets})
export default class SetSearch extends Component {
  static propTypes = {
    searchText: PropTypes.string,
    loading: PropTypes.bool,
    searchSets: PropTypes.func,
    curSearch: PropTypes.string,
    page: PropTypes.number,
    updateSearchText: PropTypes.func,
    searchResults: PropTypes.array,
    setHash: PropTypes.object,
    location: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.searchThrottle = throttle(() => {
      this.props.searchSets(this.refs.searchBox.value);
    }, 1000);
  }
  search = (e) => {
    e.preventDefault();
    browserHistory.push('/set?q=' + this.props.searchText);
  }
  loadMore = () => {
    if (!this.props.loading) {
      this.props.searchSets(this.props.curSearch, this.props.page + 1);
    }
  }
  updateSearchText = (e) => {
    this.props.updateSearchText(e.target.value);
    this.searchThrottle();
  }
  goToSet = (id, e) => {
    if (e.target.tagName !== 'A') {
      browserHistory.push('/set/' + id);
    }
  }
  render() {
    return (
      <div className={s.search}>
        <form className={s.searchBar + ' ' + s.clickableShadow} onSubmit={this.search}>
          <input
              type="text"
              placeholder="find data sets"
              onChange={this.updateSearchText}
              value={this.props.searchText}
              onBlur={this.search}
              onFocus={() => { if (this.props.location.pathname === '/') browserHistory.push('/set'); }}
              ref="searchBox" />
          <input type="submit" value="search" />
        </form>
        {(() => {
          if (this.props.location.pathname === '/') {
            return [
              <div key="title" className={s.centeredMessage + ' ' + s.largeHeader}>
                <h1>zenow</h1>
                <p>create, share, and find free public data</p>
              </div>,
              <div key="background" className={s.banner}></div>
            ];
          }
          return (<Helmet title={this.props.curSearch} />);
        })()}
        <section className={s.searchResults}>
          {this.props.searchResults.map((result) => {
            const resultData = this.props.setHash[result];
            return (
              <div className={s.setResult + ' ' + s.clickableShadow}
                  key={result}
                  onClick={this.goToSet.bind(null, resultData._id)}>
                <p>type: <Link to={'/type/' + resultData.type._id}>
                  {resultData.type.title}
                </Link></p>
                <h2>{resultData.title}</h2>
                <p className={s.description}>
                  {resultData.description}
                </p>
                <div className={s.rowFlex}>
                  <span title={resultData.numItems + ' items in this set'}>
                    {resultData.numItems} <i className="fa fa-file"></i>
                  </span>
                  <span title={resultData.stars + ' stars'}>
                    {resultData.stars} <i className="fa fa-star"></i>
                  </span>
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
