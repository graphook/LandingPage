import React, { Component } from 'react';


import s from '../styles/index.scss';

export default class Contact extends Component {
  render() {
    return (
      <div className={s.infoPage}>
        <div className={s.contact + ' ' + s.infoContainer}>
          <h1>Reach out to me</h1>
          <p>If you have a suggestion, want to report a bug, or are having trouble of any kind, don't hesitate to contact us.</p>
          <table className="banner-container">
            <tbody>
              <tr>
                <td><i className="fa fa-twitter"></i></td>
                <td>
                  <a href="https://twitter.com/OisForOh" target="_blank">Contact Jackson on twitter: twitter.com/OisForOh</a>
                </td>
              </tr>

              <tr>
                <td><i className="fa fa-envelope-o"></i></td>
                <td>You can also email Jackson at jackson.c.morgan@gmail.com</td>
              </tr>

              <tr>
                <td><i className="fa fa-twitter"></i></td>
                <td>
                  <a href="https://twitter.com/OisForOh" target="_blank">Contact Jenny on twitter: twitter.com/jennywang01</a>
                </td>
              </tr>

              <tr>
                <td><i className="fa fa-envelope-o"></i></td>
                <td>You can also email Jenny at jennywanggoog@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
