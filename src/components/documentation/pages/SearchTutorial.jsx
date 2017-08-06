import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import DocSection from '../DocSection.jsx';
import {
  createRoute,
  familySetId,
  familyTypeId,
  familiesResponse
} from './tutorialData';

export default () => {
  return (
    <div>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item/search?query=simpson',
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
        <SectionHeader name="Basic Search">Basic Search</SectionHeader>
        <p>One of the simplest ways to search on Zenow is by simply providing a string value via the "query" paramerter, which looks for all objects that contain that word or number.</p>
        <p>Search requests for objects, types, sets, and items all support the same functionality, but for the purposes of these examples, we'll be searching among items in the a set of cartoon families: <code>/v2/set//item/search</code></p>
      </DocSection>
      <DocSection route={createRoute({
        path: '/v2/set/' + familySetId + '/item/search',
        method: 'get',
        requestBody: {
          query: {
            match: {
              isMetaphoricalFamily: true
            }
          }
        },
        responseStatus: 200,
        responseBody: {
          status: 200,
          read: {
            [familyTypeId]: [
              familiesResponse[6]
            ]
          }
        }
      })}>
        <SectionHeader name="Advanced Search">Advanced Search</SectionHeader>
        <p>Sometimes you want to search based on more than just the simple string matching, so the search route accepts a JSON object to define a more advanced search. Zenow is built on Elasticsearch, and you can find their documentation for search queries <a href=" https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html">here</a>.</p>
      </DocSection>
    </div>
  );
};
