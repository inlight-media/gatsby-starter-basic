import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import styles from './styles.module';

export default class Wrapper extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    fixedWidth: PropTypes.bool,
    padding: PropTypes.bool,
  };

  static defaultProps = {
    fixedWidth: true,
    padding: true,
  }

  render() {
    const padding = (this.props.fixedWidth) ? this.props.padding : false;

    const wrapperClasses = classNames(
      styles.wrapper,
      this.props.className,
      this.props.fixedWidth ? styles.fixedWidth : null,
      padding ? styles.padding : null,
    );
    return (
      <div className={wrapperClasses}>
        {this.props.children}
      </div>
    );
  }
}
