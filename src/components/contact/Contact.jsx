import React, { Component } from 'react';


import s from '../styles/index.scss';

export default class Contact extends Component {
  render() {
    return (
      <div className={s.infoPage}>
        <div className={s.contact + ' ' + s.infoContainer}>
          <h1>Reach out to me</h1>
          <p>If you have a suggestion, want to report a bug, or are having trouble of any kind, don't hesitate to contact me.</p>
          <table className="banner-container">
            <tbody>
              <tr>
                <td><i className="fa fa-comments"></i></td>
                <td>
                  <a href="https://discord.gg/QMsGdK5" target="_blank">Join the discord chat</a>
                </td>
              </tr>

              <tr>
                <td><i className="fa fa-twitter"></i></td>
                <td>
                  <a href="https://twitter.com/OisForOh" target="_blank">or contact me on twitter: twitter.com/OisForOh</a>
                </td>
              </tr>

              <tr>
                <td><i className="fa fa-envelope-o"></i></td>
                <td>You can also email me at jaxoncreed@gmail.com</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
