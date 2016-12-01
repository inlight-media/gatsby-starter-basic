import React, { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class JsonWrapper extends Component {
  static propTypes = {
    route: PropTypes.object,
  };

  render() {
    const data = this.props.route.page.data;
    return (
      <div>
        <Helmet title={`${config.siteTitle} | ${data.title}`} />
        <h1>{data.title}</h1>
        <p>Raw view of json file</p>
        <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
      </div>
    );
  }
}
