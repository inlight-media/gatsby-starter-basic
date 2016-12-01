import React, { Component } from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import Helmet from 'react-helmet';
import { config } from 'config';

export default class Index extends Component {
  render() {
    return (
      <div>
        <Helmet
          title={config.siteTitle}
          meta={[
            { name: 'description', content: 'Time to get started!' },
            { name: 'keywords', content: 'gastby, static website, react, sass, inlight' },
          ]}
        />
        <h1>Time to start building your website!</h1>
        <p>Before you get started there are some handy things to know developing in this environment:</p>

        <h2>Page construction</h2>
        <ul>
          <li>Every file inside the pages directory will be compiled down to a html page provided they have one of the following extensions: `js`, `jsx`, `md`, `json`, `toml`</li>
          <li>The `pages/_template.jsx` is a special file which wraps the content of every page. You can create a new `_template.jsx` file in each directory inside of `pages` to override the top level one. This might be a good place to put your site&apos;s navigation for example</li>
          <li>The overall wrapper which includes the `html`, `head`, and `body` tags is located in `html.js` in the root</li>
        </ul>

        <h2>Styles</h2>
        <ul>
          <li>We&apos;re using sass for styles. Please use the indentation syntax (ie. no braces or semicolons required)</li>
          <li>Be sure to name your sass files `x.module.sass` to utilise CSS modules functionality</li>
          <li>The `styles/global` includes things like variables and mixins. Include them in your sass files by using `@import &lsquo;global&rsquo;`</li>
          <li>Define any base styles in `styles/base` and they are imported into the main `_template.jsx`</li>
        </ul>

        <h2>Links</h2>
        <ul>
          <li>Use react-router&apos;s `Link` component for links</li>
          <li>Ensure that there is a trailing slash on your paths</li>
          <li>Always pass the destination path to the `prefixLink` function available from `gatsby-helpers`. This allows us to prefix all links at build time for certain environments</li>
          <li><Link to={prefixLink('/example/')}>Here</Link> is an example link to an example page</li>
        </ul>

        <h2>Other resources</h2>
        <ul>
          <li>Checkout the gatsby documentation <a href="https://github.com/gatsbyjs/gatsby">here</a></li>
        </ul>

        <p>Go forth and build an awesome site!</p>
      </div>
    );
  }
}
