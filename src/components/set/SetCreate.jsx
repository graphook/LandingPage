import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import request from 'superagent';
import { connect } from 'react-redux';

import s from '../styles/index.scss';

@connect(state => ({
  apiKey: state.profileDetails.user.key
}))
export default class SetCreate extends Component {
  static propTypes = {
    children: PropTypes.any,
    apiKey: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      loadingSubmit: false,
      loadingCSV: false,
      type: {
        title: '',
        description: '',
        tags: [],
        properties: {}
      },
      set: {
        title: '',
        description: '',
        tags: [],
        items: []
      }
    };
  }
  getCSV = () => {
    this.setState({ loadingCSV: true });
    request.get('/getproxy?url=' + this.state.url).timeout(60000).end((err, result) => {
      if (err) {
        alert(err);
        this.setState({loadingCSV: false});
      } else {
        this.setState({
          loadingCSV: false,
          type: {
            ...this.state.type,
            properties: result.body.type,
          },
          set: {
            ...this.state.set,
            items: result.body.items
          }
        });
      }
    });
  }
  submit = (e) => {
    e.preventDefault();
    this.setState({ loadingSubmit: true });
    request.post('/api/v1/type?apikey=' + this.props.apiKey)
      .send(this.state.type).end((err, result) => {
        if (err) {
          alert(err);
        } else {
          request.post('/api/v1/set?apikey=' + this.props.apiKey)
            .send({...this.state.set, type: result.body.types.created[0]._id}).end((err2) => {
              this.setState({ loadingSubmit: false });
              if (err2) {
                alert(err);
              } else {
                alert('success');
              }
            });
        }
      });
  }
  render() {
    return (
      <div className={s.createSet + ' ' + s.infoPage}>
        <Helmet title="create a set" />
        <div className={s.infoContainer}>
          <h1>Create a New Data Set</h1>
          <h2>Data Set Information</h2>
          <form onSubmit={this.submit}>
            <div className={s.iconTextInput}>
              <i className={ 'fa fa-id-card ' + s.fieldIcon } aria-hidden="true"></i>
              <input
                placeholder="title"
                type="text"
                value={this.state.set.title}
                onChange={e => this.setState({ set: {...this.state.set, title: e.target.value} })} />
            </div>
            <div className={s.iconTextInput}>
              <i className={ 'fa fa-align-justify ' + s.fieldIcon } aria-hidden="true"></i>
              <input
                placeholder="description"
                type="text"
                value={this.state.set.description}
                onChange={e => this.setState({ set: {...this.state.set, description: e.target.value} })} />
            </div>
            <div className={s.iconTextInput}>
              <i className={ 'fa fa-tags ' + s.fieldIcon } aria-hidden="true"></i>
              <input
                placeholder="tags (comma separated)"
                type="text"
                value={this.state.set.tags}
                onChange={e => this.setState({ set: {...this.state.set, tags: e.target.value.split(',')} })} />
            </div>
            <h2>Type Info</h2>
            <div className={s.iconTextInput}>
              <i className={ 'fa fa-id-card ' + s.fieldIcon } aria-hidden="true"></i>
              <input
                placeholder="type title"
                type="text"
                value={this.state.type.title}
                onChange={e => this.setState({ type: {...this.state.type, title: e.target.value} })} />
            </div>
            <div className={s.iconTextInput}>
              <i className={ 'fa fa-align-justify ' + s.fieldIcon } aria-hidden="true"></i>
              <input
                placeholder="type description"
                type="text"
                value={this.state.type.description}
                onChange={e => this.setState({ type: {...this.state.type, description: e.target.value} })} />
            </div>
            <div className={s.iconTextInput}>
              <i className={ 'fa fa-tags ' + s.fieldIcon } aria-hidden="true"></i>
              <input
                placeholder="type tags (comma separated)"
                type="text"
                value={this.state.type.tags}
                onChange={e => this.setState({ type: {...this.state.type, tags: e.target.value.split(',')} })} />
            </div>
            <h2>Load CSV</h2>
            <div className={s.iconTextInput}>
              <i className={ 'fa fa-terminal ' + s.fieldIcon } aria-hidden="true"></i>
              <input
                placeholder="url to ingest csv"
                type="text"
                value={this.state.url}
                onChange={e => this.setState({ url: e.target.value })} />
            </div>
            <div className={s.submitArea}>
              <a className={s.primaryButton} onClick={this.getCSV}>retrieve csv</a>
              {(() => {
                if (this.state.loadingCSV) {
                  return (
                    <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
                  );
                }
              })()}
              <input type="submit" className={s.primaryButton} value="create new set" />
              {(() => {
                if (this.state.loadingSubmit) {
                  return (
                    <i className="fa fa-refresh fa-spin" aria-hidden="true"></i>
                  );
                }
              })()}
            </div>
          </form>
          <hr />
          <h2>Preview</h2>
          <br />
          <h3>type:</h3>
          <pre className={s.jsonArea}>
            {JSON.stringify(this.state.type, null, 2)}
          </pre>
          <h3>data set:</h3>
          <pre className={s.jsonArea}>
            {JSON.stringify({ ...this.state.set, items: this.state.set.items.slice(0, 10) }, null, 2)}
          </pre>
        </div>
      </div>
    );
  }
}
