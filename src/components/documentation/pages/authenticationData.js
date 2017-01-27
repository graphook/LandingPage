import constants from 'constants';

const authenticationData = {
  userInfo: {
    request: {
      initMethod: 'GET',
      initPath: '/v1/user',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  updateUser: {
    bodyType: {
      type: 'object',
      fields: {
        email: {
          type: 'string',
          description: 'The user\'s new email',
          regex: constants.emailRegex
        }
      }
    },
    request: {
      initMethod: 'PUT',
      initPath: '/v1/user',
      initBody: {

      },
      initStatus: '201',
      initResponseBody: {}
    }
  },
  updatePassword: {
    bodyType: {
      type: 'object',
      requires: ['newPassword', 'oldPassword'],
      fields: {
        newPassword: {
          type: 'string',
          description: 'The desired new password. Passwords must consist of letters, numbers, or one of these symbols: $-/:-?{-~!\'^_`[]',
          regex: constants.passwordRegex
        },
        oldPassword: {
          type: 'string',
          description: 'The user\'s current password. Passwords must consist of letters, numbers, or one of these symbols: $-/:-?{-~!\'^_`[]',
          regex: constants.passwordRegex
        }
      }
    },
    request: {
      initMethod: 'PUT',
      initPath: '/v1/user/password',
      initBody: {

      },
      initStatus: '200',
      initResponseBody: {}
    }
  },
  generateNewKey: {
    request: {
      initMethod: 'PUT',
      initPath: '/v1/user/key',
      initStatus: '200',
      initResponseBody: {}
    }
  }
};

export default authenticationData;
