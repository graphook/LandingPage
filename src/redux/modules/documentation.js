
const SET_FOCUS = 'documentation/SET_FOCUS';

const initialState = {
  loaded: false,
  focus: '',
  categories: [
    {
      'category': 'Introduction and Authentication',
      'specialComponent': 'IntroAuth',
      'subTopics': [
        {
          'title': 'Get Your Developer Account'
        },
        {
          'title': 'Understanding HTTP Requests'
        },
        {
          'title': 'Understanding JSON'
        }
      ]
    },
    {
      'category': 'Zenow API Tutorial',
      'specialComponent': 'ApiTutorial',
      'subTopics': [
        {
          'title': 'Data Structure'
        },
        {
          'title': 'Zenow Responses'
        }
      ]
    },
    {
      'category': 'Get Objects Tutorial',
      'specialComponent': 'GetTutorial',
      'subTopics': [
        {
          'title': 'Get a Set'
        },
        {
          'title': 'Get Items in a Set'
        },
        {
          'title': 'Get a Type'
        }
      ]
    },
    {
      'category': 'Search Tutorial',
      'specialComponent': 'SearchTutorial',
      'subTopics': [
        {
          'title': 'Basic Search'
        },
        {
          'title': 'Advanced Search'
        }
      ]
    },
    {
      'category': 'Create a Set Tutorial',
      'specialComponent': 'CreateSetTutorial',
      'subTopics': [
        {
          'title': 'Create your own Set'
        },
        {
          'title': 'Add Items to a Set'
        },
        {
          'title': 'Other Set Operations'
        }
      ]
    },
    {
      'category': 'Update Objects Tutorial',
      'specialComponent': 'UpdateTutorial',
      'subTopics': [
        {
          'title': 'Using Mongo Queries'
        }
      ]
    },
    {
      'category': 'Create a Type Tutorial',
      'specialComponent': 'CreateTypeTutorial',
      'subTopics': [
        {
          'title': 'Creating a Type'
        }
      ]
    },
    {
      'category': 'Base Operations',
      'routes': [
        {
          'category': 'Base Operations',
          'description': 'Get an object with a certain object Id.',
          'method': 'get',
          'path': '/v2/object/:objectId',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/object/AV19NNWIabSTtBb93fgI',
            'method': 'get',
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'read': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Simpson',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 3,
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
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fip'
        },
        {
          'category': 'Base Operations',
          'description': 'Create an object of any type.',
          'notes': [
            'It is not possible to set the \"numberOfSets\" field of Types manually as this number must correspond to the number of sets with this type.',
            'It is not possible to set the \"numberOfItems\" field of Sets manually as this number must correspond to the number of items within this set.',
            'It is not possible to set the \"stars\" field of Sets manually. Nice try ;)'
          ],
          'method': 'post',
          'path': '/v2/object',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'object',
            'requires': [
              '_type'
            ],
            'allowOtherFields': true,
            'fields': {
              '_type': {
                'type': 'keyword',
                'description': 'The type id of the object'
              }
            }
          },
          'sample': {
            'path': '/v2/object',
            'method': 'post',
            'requestBody': {
              'surname': 'Simpson',
              'isMetaphoricalFamily': false,
              'numberOfChildren': 3,
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
              '_type': 'AV19M3pmabSTtBb93fgG'
            },
            'responseStatus': 201,
            'responseBody': {
              'status': 201,
              'created': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Simpson',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 3,
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
                    '_sets': [],
                    '_type': 'AV19M3pmabSTtBb93fgG',
                    '_id': 'AUTO_GENERATED_ID'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fir'
        },
        {
          'category': 'Base Operations',
          'description': 'Search for any object. Go to the \"Search Tutorial\" to learn how to format the body.',
          'method': 'post',
          'path': '/v2/object/search',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'type': 'object',
              'fields': {
                'page': {
                  'type': 'integer',
                  'description': 'The page number to query (starts at 0)'
                },
                'count': {
                  'type': 'integer',
                  'description': 'The number of objects per page'
                }
              },
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/object/search',
            'method': 'post',
            'requestBody': {
              'query': {
                'match': {
                  '_all': '40'
                }
              }
            },
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'read': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Neutron',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 1,
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
                    '_id': 'AV19NY41abSTtBb93fgM',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  },
                  {
                    'surname': 'Turner',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 1,
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
                    '_id': 'AV19NalAabSTtBb93fgN',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fiq'
        },
        {
          'category': 'Base Operations',
          'description': 'Update any number of objects. Use the body to define the objects to update. See the \"Updating Tutorial\" to learn how to make updates.',
          'notes': [
            'It is not possible to update the \"properties\" field of Types. Please create a new type if that is what you wish to do.',
            'It is not possible to update the \"numberOfSets\" field of Types manually as this number must correspond to the number of sets with this type.',
            'It is not possible to update the \"numberOfItems\" field of Sets manually as this number must correspond to the number of items within this set.',
            'It is not possible to update the \"stars\" field of Sets manually. Nice try ;)'
          ],
          'method': 'put',
          'path': '/v2/object',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'array',
            'items': {
              'type': 'object',
              'requires': [
                'ids',
                'query'
              ],
              'description': 'A pairing between object ids to be updated and the way to update them',
              'fields': {
                'ids': {
                  'type': 'array',
                  'description': 'The object ids to be updated',
                  'items': {
                    'type': 'keyword'
                  }
                },
                'query': {
                  'type': 'object',
                  'description': 'The way the objects should be updated',
                  'fields': {
                    '$inc': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Increment a number. The key is a period-separated string representing the key in the object to increment. The value is the number by which the value will be incremented. Use negative numbers to decrement.',
                      'fields': {}
                    },
                    '$mul': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Multiply a number. The key is a period-separated string representing the key in the object to multiplied. The value is the number by which the value will be multiplied.',
                      'fields': {}
                    },
                    '$rename': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Rename a field. The key is a period-separated string representing the key in the object to renamed. The value is the name to which the field will be renamed.',
                      'fields': {}
                    },
                    '$set': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$unset': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Removes a field. The key is a period-separated string representing the key in the object to unset. The value does not matter.',
                      'fields': {}
                    },
                    '$min': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field if the value is less than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$max': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field if the value is greater than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$addToSet': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Add a value to a collection only if it is unique to that collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
                      'fields': {}
                    },
                    '$pop': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Remove the last or first value of a collection. The key is a period-separated string representing the key in the object of the collection. The value is a positive number to remove the last value and a negative number to remove the first value.',
                      'fields': {}
                    },
                    '$pullAll': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Remove all values of a kind from a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to remove.',
                      'fields': {}
                    },
                    '$push': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Add a value to a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
                      'fields': {}
                    }
                  }
                }
              }
            }
          },
          'sample': {
            'path': '/v2/object',
            'method': 'put',
            'requestBody': [
              {
                'ids': [
                  'AV19NVaSabSTtBb93fgK',
                  'AV19NXPbabSTtBb93fgL'
                ],
                'query': {
                  '$inc': {
                    'numberOfChildren': 1
                  }
                }
              }
            ],
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'updated': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Belcher',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 4,
                    'people': [
                      {
                        'firstName': 'Bob',
                        'age': 45,
                        'isParent': true
                      },
                      {
                        'firstName': 'Linda',
                        'age': 44,
                        'isParent': true
                      },
                      {
                        'firstName': 'Tina',
                        'age': 13,
                        'isParent': false
                      },
                      {
                        'firstName': 'Gene',
                        'age': 11,
                        'isParent': false
                      },
                      {
                        'firstName': 'Louise',
                        'age': 9,
                        'isParent': false
                      }
                    ],
                    'lives': [
                      'Ocean City'
                    ],
                    '_id': 'AV19NVaSabSTtBb93fgK',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  },
                  {
                    'surname': 'Waterson',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 4,
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
                    '_id': 'AV19NXPbabSTtBb93fgL',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fis'
        },
        {
          'category': 'Base Operations',
          'description': 'Delete any object by passing an array of object Ids to delete.',
          'notes': [
            'It is not possible to delete Types.',
            'If you delete a Set using this method, it will not automatically delete all items that are associated with only this set. If you wish to do this, use the DELETE /v2/set/:setId route.',
            'If you delete a member of a Set using this method, it will remove that member from all Sets. If you only wish to remove an item from one Set, use the DELETE /v2/set/:setId/item route.'
          ],
          'method': 'delete',
          'path': '/v2/object',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'array',
            'items': {
              'type': 'keyword',
              'description': 'The id of the object to delete'
            }
          },
          'sample': {
            'path': '/v2/object',
            'method': 'delete',
            'requestBody': [
              'AV19NcFOabSTtBb93fgO'
            ],
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'deleted': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Gaang',
                    'isMetaphoricalFamily': true,
                    'numberOfChildren': 5,
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
                    '_id': 'AV19NcFOabSTtBb93fgO',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fit'
        }
      ]
    },
    {
      'category': 'Set Operations',
      'routes': [
        {
          'category': 'Set Operations',
          'description': 'Get a specific Set given a set id.',
          'method': 'get',
          'path': '/v2/set/:setId',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/object/AV19M_7-abSTtBb93fgH',
            'method': 'get',
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'read': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'A collection of families from various cartoons.',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': 0,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'AV19M_7-abSTtBb93fgH',
                    '_type': 'set_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi0'
        },
        {
          'category': 'Set Operations',
          'description': 'Create a new data Set.',
          'method': 'post',
          'path': '/v2/set',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'object',
            'requires': [
              'title',
              '_type'
            ],
            'fields': {
              'title': {
                'type': 'text',
                'description': 'The title of the set.'
              },
              'description': {
                'type': 'text',
                'default': '',
                'description': 'The description of the set.'
              },
              'tags': {
                'type': 'array',
                'items': {
                  'type': 'text'
                },
                'default': [],
                'description': 'A list of terms to aid in searching.'
              },
              'type': {
                'type': 'object',
                'requires': [
                  '_id'
                ],
                'fields': {
                  '_id': {
                    'type': 'keyword',
                    'description': 'The id of the Type all items in this set should be.'
                  },
                  'title': {
                    'type': 'text',
                    'description': 'The title of the Type all items in this set should be.'
                  }
                },
                'description': 'A small snapshot of the Type all items in this set should be.'
              },
              'creator': {
                'type': 'object',
                'requires': [
                  '_id'
                ],
                'fields': {
                  '_id': {
                    'type': 'keyword',
                    'description': 'The id of the user who created this Set.'
                  },
                  'username': {
                    'type': 'text',
                    'description': 'The username of the user who created this Set.'
                  }
                },
                'description': 'A small snapshot of the user who created this Set.'
              },
              'stars': {
                'type': 'integer',
                'description': 'The number of users who have starred this Set.'
              },
              'numberOfItems': {
                'type': 'integer',
                'description': 'The number of Items that are members of this Set.'
              },
              '_sets': {
                'type': 'array',
                'items': {
                  'type': 'keyword'
                },
                'default': [],
                'description': 'Defines the Sets of which this object is a member.'
              },
              '_type': {
                'type': 'keyword',
                'constant': 'set_type',
                'description': 'Defines the object\'s Type as set_type.'
              }
            }
          },
          'sample': {
            'path': '/v2/set',
            'method': 'post',
            'requestBody': {
              'title': 'Cartoon Families',
              'description': 'A collection of families from various cartoons.',
              'tags': [
                'sample'
              ],
              'type': {
                '_id': 'AV19M3pmabSTtBb93fgG',
                'title': 'Family'
              },
              'creator': {
                '_id': 'zenow',
                'username': 'zenow'
              },
              'stars': 0,
              'numberOfItems': 0,
              '_permissions': {
                'owner': 'zenow',
                'read': [
                  'all'
                ]
              },
              '_sets': [
                'set_set'
              ],
              '_type': 'AV19M_7-abSTtBb93fgH'
            },
            'responseStatus': 201,
            'responseBody': {
              'status': 201,
              'created': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'A collection of families from various cartoons.',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': 0,
                    '_permissions': {
                      'owner': 'zenow',
                      'read': [
                        'all'
                      ]
                    },
                    '_sets': [],
                    '_type': 'set_type',
                    '_id': 'AUTO_GENERATED_ID'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fiy'
        },
        {
          'category': 'Set Operations',
          'description': 'Search all data Sets officially a part of zenow. Go to the \"Search Tutorial\" to learn how to format the body.',
          'method': 'post',
          'path': '/v2/set/search',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'type': 'object',
              'fields': {
                'page': {
                  'type': 'integer',
                  'description': 'The page number to query (starts at 0)'
                },
                'count': {
                  'type': 'integer',
                  'description': 'The number of objects per page'
                }
              },
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/set/search',
            'method': 'post',
            'requestBody': {
              'query': {
                'match': {
                  '_all': 'meta'
                }
              }
            },
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'read': {
                'set_type': [
                  {
                    'title': 'Zenow Types',
                    'description': 'All types indexed by the database and officially searchable by the zenow ui',
                    'tags': [
                      'zenow',
                      'type',
                      'meta'
                    ],
                    'type': {
                      '_id': 'type_type',
                      'title': 'type'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': 2,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'type_set',
                    '_type': 'set_type'
                  },
                  {
                    'title': 'Zenow Sets',
                    'description': 'All sets officially searchable by the zenow ui.',
                    'tags': [
                      'zenow',
                      'set',
                      'meta'
                    ],
                    'type': {
                      '_id': 'set_type',
                      'title': 'set'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': 2,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'set_set',
                    '_type': 'set_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fiz'
        },
        {
          'category': 'Set Operations',
          'description': 'Update a specific set given a set id. See the \"Updating Tutorial\" to learn how to make updates.',
          'method': 'put',
          'path': '/v2/set/:setId',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'array',
            'items': {
              'type': 'object',
              'requires': [
                'ids',
                'query'
              ],
              'description': 'A pairing between object ids to be updated and the way to update them',
              'fields': {
                'ids': {
                  'type': 'array',
                  'description': 'The object ids to be updated',
                  'items': {
                    'type': 'keyword'
                  }
                },
                'query': {
                  'type': 'object',
                  'description': 'The way the objects should be updated',
                  'fields': {
                    '$inc': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Increment a number. The key is a period-separated string representing the key in the object to increment. The value is the number by which the value will be incremented. Use negative numbers to decrement.',
                      'fields': {}
                    },
                    '$mul': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Multiply a number. The key is a period-separated string representing the key in the object to multiplied. The value is the number by which the value will be multiplied.',
                      'fields': {}
                    },
                    '$rename': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Rename a field. The key is a period-separated string representing the key in the object to renamed. The value is the name to which the field will be renamed.',
                      'fields': {}
                    },
                    '$set': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$unset': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Removes a field. The key is a period-separated string representing the key in the object to unset. The value does not matter.',
                      'fields': {}
                    },
                    '$min': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field if the value is less than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$max': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field if the value is greater than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$addToSet': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Add a value to a collection only if it is unique to that collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
                      'fields': {}
                    },
                    '$pop': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Remove the last or first value of a collection. The key is a period-separated string representing the key in the object of the collection. The value is a positive number to remove the last value and a negative number to remove the first value.',
                      'fields': {}
                    },
                    '$pullAll': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Remove all values of a kind from a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to remove.',
                      'fields': {}
                    },
                    '$push': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Add a value to a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
                      'fields': {}
                    }
                  }
                }
              }
            }
          },
          'sample': {
            'path': '/v2/set/AV19M_7-abSTtBb93fgH',
            'method': 'put',
            'requestBody': {
              '$set': {
                'description': 'sample'
              }
            },
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'updated': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'sample',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': 0,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'AV19M_7-abSTtBb93fgH',
                    '_type': 'set_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi1'
        },
        {
          'category': 'Set Operations',
          'description': 'Star a set for a particular user.',
          'notes': [
            'It is not possible to star a set multiple times per user.'
          ],
          'method': 'put',
          'path': '/v2/set/:setId/star',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',

                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/set/star',
            'method': 'put',
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'updated': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'A collection of families from various cartoons.',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 1,
                    'numberOfItems': 0,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'AV19M_7-abSTtBb93fgH',
                    '_type': 'set_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi8'
        },
        {
          'category': 'Set Operations',
          'description': 'Unstar a set for a particular user.',
          'method': 'put',
          'path': '/v2/set/:setId/unstar',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/set/unstar',
            'method': 'put',
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'updated': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'A collection of families from various cartoons.',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': -1,
                    'numberOfItems': 0,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'AV19M_7-abSTtBb93fgH',
                    '_type': 'set_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi9'
        },
        {
          'category': 'Set Operations',
          'description': 'Delete a specific set given a set id.',
          'notes': [
            'If an object is a member of only this set, that object will also be deleted. If you do not want this to happen use DELETE /v2/object'
          ],
          'method': 'delete',
          'path': '/v2/set/:setId',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/set/AV19M_7-abSTtBb93fgH',
            'method': 'delete',
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'deleted': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'A collection of families from various cartoons.',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': 0,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'AV19M_7-abSTtBb93fgH',
                    '_type': 'set_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi2'
        }
      ]
    },
    {
      'category': 'Set Item Operations',
      'routes': [
        {
          'category': 'Set Item Operations',
          'description': 'Get a specific item within the Set.',
          'method': 'get',
          'path': '/v2/set/:setId/item/:itemId',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/set/AV19M_7-abSTtBb93fgH/item/AV19NNWIabSTtBb93fgI',
            'method': 'get',
            'responseStatus': 200,
            'responseBody': {

              'status': 200,
              'read': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Simpson',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 3,
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
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi5'
        },
        {
          'category': 'Set Item Operations',
          'description': 'Add an Items to the Set.',
          'method': 'post',
          'path': '/v2/set/:setId/item',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'object',
            'requires': [
              '_type'
            ],
            'allowOtherFields': true,
            'fields': {
              '_type': {
                'type': 'keyword',
                'description': 'The type id of the object'
              }
            }
          },
          'sample': {
            'path': '/v2/set/AV19M_7-abSTtBb93fgH/item',
            'method': 'post',
            'requestBody': [
              {
                'surname': 'Simpson',
                'isMetaphoricalFamily': false,
                'numberOfChildren': 3,
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
                '_type': 'AV19M3pmabSTtBb93fgG'
              },
              {
                'surname': 'Smith',
                'isMetaphoricalFamily': false,
                'numberOfChildren': 2,
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
                    'isParent': false
                  }
                ],
                'lives': [
                  'Earth',
                  'Tiny Planet'
                ],
                '_type': 'AV19M3pmabSTtBb93fgG'
              },
              {
                'surname': 'Belcher',
                'isMetaphoricalFamily': false,
                'numberOfChildren': 3,
                'people': [
                  {
                    'firstName': 'Bob',
                    'age': 45,
                    'isParent': true
                  },
                  {
                    'firstName': 'Linda',
                    'age': 44,
                    'isParent': true
                  },
                  {
                    'firstName': 'Tina',
                    'age': 13,
                    'isParent': false
                  },
                  {
                    'firstName': 'Gene',
                    'age': 11,
                    'isParent': false
                  },
                  {
                    'firstName': 'Louise',
                    'age': 9,
                    'isParent': false
                  }
                ],
                'lives': [
                  'Ocean City'
                ],
                '_type': 'AV19M3pmabSTtBb93fgG'
              }
            ],
            'responseStatus': 201,
            'responseBody': {
              'status': 201,
              'updated': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'A collection of families from various cartoons.',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': 3,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'AV19M_7-abSTtBb93fgH',
                    '_type': 'set_type'
                  }
                ]
              },
              'created': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Simpson',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 3,
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
                    '_id': 'AV19NNWIabSTtBb93fgI',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  },
                  {
                    'surname': 'Smith',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 2,
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
                        'isParent': false
                      }
                    ],
                    'lives': [
                      'Earth',
                      'Tiny Planet'
                    ],
                    '_id': 'AV19NTPnabSTtBb93fgJ',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  },
                  {
                    'surname': 'Belcher',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 3,
                    'people': [
                      {
                        'firstName': 'Bob',
                        'age': 45,
                        'isParent': true
                      },
                      {
                        'firstName': 'Linda',
                        'age': 44,
                        'isParent': true
                      },
                      {
                        'firstName': 'Tina',
                        'age': 13,
                        'isParent': false
                      },
                      {
                        'firstName': 'Gene',
                        'age': 11,
                        'isParent': false
                      },
                      {
                        'firstName': 'Louise',
                        'age': 9,
                        'isParent': false
                      }
                    ],
                    'lives': [
                      'Ocean City'
                    ],
                    '_id': 'AV19NVaSabSTtBb93fgK',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi3'
        },
        {
          'category': 'Set Item Operations',
          'description': 'Search items within the Set. Go to the \"Search Tutorial\" to learn how to format the body.',
          'method': 'post',
          'path': '/v2/set/:setId/item/search',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'type': 'object',
              'fields': {
                'page': {
                  'type': 'integer',
                  'description': 'The page number to query (starts at 0)'
                },
                'count': {
                  'type': 'integer',
                  'description': 'The number of objects per page'
                }
              },
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/set/AV19M_7-abSTtBb93fgH/item/search',
            'method': 'post',
            'requestBody': {
              'query': {
                'match': {
                  '_all': '40'
                }
              }
            },
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'read': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Neutron',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 1,
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
                    '_id': 'AV19NY41abSTtBb93fgM',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  },
                  {
                    'surname': 'Turner',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 1,
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
                    '_id': 'AV19NalAabSTtBb93fgN',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi4'
        },
        {
          'category': 'Set Item Operations',
          'description': 'Update Items in a set. See the \"Updating Tutorial\" to learn how to make updates.',
          'method': 'put',
          'path': '/v2/set/:setId/item',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'array',
            'items': {
              'type': 'object',
              'requires': [
                'ids',
                'query'
              ],
              'description': 'A pairing between object ids to be updated and the way to update them',
              'fields': {
                'ids': {
                  'type': 'array',
                  'description': 'The object ids to be updated',
                  'items': {
                    'type': 'keyword'
                  }
                },
                'query': {
                  'type': 'object',
                  'description': 'The way the objects should be updated',
                  'fields': {
                    '$inc': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Increment a number. The key is a period-separated string representing the key in the object to increment. The value is the number by which the value will be incremented. Use negative numbers to decrement.',
                      'fields': {}
                    },
                    '$mul': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Multiply a number. The key is a period-separated string representing the key in the object to multiplied. The value is the number by which the value will be multiplied.',
                      'fields': {}
                    },
                    '$rename': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Rename a field. The key is a period-separated string representing the key in the object to renamed. The value is the name to which the field will be renamed.',
                      'fields': {}
                    },
                    '$set': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$unset': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Removes a field. The key is a period-separated string representing the key in the object to unset. The value does not matter.',
                      'fields': {}
                    },
                    '$min': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field if the value is less than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$max': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Set a field if the value is greater than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
                      'fields': {}
                    },
                    '$addToSet': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Add a value to a collection only if it is unique to that collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
                      'fields': {}
                    },
                    '$pop': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Remove the last or first value of a collection. The key is a period-separated string representing the key in the object of the collection. The value is a positive number to remove the last value and a negative number to remove the first value.',
                      'fields': {}
                    },
                    '$pullAll': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Remove all values of a kind from a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to remove.',
                      'fields': {}
                    },
                    '$push': {
                      'type': 'object',
                      'allowOtherFields': true,
                      'description': 'Add a value to a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
                      'fields': {}
                    }
                  }
                }
              }
            }
          },
          'sample': {
            'path': '/v2/set/AV19M_7-abSTtBb93fgH/item',
            'method': 'put',
            'requestBody': [
              {
                'ids': [
                  'AV19NVaSabSTtBb93fgK',
                  'AV19NXPbabSTtBb93fgL'
                ],
                'query': {
                  '$inc': {
                    'numberOfChildren': 1
                  }
                }
              }
            ],
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'updated': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Belcher',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 4,
                    'people': [
                      {
                        'firstName': 'Bob',
                        'age': 45,
                        'isParent': true
                      },
                      {
                        'firstName': 'Linda',
                        'age': 44,
                        'isParent': true
                      },
                      {
                        'firstName': 'Tina',
                        'age': 13,
                        'isParent': false
                      },
                      {
                        'firstName': 'Gene',
                        'age': 11,
                        'isParent': false
                      },
                      {
                        'firstName': 'Louise',
                        'age': 9,
                        'isParent': false
                      }
                    ],
                    'lives': [
                      'Ocean City'
                    ],
                    '_id': 'AV19NVaSabSTtBb93fgK',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  },
                  {
                    'surname': 'Waterson',
                    'isMetaphoricalFamily': false,
                    'numberOfChildren': 4,
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
                    '_id': 'AV19NXPbabSTtBb93fgL',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi6'
        },
        {
          'category': 'Set Item Operations',
          'description': 'Remove items from a set.',
          'notes': [
            'This will delete the Item if this is the sole Set of which it is a member. Otherwise the Item will continue existing as a part of other Sets. If you wish to remove this item from all sets of which it is a member use the DELETE /v2/object route.'
          ],
          'method': 'delete',
          'path': '/v2/set/:setId/item',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'array',
            'items': {
              'type': 'keyword',
              'description': 'The id of the object to delete'
            }
          },
          'sample': {
            'path': '/v2/set/AV19M_7-abSTtBb93fgH/item',
            'method': 'delete',
            'requestBody': [
              'AV19NcFOabSTtBb93fgO'
            ],
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'updated': {
                'set_type': [
                  {
                    'title': 'Cartoon Families',
                    'description': 'A collection of families from various cartoons.',
                    'tags': [
                      'sample'
                    ],
                    'type': {
                      '_id': 'AV19M3pmabSTtBb93fgG',
                      'title': 'Family'
                    },
                    'creator': {
                      '_id': 'zenow',
                      'username': 'zenow'
                    },
                    'stars': 0,
                    'numberOfItems': -1,
                    '_sets': [
                      'set_set'
                    ],
                    '_id': 'AV19M_7-abSTtBb93fgH',
                    '_type': 'set_type'
                  }
                ]
              },
              'deleted': {
                'AV19M3pmabSTtBb93fgG': [
                  {
                    'surname': 'Gaang',
                    'isMetaphoricalFamily': true,
                    'numberOfChildren': 5,
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
                    '_id': 'AV19NcFOabSTtBb93fgO',
                    '_sets': [
                      'AV19M_7-abSTtBb93fgH'
                    ],
                    '_type': 'AV19M3pmabSTtBb93fgG'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi7'
        }
      ]
    },
    {
      'category': 'Type Operations',
      'routes': [
        {
          'category': 'Type Operations',
          'description': 'Get a specific Type given a type id',
          'method': 'get',
          'path': '/v2/type/:typeId',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/type/AV19M3pmabSTtBb93fgG',
            'method': 'get',
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'read': {
                'type_type': [
                  {
                    'title': 'Family',
                    'description': 'Describes a family unit. Usually one that lives in the same house.',
                    'properties': {
                      'type': 'object',
                      'fields': {
                        'surname': {
                          'type': 'text',
                          'description': ''
                        },
                        'isMetaphoricalFamily': {
                          'type': 'boolean',
                          'default': false
                        },
                        'numberOfChildren': {
                          'type': 'integer'
                        },
                        'people': {
                          'type': 'array',
                          'items': {
                            'type': 'object',
                            'fields': {
                              'firstName': {
                                'type': 'text',
                                'description': ''
                              },
                              'age': {
                                'type': 'integer',
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
                            'type': 'text',
                            'description': ''
                          },
                          'description': ''
                        },
                        '_sets': {
                          'type': 'array',
                          'items': {
                            'type': 'keyword'
                          },
                          'default': [],
                          'description': 'Defines the Sets of which this object is a member.'
                        },
                        '_type': {
                          'type': 'keyword',
                          'constant': 'AV19M3pmabSTtBb93fgG',
                          'description': 'Defines the object\'s Type as set_type.'
                        }
                      },
                      'requires': [],
                      'description': '',
                      'allowOtherFields': false
                    },
                    '_sets': [
                      'type_set'
                    ],
                    '_type': 'type_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi-'
        },
        {
          'category': 'Type Operations',
          'description': 'Create a Type. Go to the \"Type Tutorial\" to learn how to format the body.',
          'method': 'post',
          'path': '/v2/type',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {
            'type': 'object',
            'required': [
              'title',
              'properties',
              '_type',
              'meta'
            ],
            'fields': {
              'title': {
                'type': 'text',
                'description': 'The title of the type.'
              },
              'description': {
                'type': 'text',
                'default': '',
                'description': 'The description of the type.'
              },
              'tags': {
                'type': 'array',
                'items': {
                  'type': 'text'
                },
                'default': [],
                'description': 'A list of terms to aid in searching.'
              },
              'properties': {
                'requires': [
                  'type'
                ],
                'cannotHave': [
                  '_permissions',
                  '_id'
                ],
                'type': 'object',
                'allowOtherFields': true,
                'fields': {
                  'type': {
                    'type': 'keyword',
                    'contant': 'object'
                  }
                },
                'allowOtherProperties': true,
                'description': 'Defines the schema of the type. See the \"Type Tutorial\" in the documentation to learn how to format this.'
              },
              '_sets': {
                'type': 'array',
                'items': {
                  'type': 'keyword'
                },
                'default': [],
                'description': 'Defines the Sets of which this object is a member.'
              },
              '_type': {
                'type': 'keyword',
                'constant': 'type_type',
                'description': 'Defines the object\'s Type as type_type.'
              }
            }
          },
          'sample': {
            'path': '/v2/type',
            'method': 'post',
            'requestBody': {
              'title': 'Family',
              'description': 'Describes a family unit. Usually one that lives in the same house.',
              'properties': {
                'type': 'object',
                'fields': {
                  'surname': {
                    'type': 'text',
                    'description': ''
                  },
                  'isMetaphoricalFamily': {
                    'type': 'boolean',
                    'default': false
                  },
                  'numberOfChildren': {
                    'type': 'integer'
                  },
                  'people': {
                    'type': 'array',
                    'items': {
                      'type': 'object',
                      'fields': {
                        'firstName': {
                          'type': 'text',
                          'description': ''
                        },
                        'age': {
                          'type': 'integer',
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
                      'type': 'text',
                      'description': ''
                    },
                    'description': ''
                  },
                  '_sets': {
                    'type': 'array',
                    'items': {
                      'type': 'keyword'
                    },
                    'default': [],
                    'description': 'Defines the Sets of which this object is a member.'
                  },
                  '_type': {
                    'type': 'keyword',
                    'constant': 'AV19M3pmabSTtBb93fgG',
                    'description': 'Defines the object\'s Type as set_type.'
                  }
                },
                'requires': [],
                'description': '',
                'allowOtherFields': false
              },
              '_type': 'AV19M3pmabSTtBb93fgG'
            },
            'responseStatus': 201,
            'responseBody': {
              'status': 201,
              'created': {
                'set_type': [
                  {
                    'title': 'Family',
                    'description': 'Describes a family unit. Usually one that lives in the same house.',
                    'properties': {
                      'type': 'object',
                      'fields': {
                        'surname': {
                          'type': 'text',
                          'description': ''
                        },
                        'isMetaphoricalFamily': {
                          'type': 'boolean',
                          'default': false
                        },
                        'numberOfChildren': {
                          'type': 'integer'
                        },
                        'people': {
                          'type': 'array',
                          'items': {
                            'type': 'object',
                            'fields': {
                              'firstName': {
                                'type': 'text',
                                'description': ''
                              },
                              'age': {
                                'type': 'integer',
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
                            'type': 'text',
                            'description': ''
                          },
                          'description': ''
                        },
                        '_sets': {
                          'type': 'array',
                          'items': {
                            'type': 'keyword'
                          },
                          'default': [],
                          'description': 'Defines the Sets of which this object is a member.'
                        },
                        '_type': {
                          'type': 'keyword',
                          'constant': 'AV19M3pmabSTtBb93fgG',
                          'description': 'Defines the object\'s Type as set_type.'
                        }
                      },
                      'requires': [],
                      'description': '',
                      'allowOtherFields': false
                    },
                    '_sets': [],
                    '_type': 'type_type',
                    '_id': 'AUTO_GENERATED_ID'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fi_'
        },
        {
          'category': 'Type Operations',
          'description': 'Search for Types. Go to the \"Search Tutorial\" to learn how to format the body.',
          'method': 'post',
          'path': '/v2/type/search',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'type': 'object',
              'fields': {
                'page': {
                  'type': 'integer',
                  'description': 'The page number to query (starts at 0)'
                },
                'count': {
                  'type': 'integer',
                  'description': 'The number of objects per page'
                }
              },
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/v2/type/search',
            'method': 'post',
            'requestBody': {
              'query': {
                'match': {
                  '_all': 'meta'
                }
              }
            },
            'responseStatus': 200,
            'responseBody': {
              'status': 200,
              'read': {
                'set_type': [
                  {
                    'title': 'Type',
                    'description': 'A zenow type provides the schema for all objects that ascribe to this type.',
                    'tags': [
                      'set',
                      'zenow',
                      'meta'
                    ],
                    'properties': {
                      'type': 'object',
                      'required': [
                        'title',
                        'properties',
                        '_type',
                        'meta'
                      ],
                      'fields': {
                        'title': {
                          'type': 'text',
                          'description': 'The title of the type.'
                        },
                        'description': {
                          'type': 'text',
                          'default': '',
                          'description': 'The description of the type.'
                        },
                        'tags': {
                          'type': 'array',
                          'items': {
                            'type': 'text'
                          },
                          'default': [],
                          'description': 'A list of terms to aid in searching.'
                        },
                        'properties': {
                          'requires': [
                            'type'
                          ],
                          'cannotHave': [
                            '_permissions',
                            '_id'
                          ],
                          'type': 'object',
                          'allowOtherFields': true,
                          'fields': {
                            'type': {
                              'type': 'keyword',
                              'contant': 'object'
                            }
                          },
                          'allowOtherProperties': true,
                          'description': 'Defines the schema of the type. See the \"Type Tutorial\" in the documentation to learn how to format this.'
                        },
                        '_sets': {
                          'type': 'array',
                          'items': {
                            'type': 'keyword'
                          },
                          'default': [],
                          'description': 'Defines the Sets of which this object is a member.'
                        },
                        '_type': {
                          'type': 'keyword',
                          'constant': 'type_type',
                          'description': 'Defines the object\'s Type as type_type.'
                        }
                      }
                    },
                    '_id': 'type_type',
                    '_sets': [
                      'set_set'
                    ],
                    '_type': 'set_type'
                  },

                  {
                    'title': 'Set',
                    'description': 'A zenow set provides an abstraction on the zenow api to organize data. It represents a collection of objects of the same type.',
                    'tags': [
                      'set',
                      'zenow',
                      'meta'
                    ],
                    'properties': {
                      'type': 'object',
                      'requires': [
                        'title',
                        '_type'
                      ],
                      'fields': {
                        'title': {
                          'type': 'text',
                          'description': 'The title of the set.'
                        },
                        'description': {
                          'type': 'text',
                          'default': '',
                          'description': 'The description of the set.'
                        },
                        'tags': {
                          'type': 'array',
                          'items': {
                            'type': 'text'
                          },
                          'default': [],
                          'description': 'A list of terms to aid in searching.'
                        },
                        'type': {
                          'type': 'object',
                          'requires': [
                            '_id'
                          ],
                          'fields': {
                            '_id': {
                              'type': 'keyword',
                              'description': 'The id of the Type all items in this set should be.'
                            },
                            'title': {
                              'type': 'text',
                              'description': 'The title of the Type all items in this set should be.'
                            }
                          },
                          'description': 'A small snapshot of the Type all items in this set should be.'
                        },
                        'creator': {
                          'type': 'object',
                          'requires': [
                            '_id'
                          ],
                          'fields': {
                            '_id': {
                              'type': 'keyword',
                              'description': 'The id of the user who created this Set.'
                            },
                            'username': {
                              'type': 'text',
                              'description': 'The username of the user who created this Set.'
                            }
                          },
                          'description': 'A small snapshot of the user who created this Set.'
                        },
                        'stars': {
                          'type': 'integer',
                          'description': 'The number of users who have starred this Set.'
                        },
                        'numberOfItems': {
                          'type': 'integer',
                          'description': 'The number of Items that are members of this Set.'
                        },
                        '_sets': {
                          'type': 'array',
                          'items': {
                            'type': 'keyword'
                          },
                          'default': [],
                          'description': 'Defines the Sets of which this object is a member.'
                        },
                        '_type': {
                          'type': 'keyword',
                          'constant': 'set_type',
                          'description': 'Defines the object\'s Type as set_type.'
                        }
                      }
                    },
                    '_id': 'set_type',
                    '_sets': [
                      'set_set'
                    ],
                    '_type': 'set_type'
                  }
                ]
              }
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fjA'
        }
      ]
    },
    {
      'category': 'Other',
      'routes': [
        {
          'category': 'Other',
          'description': 'Calling this route will yield a welcome message. Use this route to test your connection to the server.',
          'method': 'get',
          'path': '/',
          'protocol': 'https',
          'domain': 'api.zenow.io',
          'parameters': {
            'type': 'object',
            'description': 'The parameters given to the URL via the query (?).',
            'requires': [
              'apikey'
            ],
            'fields': {
              'apikey': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via a header variable.'
              }
            }
          },
          'headers': {
            'type': 'object',
            'description': 'The header variables.',
            'requires': [
              'apikey'
            ],
            'fields': {
              'Authorization': {
                'type': 'keyword',
                'description': 'The user access key for the api. This can also be passed in via the url parameters.'
              }
            }
          },
          'body': {},
          'sample': {
            'path': '/',
            'method': 'get',
            'responseStatus': 200,
            'responseBody': {
              'status': 200
            }
          },
          '_sets': [
            'route_set'
          ],
          '_type': 'route_type',
          '_id': 'AV2MoxCsabSTtBb93fio'
        }
      ]
    }
  ]
};

// TODO: Add search suggestions
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_FOCUS:
      return {
        ...state,
        focus: action.name
      };
    default:
      return state;
  }
}

export function setFocus(name) {
  return {
    type: SET_FOCUS,
    name: name
  };
}
