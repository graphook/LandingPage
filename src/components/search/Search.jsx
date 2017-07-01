import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import Helmet from 'react-helmet';
import {changeSelectedSearch} from 'redux/modules/mainSearch';
import SearchResults from './SearchResults';

import s from '../styles/index.scss';

const DATA_SET_NAME = 'mainDataSetResults';
const INSIGHT_NAME = 'mainInsightResults';
const DATA_TYPE_NAME = 'mainDataTypeResults';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    const setName = getState().routing.locationBeforeTransitions.pathname.split('/')[2] || 'set_set';
    promises.push(dispatch(changeSelectedSearch(setName)));
    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    setName: state.mainSearch.selectedSet,
    modalOpen: state.modal.open,
    searchText: state.mainSearchBar.searchText
  }))
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
    location: PropTypes.object,
    setName: PropTypes.string
  }
  render() {
    const query = this.props.location.query.q || '';
    const setName = this.props.setName;
    let name;
    switch (setName) {
      case 'type_set':
        name = DATA_TYPE_NAME;
        break;
      case 'insight_set':
        name = INSIGHT_NAME;
        break;
      default:
        name = DATA_SET_NAME;
    }
    return (
      <div className={s.search}>
        <Helmet title={query || 'Search'} />
        <nav className={s.searchNav}>
          <ul className={s.tabs}>
            {/* <li className={s.selected}><a><i className="fa fa-bar-chart"></i>Insights</a></li> */}
            <li className={(name === DATA_SET_NAME ? s.selected : '')}>
              <Link to={'/search/set_set?q=' + query}><i className="fa fa-table"></i>Data Sets</Link>
            </li>
            <li className={(name === DATA_TYPE_NAME ? s.selected : '')}>
              <Link to={'/search/type_set?q=' + query}><i className="fa fa-file-text"></i>Data Types</Link>
            </li>
          </ul>
        </nav>
        <SearchResults name={name} setName={setName} query={query} />
      </div>
    );
  }
}
