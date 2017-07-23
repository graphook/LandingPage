import React, { Component, PropTypes } from 'react';

import s from '../styles/index.scss';

import request from 'superagent';
import Helmet from 'react-helmet';

const pitches = [
  {
    header: 'One All-Access API',
    icon: "fa-globe",
    paragraph: 'Encompassing quality data from the financial, environmental, policy, transportation sectors and more to empower a wide range of industries and use cases.'
  },
  {
    header: 'We\'ll clean your Data',
    icon: "fa-table",
    paragraph: 'Data scientists spend over 60% of their time reformatting data. Put Zenow to use - we can wrangle your data for you so you have more time to do the interpretation that matters.'
  },
  {
    header: 'Share your Data',
    icon: "fa-users",
    paragraph: 'Upload your own dataset to Zenow and instantly make it accessible to a community of researchers and innovators. Through crowdsourcing, we can build a meaningful repository of knowledge together.'
  }
];


const codes = [
  {
    header: "Create a Type Schema",
    code: "curl http://api.zenow.io/v2/type -H \"Content-Type: application/json\" -X POST -d \n" + JSON.stringify({
      "title": "Family",
      "description": "Describes a family unit. Usually one that lives in the same house.",
      "properties": {
        "type": "object",
        "fields": {
          "name": {
            "type": "text",
            "description": "The name of the person"
          },
          "age": {
            "type": "integer",
            "default": false,
            "description": "The age of the person in years."
          }
        }
      }
    }, null, 2)
  },
  {
    header: "Create a Data Set",
    code: "curl http://api.zenow.io/v2/set -H \"Content-Type: application/json\" -X POST -d \n" + JSON.stringify({
      title: "Master Chef Winners",
      description: "A collection of people who have won Master Chef.",
      tags: ["Cooking", "TV", "Reality Show"],
      type: {
        _id: "person_type",
        title: "Person"
      }
    }, null, 2)
  },
  {
    header: "Add To Your Data Set",
    code: "curl http://api.zenow.io/v2/set/SET_ID/item -H \"Content-Type: application/json\" -X POST -d \n" + JSON.stringify([
      {
        name: "Whitney Miller",
        age: 29
      },
      {
        name: "Jennifer Behm",
        age: 39
      }
    ], null, 2)
  },
  {
    header: "The World can Query your Data",
    code: "curl http://api.zenow.io/v2/set/SET_ID/search?query=whitney -X GET\n" + "\n#RESULT...\n" + JSON.stringify({
      status: 200,
      read: {
        person_type: [
          {
            name: "Whitney Miller",
            age: 29,
            _type: "person_type",
            _id: "AV1oywf2lkT-P01kds5-"
          }
        ]
      }
    }, null, 2)
  }
]

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
        <Helmet>
          <title>Zenow</title>
        </Helmet>
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
        <div className={s.pitchArea}>
          {pitches.map((pitch) => {
            return (
              <div className={s.pitchInner}>
                <i className={"fa " + pitch.icon} />
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
          )
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
