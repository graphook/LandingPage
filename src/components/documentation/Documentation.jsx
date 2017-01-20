import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { fetchUser } from 'redux/modules/profileDetails';
import Overview from './pages/overview.jsx';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch}}) => {
    const promises = [];
    promises.push(dispatch(fetchUser()));
    return Promise.all(promises);
  }
}])
export default class Documentation extends Component {
  static propTypes = {
    children: PropTypes.any,
  }
  render() {
    return (
      <div className={s.documentation}>
        <nav className={s.clickableShadow}>

        </nav>
        <div className={s.docContentArea}>
          <div className={s.docContent}>
            <Overview />
          </div>
        </div>
      </div>
    );
  }
}
