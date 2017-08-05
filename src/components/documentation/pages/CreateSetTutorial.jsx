import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import { Link } from 'react-router';
import DocSection from '../DocSection.jsx';

export default () => {
  return (
    <div>
      <DocSection>
        <SectionHeader name="Create your own Set">Create your own Set</SectionHeader>
        <p>Before creating a set, we must choose a <strong>type</strong>. Types define the format for every item in the set. Our set of cartoon families will use the (family type) which has the id //insert id//</p>
        <p>Our request body contains a few fields:</p>
        <ul>
          <li>Title: the title of your set</li>
          <li>Description: the description of your set</li>
          <li>Tags: an array of strings that describe your set. These are useful to help people searching on Zenow find your set.</li>
          <li>Type: the id of the type this set will follow</li>
          <li>Items: an array of items in the set. You can define these items the same way you define them in the "Add Items to a Set" section below.</li>
        </ul>
      </DocSection>

      <DocSection>
        <SectionHeader name="Add Items to a Set">Add Items to a Set</SectionHeader>
        <p>Items can be added to the set by posting to <code>/v1/set/SET’S_ID/item</code></p>
        <p>Note that this request accepts an array that contains both JSON objects that follow the set’s type and strings. These strings are the ids of items in other sets the follow the same type.</p>
      </DocSection>

      <DocSection>
        <SectionHeader name="Other Set Operations">Other Set Operations</SectionHeader>
        <p>See the REST API documentation for more useful set operations:</p>
        <ul>
          <li><Link to="/documentation/Set/updateSet">Update a Set</Link></li>
          <li><Link to="/documentation/Set/deleteSet">Delete a Set</Link></li>
          <li><Link to="/documentation/Set/getItem">Retrieve a Specific Item in a set</Link></li>
          <li><Link to="/documentation/Set/deleteItem">Remove an Item from a Set</Link></li>
        </ul>
      </DocSection>
    </div>
  );
};
