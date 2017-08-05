import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import {Link} from 'react-router';
import {responseType} from './tutorialData.js';
import TypeVisualizer from 'components/type/TypeVisualizer.jsx';
import DocSection from '../DocSection.jsx';

import s from 'components/styles/index.scss';

export default () => {
  return (
    <div>
      <DocSection>
        <SectionHeader name="Data Structure">Data Structure</SectionHeader>
        <p>All data stored in Zenow is stored as "objects," and each object is represented by <Link to="/Introduction%20and%20Authentication/Understanding%20JSON">JSON</Link>. Objects can be accessed and manipulated using the <Link to="/documentation/Base%20Operations">Base Operations API</Link>, but there are also more convenient ways to organize information.</p>
        <p>While all operations can technically be performed with base operations, the <Link to="/documentation/Set%20Operations">Set Operations</Link>, <Link to="/documentation/Set%20Item%20Operations">Set Item Operations</Link>, and <Link to="/documentation/Type%20Operations">Type Operations</Link> keep everything organized in an understandable structure:</p>
        <p>"Types" represent the schema for an object. Every object has a type and Zenow will return an error if a provided or updated object does not match its type.</p>
        <p>"Sets" are collections of objects or items. Each set has a type and items within the set must all be of that type.</p>
        <p>An "item" refers to any object that is within a set.</p>
        <p>"Types," "Sets," and "Items" are all "Objects", but each serve a purpose to keep information on Zenow organized.</p>
        <img src="/images/dataStructure.png" style={{ maxWidth: '500px' }} />
      </DocSection>
      <DocSection>
        <SectionHeader name="Zenow Responses">Zenow Responses</SectionHeader>
        <p>Every response you receive from the server follows the same format:</p>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'Zenow Response',
            properties: responseType
          }} />
        </div>
        <p>Here’s an example response for retrieving a family, given the id for a "family type" is "AV19M3pmabSTtBb93fgG"</p>
        <pre className="hljs">
          <code className="json">
            {JSON.stringify({
              read: {
                AV19M3pmabSTtBb93fgG: [
                  'hi'
                ]
              }
            }, null, 2)}
          </code>
        </pre>
        <p>In this response, the error indicates that the field "badKey" is not allowed in the object at "body.aNestedObject"</p>
        <pre className="hljs">
          <code className="json">
            {JSON.stringify({
              errors: {
                'body.aNestedObject': 'Does not allow the fields: badKey'
              }
            }, null, 2)}
          </code>
        </pre>
      </DocSection>
    </div>
  );
};
