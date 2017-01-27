import constants from 'constants';

const typeData = {
  basicSearch: {
    paramType: {
      type: 'object',
      fields: {
        count: {
          type: 'string',
          default: '10',
          regex: constants.numberRegex
        },
        page: {
          type: 'string',
          default: '0',
          regex: constants.numberRegex
        },
        q: {
          type: 'string'
        }
      }
    },
    request: {
      initMethod: 'GET',
      initPath: '/v1/type',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  getType: {
    request: {
      initMethod: 'GET',
      initPath: '/v1/type/:INSERT_TYPE_ID',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  createType: {
    bodyType: {
      type: 'object',
      required: ['title', 'properties'],
      fields: {
        title: {
          type: 'string',
          description: 'The title of the type.'
        },
        description: {
          type: 'string',
          default: ''
        },
        properties: {
          requires: ['type'],
          type: 'object',
          allowOtherFields: true,
          fields: {
            type: {
              type: 'constant',
              value: 'object'
            }
          },
          allowOtherProperties: true
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          },
          default: [],
        }
      }
    },
    request: {
      initMethod: 'POST',
      initPath: '/v1/type',
      initStatus: '201',
      initResponseBody: {}
    }
  },
  updateType: {
    bodyType: {
      type: 'object',
      fields: {
        title: {
          type: 'string',
          description: 'The title of the type.'
        },
        description: {
          type: 'string'
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          }
        }
      }
    },
    request: {
      initMethod: 'PUT',
      initPath: '/v1/type/INSERT_TYPE_ID',
      initStatus: '200',
      initResponseBody: {}
    }
  }
};

export default typeData;
