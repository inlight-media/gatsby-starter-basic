import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import { Wrapper } from '../components/grid';

import '../styles/base';

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },
  render () {
    return (
      <div>
        <Wrapper>
          <Link to={prefixLink('/')}>
            Inlight Gatsby Starter
          </Link>
          {this.props.children}
        </Wrapper>
      </div>
    )
  },
})
