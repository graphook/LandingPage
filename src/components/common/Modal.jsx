import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import {close} from 'redux/modules/modal';

import s from '../styles/index.scss';

@connect(state => ({
  component: state.modal.component,
  open: state.modal.open
}), {close})
export default class Modal extends Component {
  static propTypes = {
    component: PropTypes.any,
    close: PropTypes.func.isRequired
  };
  render() {
    const ModalComponent = this.props.component;
    return (
      <div className={s.modalConainer}>
        <div className={s.modalCover} onClick={this.props.close} />
        <div className={s.modalArea + ' ' + s.clickableShadow}>
          <i className={'fa fa-times ' + s.modalExit} onClick={this.props.close}></i>
          <ModalComponent whenDone={this.props.close} />
        </div>
      </div>
    );
  }
}
