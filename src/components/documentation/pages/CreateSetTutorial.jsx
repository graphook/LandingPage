import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import DocSection from '../DocSection.jsx';
import {cloneAssign} from 'utilities';
import {
  createRoute,
  familySetId,
  familyTypeId,
  familySet,
  familySetResponse,
  familiesResponse,
  families
} from './tutorialData';

export default () => {
  return (
    <div>
      <DocSection route={createRoute({
        path: '/v2/set',
        method: 'post',
        requestBody: cloneAssign(familySet, {}, ['stars', 'numberOfItems']),
        responseStatus: 200,
        responseBody: {
          status: 200,
          created: {
            set_type: [
              familySetResponse
            ]
          }
        }
      })}>
        <SectionHeader name="Create your own Set">Create your own Set</SectionHeader>
        <p>Before creating a set, we must choose a <strong>type</strong>. Types define the format for every item in the set. Our set of cartoon families will use the (family type) which has the id //insert id//</p>
        <p>Our request body contains a few fields:</p>
        <ul>
          <li>Title: the title of your set</li>
          <li>Type: the id of the type this set will follow</li>
          <li>Description: the description of your set</li>
          <li>Tags: an array of strings that describe your set. These are useful to help people searching on Zenow find your set.</li>
        </ul>
      </DocSection>

      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item',
        method: 'post',
        requestBody: [
          cloneAssign(families[5], { _type: familyTypeId }),
          cloneAssign(families[6], { _type: familyTypeId })
        ],
        responseStatus: 200,
        responseBody: {
          status: 200,
          created: {
            [familyTypeId]: [
              familiesResponse[5],
              familiesResponse[6]
            ]
          }
        }
      })}>
        <SectionHeader name="Add Items to a Set">Add Items to a Set</SectionHeader>
        <p>Items can be added to the set by posting to <code>/v1/set/SET’S_ID/item</code></p>
      </DocSection>
    </div>
  );
};
