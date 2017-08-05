import React, {Component, PropTypes} from 'react';

export default class RequestTool extends Component {
  static propTypes = {
    route: PropTypes.object
  }

  render() {
    if (this.props.route) {
      return (
        <div>
          <p>Method, URL</p>
          <pre className="hljs">
            <code className="bash">
              {this.props.route.sample.method}, {this.props.route.protocol}://{this.props.route.domain}{this.props.route.sample.path}
            </code>
          </pre>
          {(() => {
            if (this.props.route.sample.requestBody) {
              return [
                <p>Request Body</p>,
                <pre className="hljs">
                  <code className="json">
                    {JSON.stringify(this.props.route.sample.requestBody, null, 2)}
                  </code>
                </pre>
              ];
            }
          })()}
          <p>Response Body</p>
          <pre className="hljs">
            <code className="json">
              {JSON.stringify(this.props.route.sample.responseBody, null, 2)}
            </code>
          </pre>
        </div>
      );
    }
    return <div />;
  }
}
