import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';
import CreateUserForm from '../login/CreateUserForm.jsx';
import LoginForm from '../login/LoginForm.jsx';
import { asyncConnect } from 'redux-async-connect';
import { logout } from 'redux/modules/auth';
import { push } from 'react-router-redux';
import { connect } from 'react-redux';
import Modal from '../common/Modal.jsx';
import {open} from 'redux/modules/modal';

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
  {logout, pushState: push, openModal: open})
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
    let linkData = [
      {
        selected: path.startsWith('/set') || path === '/',
        text: 'data sets',
        icon: 'fa-table',
        to: '/set'
      },
      {
        selected: path.startsWith('/type'),
        text: 'data types',
        icon: 'fa-file-text',
        to: '/type'
      },
      {
        selected: path.startsWith('/documentation'),
        text: 'documentation',
        icon: 'fa-book',
        to: '/documentation'
      }
    ];
    if (this.props.user) {
      linkData = linkData.concat([
        {
          selected: path.startsWith('/profile'),
          text: 'profile',
          icon: 'fa-user',
          to: '/profile'
        },
        {
          text: 'log out',
          icon: 'fa-sign-out',
          onClick: this.props.logout
        }
      ]);
    } else {
      linkData = linkData.concat([
        {
          text: 'create an account',
          icon: 'fa-user',
          onClick: this.props.openModal.bind(null, CreateUserForm)
        },
        {
          text: 'log in',
          icon: 'fa-sign-in',
          onClick: this.props.openModal.bind(null, LoginForm)
        },
      ]);
    }
    return linkData.map((link) => {
      if (link.to) {
        return (
          <li className={(link.selected) ? s.curPage : ''} key={link.text}><Link to={link.to}>
            <i className={'fa ' + link.icon}></i><span className={s.linkText}>{link.text}</span>
          </Link></li>
        );
      }
      return (
        <li className={(link.selected) ? s.curPage : ''} key={link.text}><a onClick={link.onClick}>
          <i className={'fa ' + link.icon}></i><span className={s.linkText}>{link.text}</span>
        </a></li>
      );
    });
  }
  render() {
    return (
      <div className={s.layout}>
        <header>
          <h1 className={s.expanded}><Link to="/">zenow</Link></h1>
          <h1 className={s.condensed}><Link to="/">z</Link></h1>
          <nav>
            <ul>
              {this.renderLinks()}
            </ul>
          </nav>
        </header>
        <div className={s.subHeaderContent}>
          {(() => {
            if (!this.props.user) {
              return (
                <div className={s.signUpContainer + ' ' + s.clickableShadow}>
                  <h1>zenow</h1>
                  <p className={s.adText}>create and share data</p>
                  <CreateUserForm />
                  <br />
                  <LoginForm />
                </div>
              );
            }
          })()}
          {(() => {
            if (this.props.modalOpen) {
              return (
                <Modal />
              );
            }
          })()}
          <main>{this.props.children}</main>
        </div>
      </div>
    );
  }
}
