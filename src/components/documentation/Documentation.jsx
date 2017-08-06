import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { asyncConnect } from 'redux-async-connect';
import { Link } from 'react-router';
import {animateScroll, scroller} from 'react-scroll';
import RouteCategory from './RouteCategory.jsx';

import IntroAuth from './pages/IntroAuth.jsx';
import GetTutorial from './pages/GetTutorial.jsx';
import SearchTutorial from './pages/SearchTutorial.jsx';
import CreateSetTutorial from './pages/CreateSetTutorial.jsx';
import UpdateTutorial from './pages/UpdateTutorial.jsx';
import CreateTypeTutorial from './pages/CreateTypeTutorial.jsx';
import ApiTutorial from './pages/ApiTutorial.jsx';


import s from '../styles/index.scss';

const specialComponents = {
  'IntroAuth': IntroAuth,
  'ApiTutorial': ApiTutorial,
  'GetTutorial': GetTutorial,
  'SearchTutorial': SearchTutorial,
  'CreateSetTutorial': CreateSetTutorial,
  'UpdateTutorial': UpdateTutorial,
  'CreateTypeTutorial': CreateTypeTutorial
};

@asyncConnect([{
  promise: () => {
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
    params: PropTypes.object,
    categories: PropTypes.array,
    focus: PropTypes.string
  }
  constructor(props) {
    super(props);
    this.state = {
      sidePanelClosed: true
    };
  }
  componentDidMount() {
    this.goToProperPlace();
  }
  componentDidUpdate(prevProps) {
    if (this.props.params.topic !== prevProps.params.topic) {
      animateScroll.scrollToTop({
        containerId: 'docs',
        duration: 0
      });
    } else if (this.props.params.subTopic !== prevProps.params.subTopic) {
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
    let displayedCategory = {};
    let displayCategoryIndex = 0;
    this.props.categories.forEach((cat, index) => {
      if (cat.category === this.props.params.topic) {
        if (cat.specialComponent) {
          DocComponent = specialComponents[cat.specialComponent];
          displayedCategory = cat;
          displayCategoryIndex = index;
        } else {
          DocComponent = RouteCategory;
          displayedCategory = cat;
          displayCategoryIndex = index;
        }
      }
    });
    return (
      <div className={s.documentation}>
        <nav className={s.docNav + (this.state.sidePanelClosed ? ' ' + s.closed : '' )}>
          <i className={'fa ' + s.panelToggler + (this.state.sidePanelClosed ? ' fa-chevron-right' : ' fa-chevron-left')}
            onClick={() => this.setState({ sidePanelClosed: !this.state.sidePanelClosed })}></i>
          <ul className={s.categoryList} id="docNav">
            {this.props.categories.map((category) => {
              return (<li key={category.category}>
                <Link to={'/documentation/' + category.category} className={s.categoryHeader}
                    className={(category.category === this.props.params.topic) ? s.focused : ''}>
                  {category.category}
                </Link>
                <ul>
                  {(() => {
                    if (category.routes) {
                      return category.routes.map((route) => {
                        const thisSubTopic = route.method + route.path.replace(new RegExp('/', 'g'), ' ');
                        return (<li key={thisSubTopic}>
                          <Link to={'/documentation/' + category.category + '/' + thisSubTopic}
                              className={(thisSubTopic === this.props.focus) ? s.focused : ''}>
                            <span className={s.method}>{route.method}</span> {route.path}
                          </Link>
                        </li>);
                      });
                    }
                    return category.subTopics.map((subTopic) => {
                      return (<li key={subTopic.title}>
                        <Link to={'/documentation/' + category.category + '/' + subTopic.title}
                            className={(subTopic.title === this.props.focus) ? s.focused : ''}>
                          {subTopic.title}
                        </Link>
                      </li>);
                    });
                  })()}
                </ul>
              </li>);
            })}
          </ul>
        </nav>
        <div className={s.docContentContainer} id="docs">
          <DocComponent category={displayedCategory} />
          <div className={s.docSpacer}>
            {(() => {
              if (displayCategoryIndex > 0) {
                const categoryName = this.props.categories[displayCategoryIndex - 1].category;
                return (
                  <Link to={'/documentation/' + categoryName} className={s.previous}>
                    <i className="fa fa-chevron-left" /> {categoryName}
                  </Link>
                );
              }
            })()}
            {(() => {
              if (displayCategoryIndex < this.props.categories.length - 1) {
                const categoryName = this.props.categories[displayCategoryIndex + 1].category;
                return (
                  <Link to={'/documentation/' + categoryName} className={s.next}>
                    {categoryName} <i className="fa fa-chevron-right" />
                  </Link>
                );
              }
            })()}
          </div>
        </div>
      </div>
    );
  }
}
