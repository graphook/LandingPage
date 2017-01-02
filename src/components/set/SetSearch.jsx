import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {searchSets, updateSearchText} from 'redux/modules/setSearch';
import {browserHistory} from 'react-router';
import Waypoint from 'react-waypoint';
import {Link} from 'react-router';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch, getState}, location: {query: {q}}}) => {
    const promises = [];
    if (q !== getState().setSearch.curSearch) {
      promises.push(dispatch(searchSets(q)));
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
    setHash: PropTypes.object
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
              value={this.props.searchText} />
          <input type="submit" value="search" />
        </form>
        <section className={s.searchResults}>
          {this.props.searchResults.map((result) => {
            const resultData = this.props.setHash[result];
            return (
              <div className={s.setResult + ' ' + s.clickableShadow}
                  key={result}
                  onClick={this.goToSet.bind(null, resultData._id)}>
                <i className={'fa fa-2x ' + resultData.icon}></i>
                <p>type: <Link to={'/type/' + resultData.type}>
                  {resultData.typeName}
                </Link></p>
                <h2>{resultData.title}</h2>
                <p className={s.description}>
                  {resultData.description}
                </p>
                <div className={s.rowFlex}>
                  <span title={resultData.items.length + ' items in this set'}>
                    {resultData.items.length} <i className="fa fa-file"></i>
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
              <div className={s.searchLoading}>
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
