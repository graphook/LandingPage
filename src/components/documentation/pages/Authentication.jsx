import React, {Component} from 'react';
import SectionHeader from '../SectionHeader.jsx';
import data from './authenticationData';
import sections from '../sections';
import StandardRoute from '../StandardRoute.jsx';

import s from 'components/styles/index.scss';

export default class Authentication extends Component {
  render() {
    return (
      <div id="containerThing" className={s.containerThing}>
        <p className={s.error}>This page is currently only partially constructed. For more detailed documentation go to the tutorial.</p>
        <p>Currently authentication through Zenow can only be done via API keys. I plan on adding more methods later.</p>
        <p>You may either submit your api key via the <code>apikey</code> url parameter or the <code>apikey</code> header.</p>

        <SectionHeader name="userInfo">{sections.Authentication.userInfo}</SectionHeader>
        <p>Retrieve basic information about the authenticated user.</p>
        <StandardRoute {...data.userInfo} />

        <SectionHeader name="updateUser">{sections.Authentication.updateUser}</SectionHeader>
        <StandardRoute {...data.updateUser} />

        <SectionHeader name="updatePassword">{sections.Authentication.updatePassword}</SectionHeader>
        <StandardRoute {...data.updatePassword} />

        <SectionHeader name="generateNewKey">{sections.Authentication.generateNewKey}</SectionHeader>
        <StandardRoute {...data.generateNewKey} />
      </div>
    );
  }
}
