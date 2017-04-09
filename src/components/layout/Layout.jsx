import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import AuthPrompt from '../login/AuthPrompt.jsx';
import { asyncConnect } from 'redux-async-connect';
import { logout } from 'redux/modules/auth';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import Modal from '../common/Modal.jsx';
import {open} from 'redux/modules/modal';
import config from 'config';
import Helmet from 'react-helmet';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: () => {
    const promises = [];

    return Promise.all(promises);
  }
}])
@connect(
  state => ({
    user: state.auth.user,
    modalOpen: state.modal.open
  }),
  {logout, openModal: open})
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired,
    location: PropTypes.object.isRequired,
    openModal: PropTypes.func.isRequired,
    modalOpen: PropTypes.bool
  };
  renderLinks = () => {
    const path = this.props.location.pathname;
    const linkData = [
      {
        selected: path.startsWith('/set') || path === '/',
        text: 'Data Sets',
        icon: 'fa-table',
        to: '/set'
      },
      {
        selected: path.startsWith('/type'),
        text: 'Data Types',
        icon: 'fa-file-text',
        to: '/type'
      },
      {
        selected: path.startsWith('/documentation'),
        text: 'Rest API',
        icon: 'fa-book',
        to: '/documentation'
      }
    ];
    if (this.props.user) {
      linkData.push({
        selected: path.startsWith('/profile'),
        text: 'Profile',
        icon: 'fa-user',
        to: '/profile'
      });
    }
    return linkData.map((link) => {
      return (
        <li className={(link.selected) ? s.selected : ''} key={link.text}><Link to={link.to}>
          <i className={'fa ' + link.icon}></i><span className={s.linkText}>{link.text}</span>
        </Link></li>
      );
    });
  }
  render() {
    return (
      <div className={s.layout}>
        <Helmet {...config.app.head} />
        <header>
          <nav>
            <h1 className={s.expanded}><Link to="/">zenow</Link></h1>
            <h1 className={s.condensed}><Link to="/">z</Link></h1>
            <ul className={s.tabs}>
              {this.renderLinks()}
            </ul>
          </nav>
          <nav>
            <ul>
              {(() => {
                if (this.props.user) {
                  return [
                    <li key="log out"><button onClick={this.props.logout}>
                      <i className="fa fa-sign-out"></i><span className={s.linkText}>Log Out</span>
                    </button></li>
                  ];
                }
                return [
                  <li key="create an account"><button onClick={this.props.openModal.bind(null, <AuthPrompt />)}>
                    <i className="fa fa-user"></i><span className={s.linkText}>Create an Account</span>
                  </button></li>,
                  <li key="log in"><button className={s.primary} onClick={this.props.openModal.bind(null, <AuthPrompt loginFocus />)}>
                    <i className="fa fa-sign-in"></i><span className={s.linkText}>Log In</span>
                  </button></li>
                ];
              })()}
            </ul>
          </nav>
        </header>
        <div className={s.subHeaderContent}>
          {(() => {
            if (this.props.modalOpen) {
              return (
                <Modal />
              );
            }
          })()}
          <main>{this.props.children}</main>
          <div className={s.feedbackButton}>
            <button className={s.primary} onClick={() => browserHistory.push('/contact')}>Contact / Feedback</button>
          </div>
        </div>
      </div>
    );
  }
}
