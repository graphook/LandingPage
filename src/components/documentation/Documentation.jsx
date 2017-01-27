import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { fetchUser } from 'redux/modules/profileDetails';
import { Link } from 'react-router';
import Tutorial from './pages/Tutorial.jsx';
import Authentication from './pages/Authentication.jsx';
import Set from './pages/Set.jsx';
import Type from './pages/Type.jsx';
import sections from './sections';
import {scroller} from 'react-scroll';

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
    params: PropTypes.object
  }
  componentDidMount() {
    this.goToProperPlace();
  }
  componentDidUpdate() {
    this.goToProperPlace();
  }
  goToProperPlace = () => {
    scroller.scrollTo(this.props.params.subTopic, {
      offset: -56
    });
  }
  render() {
    return (
      <div className={s.documentation}>
        <nav className={s.clickableShadow}>
          <ul>
            {Object.keys(sections).map((section) => {
              return [
                <li><Link to={'/documentation/' + section}>{section}</Link></li>,
                <ul>
                  {Object.keys(sections[section]).map((subSection) => {
                    return (
                      <li><Link to={'/documentation/' + section + '/' + subSection}>
                        {sections[section][subSection]}
                      </Link></li>
                    );
                  })}
                </ul>
              ];
            })}
          </ul>
        </nav>
        <div className={s.docContentArea} id="documentationContainer">
          <div className={s.docContent}>
            {(() => {
              switch (this.props.params.topic) {
                case 'Tutorial':
                  return <Tutorial />;
                case 'Authentication':
                  return <Authentication />;
                case 'Set':
                  return <Set />;
                case 'Type':
                  return <Type />;
                default:
                  return <Tutorial />;
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}
