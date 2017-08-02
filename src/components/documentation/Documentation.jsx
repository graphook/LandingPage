import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { Link } from 'react-router';
import sections from './sections';
import {scroller} from 'react-scroll';
import {browserHistory} from 'react-router';

import IntroAuth from './pages/IntroAuth.jsx';
import GetTutorial from './pages/GetTutorial.jsx';
import SearchTutorial from './pages/SearchTutorial.jsx';
import CreateSetTutorial from './pages/CreateSetTutorial.jsx';
import UpdateTutorial from './pages/UpdateTutorial.jsx';
import CreateTypeTutorial from './pages/CreateTypeTutorial.jsx';
import RouteCategory from './RouteCategory.jsx';

import s from '../styles/index.scss';

const specialComponents = {
  'IntroAuth': IntroAuth,
  'GetTutorial': GetTutorial,
  'SearchTutorial': SearchTutorial,
  'CreateSetTutorial': CreateSetTutorial,
  'UpdateTutorial': UpdateTutorial,
  'CreateTypeTutorial': CreateTypeTutorial
}

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const promises = [];
    return Promise.all(promises);
  }
}])
@connect((state) => ({
  categories: state.documentation.categories,
  focus: state.documentation.focus
}))
export default class Documentation extends Component {
  static propTypes = {
    params: PropTypes.object
  }
  constructor(props) {
    super(props);
    this.state = {
      sidePanelClosed: true
    }
  }
  componentDidMount() {
    this.goToProperPlace();
  }
  componentDidUpdate(prevProps) {
    if (this.props.params.subTopic !== prevProps.params.subTopic) {
      this.goToProperPlace();
    }
  }
  goToProperPlace = () => {
    scroller.scrollTo(this.props.params.subTopic, {
      offset: -4,
      containerId: 'docs'
    });
  }
  render() {
    let DocComponent = IntroAuth;
    let category = {};
    this.props.categories.forEach((cat) => {
      if (cat.category === this.props.params.topic) {
        if (cat.specialComponent) {
          DocComponent = specialComponents[cat.specialComponent];
          category = cat;
        } else {
          DocComponent = RouteCategory;
          category = cat;
        }
      }
    })
    return (
      <div className={s.documentation}>
        <nav className={s.docNav + (this.state.sidePanelClosed ? ' ' + s.closed : '' )}>
          <i className={'fa ' + s.panelToggler + (this.state.sidePanelClosed ? ' fa-chevron-right' : ' fa-chevron-left')}
            onClick={() => this.setState({ sidePanelClosed: !this.state.sidePanelClosed })}></i>
          <ul className={s.categoryList} id="docNav">
            {this.props.categories.map((category) => {
              return (<li>
                
                <Link to={'/documentation/' + category.category} className={s.categoryHeader}
                    className={(category.category === this.props.params.topic) ? s.focused : ''}>
                  {category.category}
                </Link>
                <ul>
                  {(() => {
                    if (category.routes) {
                      return category.routes.map((route) => {
                        const thisSubTopic = route.method + route.path.replace(new RegExp('/', 'g'), ' ')
                        return (<li>
                          <Link to={'/documentation/' + category.category + '/' + thisSubTopic}
                              className={(thisSubTopic === this.props.focus) ? s.focused : ''}>
                            <span className={s.method}>{route.method}</span> {route.path}
                          </Link>
                        </li>)
                      });
                    }
                    return category.subTopics.map((subTopic) => {
                      return (<li>
                        <Link to={'/documentation/' + category.category + '/' + subTopic.title}
                            className={(subTopic.title === this.props.focus) ? s.focused : ''}>
                          {subTopic.title}
                        </Link>
                      </li>);
                    });
                  })()}
                </ul>
              </li>)
            })}
          </ul>
        </nav>
        <div className={s.docContentContainer} id="docs">
          <DocComponent category={category} />
        </div>
      </div>
    );
  }
}
