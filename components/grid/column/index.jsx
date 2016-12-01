import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import styles from './styles.module';

const columnType = PropTypes.oneOfType([PropTypes.number, PropTypes.bool]);

export default class Column extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
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

    // Custom prop validation
    requireColumnProp: ({ extraSmall, small, medium, large, base }, propName, componentName) => {
      const noColumnNumberProvided = (!extraSmall && !small && !medium && !large && !base);
      return noColumnNumberProvided ? new Error(`No column prop provided for any break point on ${componentName}. Component may not be needed.`) : undefined;
    },
  };

  render() {
    const className = classNames(
      this.props.noPadding ? styles.columnNoPadding : styles.column,

      // Sizes
      this.props.extraSmall === true ? styles['extraSmall-auto'] : styles[`extraSmall-${this.props.extraSmall}`],
      this.props.small === true ? styles['small-auto'] : styles[`small-${this.props.small}`],
      this.props.medium === true ? styles['medium-auto'] : styles[`medium-${this.props.medium}`],
      this.props.large === true ? styles['large-auto'] : styles[`large-${this.props.large}`],
      this.props.base === true ? styles['base-auto'] : styles[`base-${this.props.base}`],

      // Offsets
      styles[`extraSmall-offset-${this.props.extraSmallOffset}`],
      styles[`small-offset-${this.props.smallOffset}`],
      styles[`medium-offset-${this.props.mediumOffset}`],
      styles[`large-offset-${this.props.largeOffset}`],
      styles[`base-offset-${this.props.baseOffset}`],

      this.props.className,
    );

    return (
      <div className={className}>{this.props.children}</div>
    );
  }
}
