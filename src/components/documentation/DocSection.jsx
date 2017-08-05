import React, {Component, PropTypes} from 'react';
import RequestTool from './RequestTool.jsx';

import s from 'components/styles/index.scss';

export default class DocSection extends Component {
  static propTypes = {
    children: PropTypes.element,
    route: PropTypes.object
  }
  render() {
    return (
      <div className={s.route}>
        <div className={s.routeDescription}>
          {this.props.children}
        </div>
        {(() => {
          if (this.props.route) {
            return (
              <div className={s.routeExample}>
                <RequestTool route={this.props.route} />
              </div>
            );
          }
        })()}
      </div>
    );
  }
}
