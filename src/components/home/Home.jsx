import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

import request from 'superagent';
import Helmet from 'react-helmet';

const pitches = [
  {
    header: 'One All-Access API',
    icon: 'fa-globe',
    paragraph: 'Encompassing quality data from the financial, environmental, policy, transportation sectors and more to empower a wide range of industries and use cases.'
  },
  {
    header: 'We\'ll clean your Data',
    icon: 'fa-table',
    paragraph: 'Data scientists spend over 60% of their time reformatting data. Put Zenow to use - we can wrangle your data for you so you have more time to do the interpretation that matters.'
  },
  {
    header: 'Share your Data',
    icon: 'fa-users',
    paragraph: 'Upload your own dataset to Zenow and instantly make it accessible to a community of researchers and innovators. Through crowdsourcing, we can build a meaningful repository of knowledge together.'
  }
];


const codes = [
  {
    header: 'Create a Type Schema',
    code: 'curl http://api.zenow.io/v2/type -H \"Content-Type: application/json\" -X POST -d \n' + JSON.stringify({
      'title': 'MasterChef Contestant',
      'description': 'Describes information about a contestant on the TV show MasterChef.',
      'extends': 'person_type',
      'properties': {
        'type': 'object',
        'fields': {
          'seasonNumber': {
            'type': 'integer',
            'description': 'The season of the show he/she was on.'
          },
          'winningDish': {
            'type': 'text',
            'description': 'The name of the dish with which this contestant won the show.'
          },
        }
      }
    }, null, 2)
  },
  {
    header: 'Create a Data Set',
    code: 'curl http://api.zenow.io/v2/set -H \"Content-Type: application/json\" -X POST -d \n' + JSON.stringify({
      title: 'MasterChef Winners',
      description: 'A collection of people who have won MasterChef.',
      tags: ['Cooking', 'TV', 'Reality Show'],
      type: {
        _id: 'masterchef_contestant_type',
        title: 'MasterChef Contestant'
      }
    }, null, 2)
  },
  {
    header: 'Add To Your Data Set',
    code: 'curl http://api.zenow.io/v2/set/SET_ID/item -H \"Content-Type: application/json\" -X POST -d \n' + JSON.stringify([
      {
        name: 'Whitney Miller',
        age: 29,
        seasonNumber: 1,
        winningDish: 'Sweet shrimp on crispy corn bread with black eyed pea purée'
      },
      {
        name: 'Jennifer Behm',
        age: 39,
        seasonNumber: 2,
        winningDish: 'Stuffed Quail with Creamy Potatoes and Spinach'
      }
    ], null, 2)
  },
  {
    header: 'The World can Query your Data',
    code: 'curl http://api.zenow.io/v2/set/SET_ID/search?query=whitney -X GET\n" + "\n#RESULT...\n' + JSON.stringify({
      status: 200,
      read: {
        person_type: [
          {
            name: 'Whitney Miller',
            age: 29,
            seasonNumber: 1,
            winningDish: 'Sweet shrimp on crispy corn bread with black eyed pea purée',
            _type: 'masterchef_contestant_type',
            _id: 'AV1oywf2lkT-P01kds5-'
          }
        ]
      }
    }, null, 2)
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
    };
  }

  submitEmail = (location, e) => {
    e.preventDefault();
    let email = '';
    if (location === 'top') {
      email = this.state.top;
    } else {
      email = this.state.bottom;
    }
    request.post('/email')
        .send({ email: email })
        .end(() => {
          window.location = typeForm;
        });
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Zenow</title>
        </Helmet>
        <div className={s.banner}>
          <div className={s.cover} />
          <div key="title" className={s.centeredMessage + ' ' + s.largeHeader}>
            <h1>zenow</h1>
            <p>Find, Create and Share Public Data</p>
            <form className={s.emailBox} onSubmit={this.submitEmail.bind(null, 'top')}>
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
        <div className={s.pitchArea}>
          {pitches.map((pitch) => {
            return (
              <div className={s.pitchInner}>
                <i className={'fa ' + pitch.icon} />
                <section>
                  <h2>{pitch.header}</h2>
                  <p>{pitch.paragraph}</p>
                </section>
              </div>
            );
          })}
        </div>
        {codes.map((code) => {
          return (
            <div className={s.codeArea}>
              <div className={s.codeInner}>
                <h2>{code.header}</h2>
                <pre className="hljs">
                  <code className="bash">
                    {code.code}
                  </code>
                </pre>
              </div>
            </div>
          );
        })}
        <footer>
          <p>Join the Community</p>
          <form className={s.emailBox} onSubmit={this.submitEmail.bind(null, 'bottom')}>
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
