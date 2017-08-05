import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import DocSection from '../DocSection.jsx';
import TypeVisualizer from 'components/type/TypeVisualizer.jsx';
import {updateType} from './tutorialData';

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
      <DocSection>
        <SectionHeader name="Advanced Search">Advanced Search</SectionHeader>
        <p>Sometimes you want to search based on more than just the simple string matching, so the search route accepts a JSON object to define a more advanced search. Zenow is built on Elasticsearch, and you can find their documentation for search queries <a href=" https://www.elastic.co/guide/en/elasticsearch/reference/current/search-request-body.html">here</a>.</p>
      </DocSection>
    </div>
  );
};
