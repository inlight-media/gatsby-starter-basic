# gatsby-starter-basic
This is a starter package for use with [gatsby](https://github.com/gatsbyjs/gatsby). We are using gatsby to generate static websites.

## What's in the box?
This, being our basic starter, comes with a pretty minimal feature set:
 - SASS (with linting)

As well as all the goodness (loaders) that comes with gatsby by default.

## Installing gatsby
```
yarn global add gatsby --prefix /usr/local
```
> This project uses yarn to manage dependencies. `npm i yarn -g` will install it globally.

_NB. Appending the `--prefix /usr/local` flag installs the module in the `/usr/local/bin` directory. There is an open issue stopping globally installed yarn packages from being run (https://github.com/yarnpkg/yarn/issues/2064)_

## Starting a new static site
```
gatsby new your-site-name-here gh:inlight-media/gatsby-starter-basic
```
