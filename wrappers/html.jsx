import React, { Component, PropTypes } from 'react';

export default class HtmlWrapper extends Component {
  static propTypes = {
    route: PropTypes.object,
  };

  render() {
    const page = this.props.route.page.data;
    return <div dangerouslySetInnerHTML={{ __html: page.body }} />;
  }
}
