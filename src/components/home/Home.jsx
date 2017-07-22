import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

import request from 'superagent';

const pitches = [
  {
    img: '/images/docs.png',
    header: 'One All-Access API',
    paragraph: 'Encompassing quality data from the financial, environmental, policy, transportation sectors and more to empower a wide range of industries and use cases.'
  },
  {
    img: '/images/type.png',
    header: 'Let us do the Cleaning for you',
    paragraph: 'Data scientists spend over 60% of their time reformatting data. Put Zenow to use - we can wrangle your data for you so you have more time to do the interpretation that matters.'
  },
  {
    img: '/images/table.png',
    header: 'Share your Data with the World',
    paragraph: 'Upload your own dataset to Zenow and instantly make it accessible to a community of researchers and innovators. We believe that through crowdsourcing, we can build a meaningful repository of knowledge together.'
  }
];

const typeForm = 'https://zenow.typeform.com/to/AjrN4o';

export default class Home extends Component {
  static propTypes = {
    location: PropTypes.object,
    params: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      top: '',
      bottom: ''
    }
  }

  submitEmail = (location, e) => {
    e.preventDefault();
    let email = '';
    if (location === "top") {
      email = this.state.top;
    } else {
      email = this.state.bottom;
    }
    request.post('/email')
        .send({ email: email })
        .end((err, res) => {
          window.location = typeForm;
        });
  }

  render() {
    return (
      <div>
        <div className={s.banner}>
          <div className={s.cover} />
          <div key="title" className={s.centeredMessage + ' ' + s.largeHeader}>
            <h1>zenow</h1>
            <p>Find, Create and Share Public Data</p>
            <form className={s.emailBox} onSubmit={this.submitEmail.bind(null, "top")}>
              <input
                  type="text"
                  value={this.state.top}
                  onChange={(e) => this.setState({top: e.target.value})}
                  placeholder="Email" />
              <input type="submit" value="Get in Early" />
            </form>
          </div>
        </div>
        <div className={s.cards} />
        <div className={s.bannerSpacer} />
        {pitches.map((pitch) => {
          return (
            <div className={s.pitchArea}>
              <div className={s.pitchInner}>
                <img src={pitch.img} />
                <section>
                  <h2>{pitch.header}</h2>
                  <p>{pitch.paragraph}</p>
                </section>
              </div>
            </div>
          );
        })}
        <footer>
          <p>Join the Community</p>
          <form className={s.emailBox} onSubmit={this.submitEmail.bind(null, "bottom")}>
            <input
                type="text"
                value={this.state.bottom}
                onChange={(e) => this.setState({bottom: e.target.value})}
                placeholder="Email" />
            <input type="submit" value="Get in Early" />
          </form>
        </footer>
      </div>
    );
  }
}
