import React from 'react';
import SectionHeader from '../SectionHeader.jsx';
import DocSection from '../DocSection.jsx';


export default () => {
  return (
    <div>
      <DocSection>
        <SectionHeader name="Get a Set">Get a Set</SectionHeader>
        <p>Now that we understand the method by which requests are made, we can start making requests to interact with Zenow.</p>
        <p>For the following sections in this tutorial, we’ll be using data about some cartoon families.</p>
        <p>On Zenow, data is arranged into sets of items. Each set has a unique Id.</p>
        <p>In order to request the metadata about this set we’ll use the path <code>/v1/set/SET’S_ID.</code></p>
      </DocSection>
      <DocSection>
        <SectionHeader name="Get Items in a Set">Get Items in a Set</SectionHeader>
        <p>We’ve been able to receive metadata about the set, but Zenow’s real power comes from getting the set’s actual data. Each set represents a collection of items. To get these items we can request the path <code>/v1/set/SET’S_ID/item?count=10&page=0</code></p>
        <p>Notice that this request has parameters. <code>count</code> represents the number of items you want to receive from your request, and <code>page</code> is the page of items based on your count. For example, if there are 20 items in a set and you send a request with <code>count=10&page=1</code>, you will receive the 11th through 20th item.</p>
      </DocSection>
      <DocSection>
        <SectionHeader name="Get a Type">Get a Type</SectionHeader>
        <p>Similarly, you can get a type using <code>/v2/type/TYPE'S_ID</code>.</p>
      </DocSection>
    </div>
  );
};
