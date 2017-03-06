import React from 'react';
import { browserHistory } from 'react-router';
import s from '../styles/index.scss';

const Search = React.createClass({
  propTypes: {
    query: React.PropTypes.string,
    redirect: React.PropTypes.string,
    resultComponent: React.PropTypes.any,
    searchResults: React.PropTypes.array
  },
  getInitialState: function getInitialState() {
    return {
      searchText: this.props.query || ''
    };
  },
  updateSearchText: function updateSearchText(e) {
    this.setState({
      searchText: e.target.value
    });
  },
  search: function search(e) {
    e.preventDefault();
    browserHistory.push('/' + this.props.redirect + '?q=' + this.state.searchText);
  },
  render() {
    const ResultComponent = this.props.resultComponent;
    return (
      <div className={s.search}>
        <form className={s.searchBar + ' ' + s.clickableShadow} onSubmit={this.search}>
          <input
              type="text"
              placeholder="find data sets"
              onChange={this.updateSearchText}
              value={this.state.searchText} />
          <input type="submit" value="search" />
        </form>
        <section className={s.searchResults}>
          {this.props.searchResults.map((result) => {
            return (
              <div className={s.searchResult + ' ' + s.clickableShadow}>
                <ResultComponent data={result} />
              </div>
            );
          })}
        </section>
      </div>
    );
  }
});

export default Search;
