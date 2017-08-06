import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import DocSection from '../DocSection.jsx';
import TypeVisualizer from 'components/type/TypeVisualizer.jsx';
import {
  createRoute,
  familyType,
  familyTypeResponse,
  schemas
} from './tutorialData';

import s from 'components/styles/index.scss';

export default () => {
  return (
    <div>
      <DocSection route={createRoute({
        path: '/v2/type',
        method: 'post',
        requestBody: familyType,
        responseStatus: 200,
        responseBody: {
          status: 200,
          created: {
            'type_type': [
              familyTypeResponse
            ]
          }
        }
      })}>
        <SectionHeader name="Create a Type">Create a Type</SectionHeader>
        <p>Often times the types currently available on Zenow won’t fit the type you’d like your set to follow. So, you can create your own types if needed.</p>
        <p>Here we’re making a duplicate of the family type we’ve been using.</p>
        <p>The request body requires various fields:</p>
        <ul>
          <li>Title: the title of the type</li>
          <li>Description: the description of the type</li>
          <li>Tags: an array of strings that describe your type. These are useful to help people searching on Zenow find your type.</li>
          <li>Properties: Defines the schema of all items that follow this type.</li>
        </ul>
      </DocSection>
      <DocSection>
        <SectionHeader name="Defining Properties">Defining Properties</SectionHeader>
        <p>Properties define your type's schema, or a set of constraints that ensure all items of this type are the same format.</p>
        <p>Each property itself has its own "type." (listed below) Some types, like objects and arrays can have nested types within them. Be sure that the root level type is an object.</p>
      </DocSection>
      <DocSection>
        <SectionHeader name="Object Schemas">Object Schemas</SectionHeader>
        <p>Object schemas represent a mapping between keys and values. Objects allow other types to nest inside of them via the "fields" attribute. Object schemas have other useful attributes (listed below):</p>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'Object Schema',
            properties: schemas.object
          }} />
        </div>
      </DocSection>
      <DocSection>
        <SectionHeader name="Array Schemas">Array Schemas</SectionHeader>
        <p>Arrays are number collections of values. These values can be of any type.</p>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'Array Schema',
            properties: schemas.array
          }} />
        </div>
      </DocSection>
      <DocSection>
        <SectionHeader name="String Schemas">String Schemas</SectionHeader>
        <p>String can form words or sentences. Choose the right kind of string for you:</p>
        <ul>
          <li>text: This kind of string will be searchable by a number of substrings.</li>
          <li>keyword: You can only search this kind of string by the exact value.</li>
        </ul>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'String Schema',
            properties: schemas.string
          }} />
        </div>
      </DocSection>
      <DocSection>
        <SectionHeader name="Number Schemas">Number Schemas</SectionHeader>
        <p>There's a wide array of number types from which you can choose:</p>
        <ul>
          <li>integer: Signed 32 bit integer</li>
          <li>long: Signed 64 bit integer</li>
          <li>short: Signed 16 bit integer</li>
          <li>byte: Singed 8 bit integer</li>
          <li>float: 32 bit floating point</li>
          <li>double: 64 bit floating point</li>
        </ul>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'Number Schema',
            properties: schemas.number
          }} />
        </div>
      </DocSection>
      <DocSection>
        <SectionHeader name="Boolean Schemas">Boolean Schemas</SectionHeader>
        <p>Booleans represent a true or false value.</p>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'Boolean Schema',
            properties: schemas.boolean
          }} />
        </div>
      </DocSection>
      <DocSection>
        <SectionHeader name="Any Schemas">Any Schemas</SectionHeader>
        <p>You may want to allow any type, and in that case, the "any" schema has you covered.</p>
        <div className={s.typeVisContainer}>
          <TypeVisualizer type={{
            title: 'Boolean Schema',
            properties: schemas.any
          }} />
        </div>
      </DocSection>
    </div>
  );
};
