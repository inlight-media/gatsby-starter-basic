import React, { Component } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class Example extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: 'This is an example page' },
            { name: 'keywords', content: 'example, w00t, inlight' },
          ]}
        />
        <h1>This is an example page!</h1>
      </div>
    );
  }
}
