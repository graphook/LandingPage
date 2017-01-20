import React, {Component, PropTypes} from 'react';
import {promptSignIn} from 'redux/modules/modal';
import { connect } from 'react-redux';
import requester from 'superagent';
import url from 'url';

import s from 'components/styles/index.scss';

const protocol = 'http:';
const host = 'localhost:3030';

@connect(state => ({
  isLoggedIn: !!(state.auth.user),
  apiKey: state.profileDetails.user.key || 'YOUR_API_KEY'
}), {promptSignIn})
export default class RequestTool extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    apiKey: PropTypes.string,
    promptSignIn: PropTypes.func
  }
  constructor(props) {
    super(props);
    this.updateInfo(props);
  }
  componentWillReceiveProps(nextProps) {
    this.updateInfo(nextProps);
  }
  updateInfo = (props) => {
    const parsedUrl = url.parse(props.initPath, true);
    this.state = {
      method: props.initMethod,
      url: url.format({
        pathname: parsedUrl.pathname,
        query: {
          ...parsedUrl.query,
          apikey: props.apiKey
        },
        host: host,
        protocol: protocol
      }),
      body: JSON.stringify(props.initBody, null, 2),
      responseBody: props.initResponseBody,
      status: props.initStatus,
      madeRequest: false,
      loading: false,
      error: ''
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.props.isLoggedIn) {
      try {
        let request = requester[this.state.method.toLowerCase()](this.state.url);
        if (this.state.method === 'POST' || this.state.method === 'PUT') {
          request = request.send(JSON.parse(this.state.body));
        }
        request.end((err, res) => {
          this.setState({
            responseBody: res.body,
            status: res.status
          });
        });
      } catch (err) {
        this.setState({error: 'improperly formatted json'});
      }
    } else {
      this.props.promptSignIn();
    }
  }

  render() {
    return (
      <form className={s.requestTool + ' ' + s.clickableShadow} onSubmit={this.handleSubmit}>
        <div className={s.topRequestTools}>
          <div className={s.select}>
            <select value={this.state.method} onChange={(e) => this.setState({method: e.target.value})}>
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>
          <div className={s.urlArea}>
            <input type="text" value={this.state.url} onChange={(e) => this.setState({url: e.target.value})} />
          </div>
          <div className={s.submitArea}>
            {(() => {
              if (this.state.loading) {
                return (
                  <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
                );
              }
            })()}
            <input type="submit" className={s.primaryButton} value="send" />
          </div>
        </div>
        {(() => {
          if (this.state.method === 'POST' || this.state.method === 'PUT') {
            return (
              <textarea className={s.requestBody} value={this.state.body} onChange={(e) => this.setState({body: e.target.value})} />
            );
          }
        })()}
        <div>response status: {this.state.status}</div>
        <textarea className={s.responseBody} value={JSON.stringify(this.state.responseBody, null, 2)} />
      </form>
    );
  }
}
