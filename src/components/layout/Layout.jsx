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
  constructor(props) {
    super(props);
    this.state = {
      sidePanelOpen: false
    };
  }
  getLinkData = () => {
    let linkData = [
      {
        text: 'Rest API',
        icon: 'fa-book',
        to: '/documentation'
      },
      {
        text: 'Create New',
        icon: 'fa-plus',
        onClick: () => alert('createNew')
      }
    ];
    if (this.props.user) {
      linkData = linkData.concat([
        {
          text: 'Profile',
          icon: 'fa-user',
          to: '/profile'
        },
        {
          text: 'Log Out',
          icon: 'fa-sign-out',
          onClick: this.props.logout
        }
      ]);
    } else {
      linkData = linkData.concat([
        {
          text: 'Create an Account',
          icon: 'fa-user',
          onClick: this.props.openModal.bind(null, <AuthPrompt />)
        },
        {
          text: 'Log In',
          icon: 'fa-sign-in',
          primary: true,
          onClick: this.props.openModal.bind(null, <AuthPrompt loginFocus />)
        }
      ]);
    }
    return linkData;
  }
  render() {
    const linkData = this.getLinkData();
    return (
      <div className={s.layout}>
        <Helmet {...config.app.head} />
        <header>
          <nav className={s.titleArea}>
            <a onClick={() => this.setState({ sidePanelOpen: !this.state.sidePanelOpen })}>
              <i className={'fa fa-bars ' + s.hamburger}></i>
            </a>
            <h1><Link to="/">zenow</Link></h1>
            <form className={s.search}>
              <input
                  type="text"
                  placeholder="Search"
                  ref="searchBox" />
              <button className={s.primary}><i className="fa fa-search"></i></button>
            </form>
          </nav>
          <nav className={s.topMenu}>
            <ul>
              {linkData.map((data) => {
                if (data.to) {
                  return (
                    <li key={data.text}><Link to={data.to}>
                      <i className={'fa ' + data.icon}></i><span className={s.linkText}>{data.text}</span>
                    </Link></li>
                );
                } else if (data.onClick) {
                  return (
                    <li key={data.text}>
                      <button onClick={data.onClick} className={(data.primary) ? s.primary : ''}>
                        <i className={'fa ' + data.icon}></i><span className={s.linkText}>{data.text}</span>
                      </button>
                    </li>
                  );
                }
              })}
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
        <nav className={s.sideMenu} style={{
          transform: 'translateX(' + ((this.state.sidePanelOpen) ? '0' : '-300px') + ')'
        }}>
          <ul>
            {linkData.map((data) => {
              if (data.to) {
                return (
                  <Link onClick={() => this.setState({ sidePanelOpen: false })} to={data.to}><li key={data.text}>
                    <i className={'fa ' + data.icon}></i><span className={s.linkText}>{data.text}</span>
                  </li></Link>
                );
              } else if (data.onClick) {
                return (
                  <a onClick={(e) => { this.setState({ sidePanelOpen: false }); data.onClick(e); }}><li key={data.text}>
                    <i className={'fa ' + data.icon}></i><span className={s.linkText}>{data.text}</span>
                  </li></a>
              );
              }
            })}
          </ul>
        </nav>
      </div>
    );
  }
}
