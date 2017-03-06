
const docData = {
  getSet: {
    request: {
      initMethod: 'GET',
      initPath: '/v1/set/58895a32ac72909f9a496314',
      initStatus: '200',
      initResponseBody: {
        'status': 200,
        'errors': {},
        'sets': {
          'read': [
            {
              '_id': '58895a32ac72909f9a496314',
              'title': 'Cartoon Families',
              'description': 'A list of cartoon families',
              'type': {
                '_id': '5889596bac72909f9a49630f',
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
                '58895a32ac72909f9a496315',
                '58896145ac72909f9a49632a',
                '58896145ac72909f9a49632b',
                '58896145ac72909f9a49632c'
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
      initPath: '/v1/set/58895a32ac72909f9a496314/item?count=2&page=0',
      initStatus: '200',
      initResponseBody: {
        'status': 200,
        'errors': {},
        'items': {
          'read': [
            {
              '_id': '58895a32ac72909f9a496315',
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
                '_id': '5889596bac72909f9a49630f',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '58895a32ac72909f9a496314',
                  '_title': 'Cartoon Families'
                }
              ]
            },
            {
              '_id': '58896145ac72909f9a49632a',
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
                '_id': '5889596bac72909f9a49630f',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '58895a32ac72909f9a496314',
                  '_title': 'Cartoon Families'
                }
              ]
            }
          ]
        }
      }
    }
  },
  searchItems: {
    request: {
      initMethod: 'POST',
      initPath: '/v1/set/58895a32ac72909f9a496314/item/search',
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
              '_id': '58896145ac72909f9a49632b',
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
                '_id': '5889596bac72909f9a49630f',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '58895a32ac72909f9a496314',
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
        'title': 'Cartoon Families 2, Electric Boogaloo',
        'description': 'A list of cartoon families. Used for the documentation.',
        'tags': ['cartoon', 'family', 'character', 'fiction', 'test', 'sample', 'example'],
        'type': '5889596bac72909f9a49630f',
        'items': [
          {
            'surname': 'Simpson',
            'people': [
              {
                'firstName': 'Homer',
                'age': 39,
                'isParent': true
              },
              {
                'firstName': 'Marge',
                'age': 36,
                'isParent': true
              },
              {
                'firstName': 'Bart',
                'age': 10,
                'isParent': false
              },
              {
                'firstName': 'Lisa',
                'age': 8,
                'isParent': false
              },
              {
                'firstName': 'Maggie',
                'age': 1,
                'isParent': false
              }
            ],
            'lives': [
              'Springfield'
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
              '_id': '5889596bac72909f9a49630f',
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
              'uses': [
                {
                  '_id': '58895a32ac72909f9a496314',
                  'title': 'Cartoon Families'
                },
                {
                  '_id': '588a9fcaeef4e4a5c066d8bb',
                  'title': 'Cartoon Families 2, Electric Boogaloo'
                }
              ],
              'numUses': 2
            }
          ]
        },
        'sets': {
          'created': [
            {
              '_id': '588a9fcaeef4e4a5c066d8bb',
              'title': 'Cartoon Families 2, Electric Boogaloo',
              'description': 'A list of cartoon families. Used for the documentation.',
              'type': {
                '_id': '5889596bac72909f9a49630f',
                'title': 'Family'
              },
              'tags': [
                'cartoon',
                'family',
                'character',
                'fiction',
                'test',
                'sample',
                'example'
              ],
              'creator': {
                '_id': '586ec2e73c4e8c1fdb7ac068',
                'username': 'jackson'
              },
              'stars': 0,
              'items': [
                '588a9fcaeef4e4a5c066d8bc'
              ]
            }
          ]
        },
        'items': {
          'created': [
            {
              'surname': 'Simpson',
              'people': [
                {
                  'firstName': 'Homer',
                  'age': 39,
                  'isParent': true
                },
                {
                  'firstName': 'Marge',
                  'age': 36,
                  'isParent': true
                },
                {
                  'firstName': 'Bart',
                  'age': 10,
                  'isParent': false
                },
                {
                  'firstName': 'Lisa',
                  'age': 8,
                  'isParent': false
                },
                {
                  'firstName': 'Maggie',
                  'age': 1,
                  'isParent': false
                }
              ],
              'lives': [
                'Springfield'
              ],
              '_type': {
                '_id': '5889596bac72909f9a49630f',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '588a9fcaeef4e4a5c066d8bb',
                  '_title': 'Cartoon Families 2, Electric Boogaloo'
                }
              ],
              '_id': '588a9fcaeef4e4a5c066d8bc'
            }
          ]
        }
      }
    }
  },
  addItems: {
    request: {
      initMethod: 'POST',
      initPath: '/v1/set/588a9fcaeef4e4a5c066d8bb/item',
      initStatus: '200',
      initBody: [
        '58896145ac72909f9a49632c',
        {
          'surname': 'Smith',
          'people': [
            {
              'firstName': 'Rick',
              'age': 90,
              'isParent': false
            },
            {
              'firstName': 'Beth',
              'age': 34,
              'isParent': true
            },
            {
              'firstName': 'Jerry',
              'age': 34,
              'isParent': true
            },
            {
              'firstName': 'Summer',
              'age': 17,
              'isParent': false
            },
            {
              'firstName': 'Morty',
              'age': 14,
              'isParent': true
            }
          ],
          'lives': [
            'Earth'
          ]
        }
      ],
      initResponseBody: {
        'status': 200,
        'errors': {},
        'sets': {
          'updated': [
            {
              '_id': '588a9fcaeef4e4a5c066d8bb',
              'title': 'Cartoon Families 2, Electric Boogaloo',
              'description': 'A list of cartoon families. Used for the documentation.',
              'type': {
                '_id': '5889596bac72909f9a49630f',
                'title': 'Family'
              },
              'tags': [
                'cartoon',
                'family',
                'character',
                'fiction',
                'test',
                'sample',
                'example'
              ],
              'creator': {
                '_id': '586ec2e73c4e8c1fdb7ac068',
                'username': 'jackson'
              },
              'stars': 0,
              'items': [
                '588a9fcaeef4e4a5c066d8bc',
                '58896145ac72909f9a49632c',
                '588aa234eef4e4a5c066d8c5'
              ]
            }
          ]
        },
        'items': {
          'read': [
            {
              '_id': '58896145ac72909f9a49632c',
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
                '_id': '5889596bac72909f9a49630f',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '58895a32ac72909f9a496314',
                  '_title': 'Cartoon Families'
                }
              ]
            }
          ],
          'created': [
            {
              'surname': 'Smith',
              'people': [
                {
                  'firstName': 'Rick',
                  'age': 90,
                  'isParent': false
                },
                {
                  'firstName': 'Beth',
                  'age': 34,
                  'isParent': true
                },
                {
                  'firstName': 'Jerry',
                  'age': 34,
                  'isParent': true
                },
                {
                  'firstName': 'Summer',
                  'age': 17,
                  'isParent': false
                },
                {
                  'firstName': 'Morty',
                  'age': 14,
                  'isParent': true
                }
              ],
              'lives': [
                'Earth'
              ],
              '_type': {
                '_id': '5889596bac72909f9a49630f',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '588a9fcaeef4e4a5c066d8bb',
                  '_title': 'Cartoon Families 2, Electric Boogaloo'
                }
              ],
              '_id': '588aa234eef4e4a5c066d8c5'
            }
          ],
          'updated': [
            {
              '_id': '58896145ac72909f9a49632c',
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
                '_id': '5889596bac72909f9a49630f',
                '_type': 'Family'
              },
              '_sets': [
                {
                  '_id': '58895a32ac72909f9a496314',
                  '_title': 'Cartoon Families'
                },
                {
                  '_id': '588a9fcaeef4e4a5c066d8bb',
                  'title': 'Cartoon Families 2, Electric Boogaloo'
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
