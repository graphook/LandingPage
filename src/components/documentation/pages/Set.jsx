import React, {Component} from 'react';
import SectionHeader from '../SectionHeader.jsx';
import data from './setData';
import sections from '../sections';
import StandardRoute from '../StandardRoute.jsx';

import s from 'components/styles/index.scss';

export default class Set extends Component {
  render() {
    return (
      <div id="containerThing" className={s.containerThing}>
        <p className={s.error}>This page is currently only partially constructed. For more detailed documentation go to the tutorial.</p>
        <SectionHeader name="basicSearch">{sections.Set.basicSearch}</SectionHeader>
        <StandardRoute {...data.basicSearch} />

        <SectionHeader name="getSet">{sections.Set.getSet}</SectionHeader>
        <StandardRoute {...data.getSet} />

        <SectionHeader name="advancedSearch">{sections.Set.advancedSearch}</SectionHeader>
        <StandardRoute {...data.advancedSearch} />

        <SectionHeader name="createSet">{sections.Set.createSet}</SectionHeader>
        <StandardRoute {...data.createSet} />

        <SectionHeader name="updateSet">{sections.Set.updateSet}</SectionHeader>
        <StandardRoute {...data.updateSet} />

        <SectionHeader name="starSet">{sections.Set.starSet}</SectionHeader>
        <StandardRoute {...data.starSet} />

        <SectionHeader name="unstarSet">{sections.Set.unstarSet}</SectionHeader>
        <StandardRoute {...data.unstarSet} />

        <SectionHeader name="deleteSet">{sections.Set.deleteSet}</SectionHeader>
        <StandardRoute {...data.deleteSet} />

        <SectionHeader name="getItem">{sections.Set.getItem}</SectionHeader>
        <StandardRoute {...data.getItem} />

        <SectionHeader name="itemAdvancedSearch">{sections.Set.itemAdvancedSearch}</SectionHeader>
        <StandardRoute {...data.itemAdvancedSearch} />

        <SectionHeader name="addItem">{sections.Set.addItem}</SectionHeader>
        <StandardRoute {...data.addItem} />

        <SectionHeader name="deleteItem">{sections.Set.deleteItem}</SectionHeader>
        <StandardRoute {...data.deleteItem} />

    </div>
    );
  }
}
