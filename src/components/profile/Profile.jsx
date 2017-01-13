import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import { fetchSets } from 'redux/modules/set.js';
import { fetchUser, fetchUserSets, unstar } from 'redux/modules/profileDetails';
import {Link} from 'react-router';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    promises.push(dispatch(fetchUserSets(getState().auth.user.username)));
    promises.push(dispatch(fetchUser()).then(() => {
      const stars = getState().setDetails.stars;
      return dispatch(fetchSets(stars, 500));
    }));
    return Promise.all(promises);
  }
}])
@connect(state => ({
  user: state.auth.user || {},
  sets: state.profileDetails.sets || [],
  stars: state.profileDetails.stars || [],
  setHash: state.set.hash || {}
}), {unstar})
export default class Profile extends Component {
  static propTypes = {
    user: PropTypes.object,
    sets: PropTypes.array,
    stars: PropTypes.array,
    setHash: PropTypes.object,
    unstar: PropTypes.func
  };
  render() {
    return (
      <div className={s.profile + ' ' + s.infoPage}>
        <div className={s.infoContainer}>
          <h2>{this.props.user.username}</h2>
          <p>{this.props.user.email}</p>
          <p><i className="fa fa-key"></i> {this.props.user.key}</p>
        </div>
        <div className={s.infoContainer}>
          <h2>my sets</h2>
          <p><a><i className="fa fa-upload"></i>create a new set</a></p>
          <ul>
            {this.props.sets.map((set) => {
              return (
                <li key={set}>
                  <Link to={'/set/' + set}>
                    {this.props.setHash[set].title}
                  </Link>
                  <div>
                    <Link to="/">
                      <i className="fa fa-book"></i> rest api
                    </Link>
                    <span>
                      <i className="fa fa-file"></i> {this.props.setHash[set].items.length}
                    </span>
                    <span>
                      <i className="fa fa-star-o"></i>{this.props.setHash[set].stars}
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className={s.infoContainer}>
          <h2>starred sets</h2>
          <ul>
            {this.props.stars.map((set) => {
              return (
                <li key={set}>
                  <Link to={'/set/' + set}>
                    {this.props.setHash[set].title}
                  </Link>
                  <div>
                    <a onClick={() => this.props.unstar(set)}>
                      <i className="fa fa-star"></i>unstar
                    </a>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}
