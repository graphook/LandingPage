import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import DocSection from '../DocSection.jsx';
import TypeVisualizer from 'components/type/TypeVisualizer.jsx';
import {updateType} from './tutorialData';
import {cloneAssign} from 'utilities';
import {
  createRoute,
  familySetId,
  familyTypeId,
  familyIds,
  familiesResponse
} from './tutorialData';

import s from 'components/styles/index.scss';

export default () => {
  return (
    <div>
      <DocSection>
        <p>Updating routes on Zenow can be done using various operators. Construct the request body as seen below:</p>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'Update Request Body',
            properties: updateType
          }} />
        </div>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $set: {
                surname: 'The Cash Carousel',
                'people.$.age': 28
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                surname: 'The Cash Carousel',
                people: familiesResponse[0].people.map((person) => {
                  return cloneAssign(person, {
                    age: 28
                  });
                })
              })
            ]
          }
        }
      })}>
        <SectionHeader name="Updating Nested Fields">Updating Nested Fields</SectionHeader>
        <p>You can update nested fields in your document by separating the path with a period (.). If you want to update all items in an array, use the dollar sign ($), otherwise use the array's index.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $inc: {
                numberOfChildren: 2
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                numberOfChildren: familiesResponse[0].numberOfChildren + 2
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$inc">$inc</SectionHeader>
        <p>The $inc operator will increment a given field by the number provided. To decrement, use a negative number.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $mul: {
                numberOfChildren: 5
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                numberOfChildren: familiesResponse[0].numberOfChildren * 5
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$mul">$mul</SectionHeader>
        <p>The $mul operator will multiply a given field by a provided number. To divide, use a fraction.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $rename: {
                surname: 'otherField'
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                otherField: 'Simpson',
              }, ['surname'])
            ]
          }
        }
      })}>
        <SectionHeader name="$rename">$rename</SectionHeader>
        <p>The $rename operator will rename a field to the provided value.</p>
        <p>Note that in the real world, this query would fail because "otherField" is not a valid field name for the family type, but the $rename operation is useful for other types.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $unset: {
                surname: 'The Cash Carousel'
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                surname: 'The Cash Carousel'
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$set">$set</SectionHeader>
        <p>The $set operator sets the value of a provided field.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $unset: {
                numberOfChildren: '',
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {}, ['numberOfChildren'])
            ]
          }
        }
      })}>
        <SectionHeader name="$unset">$unset</SectionHeader>
        <p>The $unset operator removes a field.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $min: {
                'people.$.age': 28
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                surname: 'The Cash Carousel',
                people: familiesResponse[0].people.map((person) => {
                  return cloneAssign(person, {
                    age: (person.age > 28) ? 28 : person.age
                  });
                })
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$min">$min</SectionHeader>
        <p>The $min operation will update a field only if the provided value is less than the current value of that field.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $max: {
                'people.$.age': 28
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                surname: 'The Cash Carousel',
                people: familiesResponse[0].people.map((person) => {
                  return cloneAssign(person, {
                    age: (person.age < 28) ? 28 : person.age
                  });
                })
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$max">$max</SectionHeader>
        <p>The $max operation will update a field only if the provided value is greater than the current value of that field.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $addToSet: {
                lives: ['Springfield', 'Shelbyville'],
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                lives: ['Springfield', 'Shelbyville']
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$addToSet">$addToSet</SectionHeader>
        <p>The $addToSet operator will add all provided values to a collection, but will also ensure that a value isn't duplicated.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[6]],
            query: {
              $pop: {
                lives: 1,
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[6], {
                lives: [
                  'Water Tribes',
                  'Earth Kingdom',
                  'Fire Nation'
                ]
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$pop">$pop</SectionHeader>
        <p>The $pop operation will remove the first or last item from a collection. Provide a negative value to remove the first, and a positive value to remove the last.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[6]],
            query: {
              $pullAll: {
                lives: 'Fire Nation',
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[6], {
                lives: [
                  'Water Tribes',
                  'Earth Kingdom',
                  'Air Temples'
                ]
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$pullAll">$pullAll</SectionHeader>
        <p>The $pullAll operation will remove all values from a collection that match a specific value.</p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'put',
        requestBody: [
          {
            ids: [familyIds[0]],
            query: {
              $push: {
                lives: ['Springfield', 'Shelbyville'],
              }
            }
          }
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          updated: {
            [familyTypeId]: [
              cloneAssign(familiesResponse[0], {
                lives: ['Springfield', 'Springfield', 'Shelbyville']
              })
            ]
          }
        }
      })}>
        <SectionHeader name="$push">$push</SectionHeader>
        <p>The $push operation will add items to a collection regardless of if it's a duplicate.</p>
      </DocSection>
    </div>
  );
};
