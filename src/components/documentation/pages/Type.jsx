import React, {Component, PropTypes} from 'react';
import SectionHeader from '../SectionHeader.jsx';
import data from './typeData';
import sections from '../sections';
import StandardRoute from '../StandardRoute.jsx';

import s from 'components/styles/index.scss';

export default class Type extends Component {
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    user: PropTypes.object
  }
  render() {
    return (
      <div id="containerThing" className={s.containerThing}>
        <SectionHeader name="basicSearch">{sections.Type.basicSearch}</SectionHeader>
        <StandardRoute {...data.basicSearch} />

        <SectionHeader name="getType">{sections.Type.getType}</SectionHeader>
        <StandardRoute {...data.getType} />

        <SectionHeader name="createType">{sections.Type.createType}</SectionHeader>
        <StandardRoute {...data.createType} />

        <SectionHeader name="updateType">{sections.Type.updateType}</SectionHeader>
        <StandardRoute {...data.updateType} />
      </div>
    );
  }
}
