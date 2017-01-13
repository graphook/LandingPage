import React, { Component, PropTypes } from 'react';
import { asyncConnect } from 'redux-async-connect';
import { connect } from 'react-redux';
import {fetchType} from 'redux/modules/typeDetails';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

import s from '../styles/index.scss';

@asyncConnect([{
  promise: ({store: {dispatch}, params: {id}}) => {
    const promises = [];
    promises.push(dispatch(fetchType(id)));
    return Promise.all(promises);
  }
}])
@connect(state => ({
  id: state.typeDetails.id,
  type: state.type.hash[state.typeDetails.id],
  error: state.typeDetails.error
}), {fetchType})
export default class Set extends Component {
  static propTypes = {
    params: PropTypes.shape({
      id: PropTypes.string
    }),
    fetchType: PropTypes.func,
    type: PropTypes.object,
    id: PropTypes.string
  };
  constructor(props) {
    super(props);
    this.state = {
      horizontalScrollOffset: 0
    };
  }
  componentDidMount() {
    this.node = ReactDOM.findDOMNode(this);
  }

  handleScroll = () => {
    if (this.state.horizontalScrollOffset !== this.node.scrollLeft) {
      this.setState({horizontalScrollOffset: this.node.scrollLeft});
    }
  }
  render() {
    return (
      <div className={s.type} onScroll={this.handleScroll}>
        <div className={s.infoArea} style={{marginLeft: this.state.horizontalScrollOffset}}>
          <div className={s.typeInfo}>
            <div>
              <h1>{this.props.type.title} ({this.props.type._id})</h1>
              <p>{this.props.type.description}</p>
            </div>
            <nav>
              <span>
                <i className="fa fa-table"></i> {this.props.type.numUses}
              </span>
              <Link to="/">
                <i className="fa fa-book"></i>rest api
              </Link>
            </nav>
          </div>
        </div>
        <pre className={s.jsonArea}>
          {JSON.stringify(this.props.type.properties, null, 2)}
        </pre>
      </div>
    );
  }
}
