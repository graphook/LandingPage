
const docData = {
  getSet: {
    request: {
      initMethod: 'GET',
      initPath: '/v1/set/587fd64b8ba914505141a430',
      initStatus: '200',
      initResponseBody: {
        'status': 200,
        'errors': {},
        'sets': {
          'read': [
            {
              '_id': '587fd64b8ba914505141a430',
              'title': 'Cartoon Families',
              'description': 'A list of cartoon families. This is used as a demo set for the documentation.',
              'type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                'title': 'Family'
              },
              'tags': [
                'cartoon',
                'family',
                'character',
                'fiction',
                'demo',
                'test'
              ],
              'creator': {
                '_id': '586ec2e73c4e8c1fdb7ac068',
                'username': 'jackson'
              },
              'stars': 0,
              'items': [
                '587fd64b8ba914505141a431',
                '587fd64b8ba914505141a432',
                '587fd64b8ba914505141a433',
                '587fd64b8ba914505141a434'
              ]
            }
          ]
        }
      }
    }
  },
  getItems: {
    request: {
      initMethod: 'GET',
      initPath: '/v1/set/587fd64b8ba914505141a430/item?count=10&page=0',
      initStatus: '200',
      initResponseBody: {}
    }
  },
  searchItems: {
    request: {
      initMethod: 'POST',
      initPath: '/v1/set/587fd64b8ba914505141a430/item/search',
      initStatus: '200',
      initBody: {
        surname: 'Turner'
      },
      initResponseBody: {
        'status': 200,
        'errors': {},
        'items': {
          'read': [
            {
              '_id': '587fd64b8ba914505141a433',
              'surname': 'Turner',
              'people': [
                {
                  'firstName': 'Timmy',
                  'age': 10,
                  'isParent': false
                },
                {
                  'firstName': 'Dad',
                  'age': 42,
                  'isParent': true
                },
                {
                  'firstName': 'Mom',
                  'age': 40,
                  'isParent': true
                }
              ],
              'lives': [
                'Dimmsdale'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '587fd64b8ba914505141a430',
                  '_title': 'Cartoon Families'
                }
              ]
            }
          ]
        }
      }
    }
  },
  createSet: {
    request: {
      initMethod: 'POST',
      initPath: '/v1/set',
      initStatus: '201',
      initBody: {
        'title': 'Cartoon Families',
        'description': 'A list of cartoon families',
        'tags': ['cartoon', 'family', 'character', 'fiction'],
        'type': '5876fd4c6dbcdd0018867d78',
        'items': [
          {
            'surname': 'Waterson',
            'people': [
              {
                'firstName': 'Gumball',
                'age': 12,
                'isParent': false
              },
              {
                'firstName': 'Darwin',
                'age': 10,
                'isParent': false
              },
              {
                'firstName': 'Anais',
                'age': 4,
                'isParent': false
              },
              {
                'firstName': 'Nicole',
                'age': 38,
                'isParent': true
              },
              {
                'firstName': 'Richard',
                'age': 38,
                'isParent': true
              }
            ],
            'lives': [
              'Elmore'
            ]
          }
        ]
      },
      initResponseBody: {
        'status': 200,
        'errors': {},
        'types': {
          'updated': [
            {
              '_id': '5876fd4c6dbcdd0018867d78',
              'title': 'Family',
              'description': 'Describes a family unit. Usually one that lives in the same house.',
              'properties': {
                'type': 'object',
                'fields': {
                  'surname': {
                    'type': 'string',
                    'description': ''
                  },
                  'people': {
                    'type': 'array',
                    'items': {
                      'type': 'object',
                      'fields': {
                        'firstName': {
                          'type': 'string',
                          'description': ''
                        },
                        'age': {
                          'type': 'number',
                          'description': ''
                        },
                        'isParent': {
                          'type': 'boolean',
                          'description': ''
                        }
                      },
                      'description': ''
                    },
                    'description': ''
                  },
                  'lives': {
                    'type': 'array',
                    'items': {
                      'type': 'string',
                      'description': ''
                    },
                    'description': ''
                  }
                },
                'description': ''
              },
              'tags': [],
              'uses': [
                {
                  '_id': '587fd64b8ba914505141a430',
                  'title': 'Cartoon Families'
                },
                {
                  '_id': '5880ed444e10815876f88cb2',
                  'title': 'Cartoon Families'
                }
              ],
              'numUses': 2
            }
          ]
        },
        'sets': {
          'created': [
            {
              '_id': '5880ed444e10815876f88cb2',
              'title': 'Cartoon Families',
              'description': 'A list of cartoon families',
              'type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                'title': 'Family'
              },
              'tags': [
                'cartoon',
                'family',
                'character',
                'fiction'
              ],
              'creator': {
                '_id': '586ec2e73c4e8c1fdb7ac068',
                'username': 'jackson'
              },
              'stars': 0,
              'items': [
                '5880ed444e10815876f88cb3'
              ]
            }
          ]
        },
        'items': {
          'created': [
            {
              'surname': 'Waterson',
              'people': [
                {
                  'firstName': 'Gumball',
                  'age': 12,
                  'isParent': false
                },
                {
                  'firstName': 'Darwin',
                  'age': 10,
                  'isParent': false
                },
                {
                  'firstName': 'Anais',
                  'age': 4,
                  'isParent': false
                },
                {
                  'firstName': 'Nicole',
                  'age': 38,
                  'isParent': true
                },
                {
                  'firstName': 'Richard',
                  'age': 38,
                  'isParent': true
                }
              ],
              'lives': [
                'Elmore'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5880ed444e10815876f88cb2',
                  '_title': 'Cartoon Families'
                }
              ],
              '_id': '5880ed444e10815876f88cb3'
            }
          ]
        }
      }
    }
  },
  addItems: {
    request: {
      initMethod: 'POST',
      initPath: '/v1/set/5880ed444e10815876f88cb2/item',
      initStatus: '200',
      initBody: [
        '5876fd7e6dbcdd0018867d7c',
        '5876fd7e6dbcdd0018867d7d',
        {
          'surname': 'Neutron',
          'people': [
            {
              'firstName': 'Jimmy',
              'age': 12,
              'isParent': false
            },
            {
              'firstName': 'Hugh',
              'age': 40,
              'isParent': true
            },
            {
              'firstName': 'Judy',
              'age': 40,
              'isParent': true
            }
          ],
          'lives': [
            'Retroville'
          ]
        },
        {
          'surname': 'Turner',
          'people': [
            {
              'firstName': 'Timmy',
              'age': 10,
              'isParent': false
            },
            {
              'firstName': 'Dad',
              'age': 42,
              'isParent': true
            },
            {
              'firstName': 'Mom',
              'age': 40,
              'isParent': true
            }
          ],
          'lives': [
            'Dimmsdale'
          ]
        },
        {
          'surname': 'Gaang',
          'people': [
            {
              'firstName': 'Aang',
              'age': 12,
              'isParent': false
            },
            {
              'firstName': 'Zuko',
              'age': 16,
              'isParent': false
            },
            {
              'firstName': 'Katara',
              'age': 14,
              'isParent': false
            },
            {
              'firstName': 'Sokka',
              'age': 15,
              'isParent': false
            },
            {
              'firstName': 'Toph',
              'age': 12,
              'isParent': false
            }
          ],
          'lives': [
            'Water Tribes',
            'Earth Kingdom',
            'Fire Nation',
            'Air Temples'
          ]
        }
      ],
      initResponseBody: {
        'status': 200,
        'errors': {},
        'sets': {
          'updated': [
            {
              '_id': '5880ed444e10815876f88cb2',
              'title': 'Cartoon Families',
              'description': 'A list of cartoon families',
              'type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                'title': 'Family'
              },
              'tags': [
                'cartoon',
                'family',
                'character',
                'fiction'
              ],
              'creator': {
                '_id': '586ec2e73c4e8c1fdb7ac068',
                'username': 'jackson'
              },
              'stars': 0,
              'items': [
                '5880ed444e10815876f88cb3',
                '5876fd7e6dbcdd0018867d7c',
                '5876fd7e6dbcdd0018867d7d',
                '5880ee9bebe2fa58b13d7e6f',
                '5880ee9bebe2fa58b13d7e70',
                '5880ee9bebe2fa58b13d7e71'
              ]
            }
          ]
        },
        'items': {
          'read': [
            {
              '_id': '5876fd7e6dbcdd0018867d7c',
              'surname': 'Waterson',
              'people': [
                {
                  'firstName': 'Gumball',
                  'age': 12,
                  'isParent': false
                },
                {
                  'firstName': 'Darwin',
                  'age': 10,
                  'isParent': false
                },
                {
                  'firstName': 'Anais',
                  'age': 4,
                  'isParent': false
                },
                {
                  'firstName': 'Nicole',
                  'age': 38,
                  'isParent': true
                },
                {
                  'firstName': 'Richard',
                  'age': 38,
                  'isParent': true
                }
              ],
              'lives': [
                'Elmore'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5876fd7e6dbcdd0018867d7b',
                  '_title': 'Cartoon Families'
                }
              ]
            },
            {
              '_id': '5876fd7e6dbcdd0018867d7d',
              'surname': 'Neutron',
              'people': [
                {
                  'firstName': 'Jimmy',
                  'age': 12,
                  'isParent': false
                },
                {
                  'firstName': 'Hugh',
                  'age': 40,
                  'isParent': true
                },
                {
                  'firstName': 'Judy',
                  'age': 40,
                  'isParent': true
                }
              ],
              'lives': [
                'Retroville'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5876fd7e6dbcdd0018867d7b',
                  '_title': 'Cartoon Families'
                }
              ]
            }
          ],
          'created': [
            {
              'surname': 'Neutron',
              'people': [
                {
                  'firstName': 'Jimmy',
                  'age': 12,
                  'isParent': false
                },
                {
                  'firstName': 'Hugh',
                  'age': 40,
                  'isParent': true
                },
                {
                  'firstName': 'Judy',
                  'age': 40,
                  'isParent': true
                }
              ],
              'lives': [
                'Retroville'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5880ed444e10815876f88cb2',
                  '_title': 'Cartoon Families'
                }
              ],
              '_id': '5880ee9bebe2fa58b13d7e6f'
            },
            {
              'surname': 'Turner',
              'people': [
                {
                  'firstName': 'Timmy',
                  'age': 10,
                  'isParent': false
                },
                {
                  'firstName': 'Dad',
                  'age': 42,
                  'isParent': true
                },
                {
                  'firstName': 'Mom',
                  'age': 40,
                  'isParent': true
                }
              ],
              'lives': [
                'Dimmsdale'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5880ed444e10815876f88cb2',
                  '_title': 'Cartoon Families'
                }
              ],
              '_id': '5880ee9bebe2fa58b13d7e70'
            },
            {
              'surname': 'Gaang',
              'people': [
                {
                  'firstName': 'Aang',
                  'age': 12,
                  'isParent': false
                },
                {
                  'firstName': 'Zuko',
                  'age': 16,
                  'isParent': false
                },
                {
                  'firstName': 'Katara',
                  'age': 14,
                  'isParent': false
                },
                {
                  'firstName': 'Sokka',
                  'age': 15,
                  'isParent': false
                },
                {
                  'firstName': 'Toph',
                  'age': 12,
                  'isParent': false
                }
              ],
              'lives': [
                'Water Tribes',
                'Earth Kingdom',
                'Fire Nation',
                'Air Temples'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5880ed444e10815876f88cb2',
                  '_title': 'Cartoon Families'
                }
              ],
              '_id': '5880ee9bebe2fa58b13d7e71'
            }
          ],
          'updated': [
            {
              '_id': '5876fd7e6dbcdd0018867d7c',
              'surname': 'Waterson',
              'people': [
                {
                  'firstName': 'Gumball',
                  'age': 12,
                  'isParent': false
                },
                {
                  'firstName': 'Darwin',
                  'age': 10,
                  'isParent': false
                },
                {
                  'firstName': 'Anais',
                  'age': 4,
                  'isParent': false
                },
                {
                  'firstName': 'Nicole',
                  'age': 38,
                  'isParent': true
                },
                {
                  'firstName': 'Richard',
                  'age': 38,
                  'isParent': true
                }
              ],
              'lives': [
                'Elmore'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5876fd7e6dbcdd0018867d7b',
                  '_title': 'Cartoon Families'
                },
                '5880ed444e10815876f88cb2'
              ],
              '_setTitles': [
                'Cartoon Families'
              ]
            },
            {
              '_id': '5876fd7e6dbcdd0018867d7d',
              'surname': 'Neutron',
              'people': [
                {
                  'firstName': 'Jimmy',
                  'age': 12,
                  'isParent': false
                },
                {
                  'firstName': 'Hugh',
                  'age': 40,
                  'isParent': true
                },
                {
                  'firstName': 'Judy',
                  'age': 40,
                  'isParent': true
                }
              ],
              'lives': [
                'Retroville'
              ],
              '_type': {
                '_id': '5876fd4c6dbcdd0018867d78',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '5876fd7e6dbcdd0018867d7b',
                  '_title': 'Cartoon Families'
                }
              ]
            }
          ]
        }
      }
    }
  },
  createType: {
    request: {
      initMethod: 'POST',
      initPath: '/v1/type',
      initStatus: '200',
      initBody: {
        'title': 'Family',
        'description': 'Describes a family unit. Usually one that lives in the same house.',
        'properties': {
          'type': 'object',
          'fields': {
            'surname': {
              'type': 'string'
            },
            'people': {
              'type': 'array',
              'items': {
                'type': 'object',
                'fields': {
                  'firstName': {
                    'type': 'string'
                  },
                  'age': {
                    'type': 'number'
                  },
                  'isParent': {
                    'type': 'boolean'
                  }
                }
              }
            },
            'lives': {
              'type': 'array',
              'items': {
                'type': 'string'
              }
            }
          }
        }
      },
      initResponseBody: {
        'status': 200,
        'errors': {},
        'types': {
          'created': [
            {
              'title': 'Family',
              'description': 'Describes a family unit. Usually one that lives in the same house.',
              'properties': {
                'type': 'object',
                'fields': {
                  'surname': {
                    'type': 'string',
                    'description': ''
                  },
                  'people': {
                    'type': 'array',
                    'items': {
                      'type': 'object',
                      'fields': {
                        'firstName': {
                          'type': 'string',
                          'description': ''
                        },
                        'age': {
                          'type': 'number',
                          'description': ''
                        },
                        'isParent': {
                          'type': 'boolean',
                          'description': ''
                        }
                      },
                      'requires': [],
                      'description': '',
                      'allowOtherFields': false
                    },
                    'description': ''
                  },
                  'lives': {
                    'type': 'array',
                    'items': {
                      'type': 'string',
                      'description': ''
                    },
                    'description': ''
                  }
                },
                'requires': [],
                'description': '',
                'allowOtherFields': false
              },
              'tags': [],
              'uses': [],
              'numUses': 0,
              '_id': '5880f08debe2fa58b13d7e78'
            }
          ]
        }
      }
    }
  }
};

export default docData;
