import React, {Component, PropTypes} from 'react';
import SectionHeader from './SectionHeader.jsx';
import TypeVisualizer from 'components/type/TypeVisualizer.jsx';
import DocSection from './DocSection';

import s from 'components/styles/index.scss';

export default class RouteCategory extends Component {
  static propTypes = {
    category: PropTypes.object
  }
  render() {
    return (
      <div>
        {this.props.category.routes.map((route) => {
          const elements = [
            <SectionHeader name={route.method + route.path.replace(new RegExp('/', 'g'), ' ')} >
              <span className={s.method}>{route.method}</span> {route.path}
            </SectionHeader>,
            <p>{route.description}</p>,
          ];
          if (route.notes) {
            elements.push(<ul>
              {route.notes.map((note) => {
                return (<li>{note}</li>);
              })}
            </ul>);
          }
          const headers = route.headers;
          if (headers && Object.keys(headers.fields).length > 0) {
            elements.push(<p>Headers</p>);
            elements.push(
              <div className={s.typeVisContainer}>
                <TypeVisualizer type={{
                  title: 'Headers',
                  properties: headers
                }} />
              </div>
            );
          }
          const parameters = route.parameters;
          if (parameters && Object.keys(parameters.fields).length > 0) {
            elements.push(<p>URL Parameters</p>);
            elements.push(
              <div className={s.typeVisContainer}>
                <TypeVisualizer type={{
                  title: 'URL Parameters',
                  properties: parameters
                }} />
              </div>
            );
          }
          const body = route.body;
          if (body) {
            elements.push(<p>Request Body</p>);
            elements.push(
              <div className={s.typeVisContainer}>
                <TypeVisualizer type={{
                  title: 'Request Body',
                  properties: body
                }} />
              </div>
            );
          }

          return (
            <DocSection route={route}>
              {elements}
            </DocSection>
          );
        })}
      </div>
    );
  }
}
