import React from 'react';
import AuthPrompt from 'components/login/AuthPrompt.jsx';

const OPEN = 'modal/OPEN';
const CLOSE = 'modal/CLOSE';

const initialState = {
  open: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case OPEN:
      return {
        open: true,
        component: action.component
      };
    case CLOSE:
      return {
        open: false
      };
    default:
      return state;
  }
}

export function open(component) {
  return {
    type: OPEN,
    component: component
  };
}

export function close() {
  return {
    type: CLOSE
  };
}

export function promptSignIn() {
  return {
    type: OPEN,
    component: <AuthPrompt loginFocus={false} />
  };
}
