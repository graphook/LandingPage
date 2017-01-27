import constants from 'constants';

const setData = {
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
          type: 'string',
          default: ''
        }
      }
    },
    request: {
      initMethod: 'GET',
      initPath: '/v1/set?q=family&page=0&count=2',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  getSet: {
    request: {
      initMethod: 'GET',
      initPath: '/v1/set/INSERT_SET_ID',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  advancedSearch: {
    bodyType: {
      type: 'object',
      fields: {},
      allowOtherFields: true
    },
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
        }
      }
    },
    request: {
      initMethod: 'POST',
      initPath: '/v1/set/search',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  createSet: {
    bodyType: {
      type: 'object',
      required: ['title', 'type'],
      fields: {
        title: {
          type: 'string',
          description: 'The title of the type.'
        },
        description: {
          type: 'string',
          default: ''
        },
        tags: {
          type: 'array',
          items: {
            type: 'string'
          },
          default: [],
        },
        type: {
          type: 'id'
        },
        items: {
          type: 'array',
          items: {
            type: 'any'
          }
        }
      }
    },
    request: {
      initMethod: 'POST',
      initPath: '/v1/set',
      initStatus: '201',
      initResponseBody: {}
    }
  },
  updateSet: {
    bodyType: {
      type: 'object',
      fields: {
        title: {
          type: 'string',
          description: 'The title of the set.'
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
      initPath: '/v1/set/INSERT_SET_ID',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  starSet: {
    request: {
      initMethod: 'PUT',
      initPath: '/v1/set/INSERT_SET_ID/star',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  unstarSet: {
    request: {
      initMethod: 'PUT',
      initPath: '/v1/set/INSERT_SET_ID/unstar',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  deleteSet: {
    request: {
      initMethod: 'DELETE',
      initPath: '/v1/set/INSERT_SET_ID',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  getItem: {
    request: {
      initMethod: 'DELETE',
      initPath: '/v1/set/INSERT_SET_ID/item/INSERT_ITEM_ID',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  itemAdvancedSearch: {
    bodyType: {
      type: 'object',
      fields: {},
      allowOtherFields: true
    },
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
        }
      }
    },
    request: {
      initMethod: 'POST',
      initPath: '/v1/set/INSERT_SET_ID/item/search',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  addItem: {
    bodyType: {
      type: 'array',
      items: {
        type: 'any'
      }
    },
    request: {
      initMethod: 'POST',
      initPath: '/v1/set/INSERT_SET_ID/item/search',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  deleteItem: {
    request: {
      initMethod: 'DELETE',
      initPath: '/v1/set/INSERT_SET_ID/item/INSERT_ITEM_ID',
      initStatus: '200',
      initResponseBody: {}
    }
  }
};

export default setData;
