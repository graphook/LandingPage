import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import config from 'config';
import Helmet from 'react-helmet';
import {Link} from 'react-router';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: () => {
    const promises = [];
    return Promise.all(promises);
  }
}])
export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };
  constructor(props) {
    super(props);
    this.state = {
      sidePanelOpen: false
    };
  }
  getLinkData = () => {
    const linkData = [
      {
        text: 'Feedback / Contact',
        icon: 'fa-comment',
        to: '/contact'
      },
      {
        text: 'Rest API',
        icon: 'fa-book',
        to: '/documentation'
      }
    ];
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
          <main>{this.props.children}</main>
        </div>
        <nav className={s.sideMenu} style={{
          transform: 'translateX(' + ((this.state.sidePanelOpen) ? '0' : '-300px') + ')'
        }}>
          <ul>
            {linkData.map((data) => {
              if (data.to) {
                return (
                  <Link onClick={() => this.setState({ sidePanelOpen: false })} to={data.to} key={data.text}><li>
                    <i className={'fa ' + data.icon}></i><span className={s.linkText}>{data.text}</span>
                  </li></Link>
                );
              } else if (data.onClick) {
                return (
                  <a onClick={(e) => { this.setState({ sidePanelOpen: false }); data.onClick(e); }} key={data.text}><li>
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
