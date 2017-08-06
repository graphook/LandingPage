import {cloneAssign} from 'utilities';

export const createRoute = (sample) => {
  return {
    protocol: 'https',
    domain: 'api.zenow.io',
    sample
  };
};

export const familyTypeId = 'AV19M3pmabSTtBb93fgG';
export const familyType = {
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
          'type': 'keyword',
        },
        'default': [],
        'description': 'Defines the Sets of which this object is a member.'
      },
      '_type': {
        'type': 'keyword',
        'constant': familyTypeId,
        'description': 'Defines the object\'s Type as set_type.'
      }
    },
    'requires': [],
    'description': '',
    'allowOtherFields': false
  }
};

export const familySetId = 'AV19M_7-abSTtBb93fgH';
export const familySet = {
  title: 'Cartoon Families',
  description: 'A collection of families from various cartoons.',
  tags: ['sample'],
  type: {
    _id: familyTypeId,
    title: 'Family'
  },
  creator: {
    _id: 'zenow',
    username: 'zenow'
  },
  stars: 0,
  numberOfItems: 0,
  _permissions: {
    owner: 'zenow',
    read: ['all']
  },
  _sets: ['set_set']
};

export const familyIds = [
  'AV19NNWIabSTtBb93fgI',
  'AV19NTPnabSTtBb93fgJ',
  'AV19NVaSabSTtBb93fgK',
  'AV19NXPbabSTtBb93fgL',
  'AV19NY41abSTtBb93fgM',
  'AV19NalAabSTtBb93fgN',
  'AV19NcFOabSTtBb93fgO'
];
export const families = [
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
    ]
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
    ]
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
    ]
  },
  {
    'surname': 'Waterson',
    'isMetaphoricalFamily': false,
    'numberOfChildren': 3,
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
  },
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
    ]
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
    ]
  },
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
    ]
  }
];

export const responseType = {
  'type': 'object',
  'description': 'Zenow Response',
  'requires': ['status'],
  'fields': {
    'status': {
      'type': 'integer',
      'description': 'The HTTP status code for this request'
    },
    'created': {
      'type': 'object',
      'description': 'A collection of objects CREATED for this request grouped by typeId',
      'fields': {
        'TYPE_ID': {
          'type': 'array',
          'description': 'A collection of all CREATED objects of this type.',
          'items': {
            'type': 'object',
            'description': 'A single object.',
            'allowOtherFields': true,
            'fields': {}
          }
        }
      }
    },
    'read': {
      'type': 'object',
      'description': 'A collection of objects READ for this request grouped by typeId',
      'fields': {
        'TYPE_ID': {
          'type': 'array',
          'description': 'A collection of all READ objects of this type.',
          'items': {
            'type': 'object',
            'description': 'A single object.',
            'allowOtherFields': true,
            'fields': {}
          }
        }
      }
    },
    'updated': {
      'type': 'object',
      'description': 'A collection of objects UPDATED for this request grouped by typeId',
      'fields': {
        'TYPE_ID': {
          'type': 'array',
          'description': 'A collection of all UPDATED objects of this type.',
          'items': {
            'type': 'object',
            'description': 'A single object.',
            'allowOtherFields': true,
            'fields': {}
          }
        }
      }
    },
    'deleted': {
      'type': 'object',
      'description': 'A collection of objects DELETED for this request grouped by typeId',
      'fields': {
        'TYPE_ID': {
          'type': 'array',
          'description': 'A collection of all DELTED objects of this type.',
          'items': {
            'type': 'object',
            'description': 'A single object.',
            'allowOtherFields': true,
            'fields': {}
          }
        }
      }
    },
    'errors': {
      'type': 'object',
      'description': 'A map between the cause of an error and its description.',
      'allowOtherFields': true,
      'fields': {}
    }
  }
};

export const updateType = {
  type: 'array',
  items: {
    type: 'object',
    requires: ['ids', 'query'],
    description: 'A pairing between object ids to be updated and the way to update them',
    fields: {
      ids: {
        type: 'array',
        description: 'The object ids to be updated',
        items: {
          type: 'keyword'
        }
      },
      query: {
        type: 'object',
        description: 'The way the objects should be updated',
        fields: {
          $inc: {
            type: 'object',
            allowOtherFields: true,
            description: 'Increment a number. The key is a period-separated string representing the key in the object to increment. The value is the number by which the value will be incremented. Use negative numbers to decrement.',
            fields: {}
          },
          $mul: {
            type: 'object',
            allowOtherFields: true,
            description: 'Multiply a number. The key is a period-separated string representing the key in the object to multiplied. The value is the number by which the value will be multiplied.',
            fields: {}
          },
          $rename: {
            type: 'object',
            allowOtherFields: true,
            description: 'Rename a field. The key is a period-separated string representing the key in the object to renamed. The value is the name to which the field will be renamed.',
            fields: {}
          },
          $set: {
            type: 'object',
            allowOtherFields: true,
            description: 'Set a field. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
            fields: {}
          },
          $unset: {
            type: 'object',
            allowOtherFields: true,
            description: 'Removes a field. The key is a period-separated string representing the key in the object to unset. The value does not matter.',
            fields: {}
          },
          $min: {
            type: 'object',
            allowOtherFields: true,
            description: 'Set a field if the value is less than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
            fields: {}
          },
          $max: {
            type: 'object',
            allowOtherFields: true,
            description: 'Set a field if the value is greater than the current value. The key is a period-separated string representing the key in the object to set. The value is the value to which the field will be set.',
            fields: {}
          },
          $addToSet: {
            type: 'object',
            allowOtherFields: true,
            description: 'Add a value to a collection only if it is unique to that collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
            fields: {}
          },
          $pop: {
            type: 'object',
            allowOtherFields: true,
            description: 'Remove the last or first value of a collection. The key is a period-separated string representing the key in the object of the collection. The value is a positive number to remove the last value and a negative number to remove the first value.',
            fields: {}
          },
          $pullAll: {
            type: 'object',
            allowOtherFields: true,
            description: 'Remove all values of a kind from a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to remove.',
            fields: {}
          },
          $push: {
            type: 'object',
            allowOtherFields: true,
            description: 'Add a value to a collection. The key is a period-separated string representing the key in the object of the collection. The value is the value to add to the collection.',
            fields: {}
          }
        }
      }
    }
  }
};

// Converters
const addFamilyMetadata = (family, index) => {
  return cloneAssign(family, {
    _id: familyIds[index],
    _sets: [ familySetId ],
    _type: familyTypeId
  });
};
const addSetMetadata = (set, setId) => {
  return cloneAssign(set, {
    _id: setId,
    _sets: [ 'set_set' ],
    _type: 'set_type'
  }, ['_permissions']);
};
const addTypeMetadata = (type, typeId) => {
  return cloneAssign(type, {
    _id: typeId,
    _sets: [ 'type_set' ],
    _type: 'type_type'
  }, ['_permissions']);
};

// Converted Objects
export const familyTypeResponse = addTypeMetadata(familyType, familyTypeId);
export const familySetResponse = addSetMetadata(familySet, familySetId);
export const familiesResponse = families.map((family, index) => {
  return addFamilyMetadata(family, index);
});

export const schemas = {
  object: {
    type: 'object',
    requires: ['type', 'fields'],
    fields: {
      type: {
        type: 'keyword',
        constant: 'object',
        description: 'The schema type of this part of the schema.'
      },
      constant: {
        type: 'object',
        allowOtherFields: true,
        fields: {},
        description: 'Requires that this field be a certain value.'
      },
      fields: {
        type: 'object',
        allowOtherFields: true,
        fields: {},
        default: {},
        description: 'A map between a value and a key that this object must follow.'
      },
      requires: {
        type: 'array',
        items: {
          type: 'keyword'
        },
        default: [],
        description: 'A collection of the fields this object requires to be present.'
      },
      default: {
        type: 'object',
        allowOtherFields: true,
        fields: {},
        description: 'Defines the default value for this field.'
      },
      description: {
        type: 'text',
        default: '',
        description: 'A description of this part of the schema for documentation purposes.'
      },
      allowOtherFields: {
        type: 'boolean',
        default: false,
        description: 'If true, this object will allow fields that are not listed in the fields attribute.'
      },
      requiresAtLeast: {
        type: 'object',
        requires: ['count', 'fields'],
        fields: {
          count: {
            type: 'integer',
            description: 'The minimum number of fields from the fields collection that are required.'
          },
          fields: {
            type: 'array',
            items: {
              type: 'keyword'
            },
            description: 'A collection of possible fields.'
          }
        },
        description: 'Defines the requirement of a variable number of fields given a collection of possible fields.'
      },
      cannotHave: {
        type: 'array',
        items: {
          type: 'string'
        },
        description: 'A collection of field names that this object cannot have.'
      }
    }
  },
  array: {
    type: 'object',
    requires: ['type', 'items'],
    fields: {
      type: {
        type: 'keyword',
        constant: 'array',
        description: 'The schema type of this part of the schema.'
      },
      constant: {
        type: 'array',
        items: {
          type: 'any'
        },
        description: 'Requires that this field be a certain value.'
      },
      items: {
        type: 'object',
        allowOtherFields: true,
        fields: {},
        description: 'Defines the schema of items allowed to be within this collection.'
      },
      description: {
        type: 'text',
        default: '',
        description: 'A description of this part of the schema for documentation purposes.'
      },
      default: {
        type: 'array',
        items: {
          type: 'any'
        },
        description: 'Defines the default value for this field.'
      }
    }
  },
  string: {
    type: 'object',
    requires: ['type'],
    fields: {
      type: {
        type: 'keyword',
        enums: ['keyword', 'text'],
        description: 'The schema type of this part of the schema.'
      },
      constant: {
        type: 'any',
        description: 'Requires that this field be a certain value.'
      },
      default: {
        type: 'any',
        description: 'Defines the default value for this field.'
      },
      description: {
        type: 'text',
        default: '',
        description: 'A description of this part of the schema for documentation purposes.'
      },
      regex: {
        type: 'keyword',
        description: 'A regular expression that the value must follow.'
      },
      enums: {
        type: 'array',
        items: {
          type: 'keyword'
        },
        description: 'The value may only be one of the strings in this collection.'
      }
    }
  },
  number: {
    type: 'object',
    requires: ['type'],
    fields: {
      type: {
        type: 'keyword',
        enums: ['integer', 'long', 'short', 'byte', 'double', 'float'],
        description: 'The schema type of this part of the schema.'
      },
      constant: {
        type: 'any',
        description: 'Requires that this field be a certain value.'
      },
      default: {
        type: 'any',
        description: 'Defines the default value for this field.'
      },
      description: {
        type: 'text',
        default: '',
        description: 'A description of this part of the schema for documentation purposes.'
      }
    }
  },
  boolean: {
    type: 'object',
    requires: ['type'],
    fields: {
      type: {
        type: 'keyword',
        constant: 'boolean',
        description: 'The schema type of this part of the schema.'
      },
      constant: {
        type: 'boolean',
        description: 'Requires that this field be a certain value.'
      },
      default: {
        type: 'boolean',
        description: 'Defines the default value for this field.'
      },
      description: {
        type: 'text',
        default: '',
        description: 'A description of this part of the schema for documentation purposes.'
      }
    }
  },
  any: {
    type: 'object',
    requires: ['type'],
    fields: {
      type: {
        type: 'keyword',
        constant: 'any',
        description: 'The schema type of this part of the schema.'
      },
      constant: {
        type: 'any',
        description: 'Requires that this field be a certain value.'
      },
      default: {
        type: 'any',
        description: 'Defines the default value for this field.'
      },
      description: {
        type: 'text',
        default: '',
        description: 'A description of this part of the schema for documentation purposes.'
      }
    }
  }
};
