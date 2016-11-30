import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import styles from './styles.module';

const columnType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

export default class Column extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    background: PropTypes.string,
    noPadding: PropTypes.bool,

    // Sizes
    base: columnType,
    extraSmall: columnType,
    small: columnType,
    medium: columnType,
    large: columnType,

    // Offsets
    baseOffset: PropTypes.number,
    extraSmallOffset: PropTypes.number,
    smallOffset: PropTypes.number,
    mediumOffset: PropTypes.number,
    largeOffset: PropTypes.number,

    requireColumnProp: ({ extraSmall, small, medium, large, base }, propName, componentName) => {
      const noColumnNumberProvided = (!extraSmall && !small && !medium && !large && !base);
      return noColumnNumberProvided ? new Error(`No column prop provided for any break point on ${componentName}. Component may not be needed.`) : null;
    },
  };

  render() {
    const { props } = this;
    const className = classNames(
      props.noPadding ? styles.columnNoPadding : styles.column,

      // Sizes
      props.extraSmall === true ? styles['extraSmall-auto'] : styles[`extraSmall-${props.extraSmall}`],
      props.small === true ? styles['small-auto'] : styles[`small-${props.small}`],
      props.medium === true ? styles['medium-auto'] : styles[`medium-${props.medium}`],
      props.large === true ? styles['large-auto'] : styles[`large-${props.large}`],
      props.base === true ? styles['base-auto'] : styles[`base-${props.base}`],

      // Offsets
      styles[`extraSmall-offset-${props.extraSmallOffset}`],
      styles[`small-offset-${props.smallOffset}`],
      styles[`medium-offset-${props.mediumOffset}`],
      styles[`large-offset-${props.largeOffset}`],
      styles[`base-offset-${props.baseOffset}`],

      props.className,
    );

    return (
      <div className={className}>{props.children}</div>
    );
  }
}
