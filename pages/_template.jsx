import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';

import { Wrapper } from '../components/grid';

import '../styles/base';

export default class Template extends Component {
  static propTypes = {
    children: PropTypes.any,
  };

  render() {
    return (
      <div>
        <Wrapper>
          <Link to={prefixLink('/')}>
            Inlight Gatsby Starter
          </Link>
          {this.props.children}
        </Wrapper>
      </div>
    );
  }
}
