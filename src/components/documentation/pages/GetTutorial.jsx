import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import DocSection from '../DocSection.jsx';
import {
  createRoute,
  familySetId,
  familyTypeId,
  familySetResponse,
  familyTypeResponse,
  familyIds,
  familiesResponse
} from './tutorialData';


export default () => {
  return (
    <div>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId,
        method: 'get',
        responseStatus: 200,
        responseBody: {
          status: 200,
          read: {
            'set_type': [
              familySetResponse
            ]
          }
        }
      })}>
        <SectionHeader name="Get a Set">Get a Set</SectionHeader>
        <p>Now that we understand the method by which requests are made, we can start making requests to interact with Zenow.</p>
        <p>For the following sections in this tutorial, we’ll be using data about some cartoon families.</p>
        <p>On Zenow, data is arranged into sets of items. Each set has a unique Id.</p>
        <p>In order to request the metadata about this set we’ll use the path <code>/v2/set/SET’S_ID.</code></p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item/' + familyIds[0],
        method: 'get',
        responseStatus: 200,
        responseBody: {
          status: 200,
          read: {
            [familyTypeId]: [
              familiesResponse[0]
            ]
          }
        }
      })}>
        <SectionHeader name="Get Items in a Set">Get Items in a Set</SectionHeader>
        <p>We’ve been able to receive metadata about the set, but Zenow’s real power comes from getting the set’s actual data. Each set represents a collection of items. To get these items we can request the path <code>/v2/set/SET’S_ID/item/ITEM'S_ID</code></p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/type/' + familyTypeId,
        method: 'get',
        responseStatus: 200,
        responseBody: {
          status: 200,
          read: {
            'type_type': [
              familyTypeResponse
            ]
          }
        }
      })}>
        <SectionHeader name="Get a Type">Get a Type</SectionHeader>
        <p>Similarly, you can get a type using <code>/v2/type/TYPE'S_ID</code>.</p>
      </DocSection>
    </div>
  );
};
