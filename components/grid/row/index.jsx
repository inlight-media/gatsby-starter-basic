import classNames from 'classnames';
import React, { Component, PropTypes } from 'react';

import styles from './styles.module';

export default class Row extends Component {
  static propTypes = {
    className: PropTypes.string,
    children: PropTypes.node,
    horizontalAlign: PropTypes.oneOf(['left', 'center', 'right']),
    style: PropTypes.object,
    verticalAlign: PropTypes.oneOf(['top', 'middle', 'bottom']),
  };

  render() {
    const className = classNames(
      styles.row,
      styles[this.props.horizontalAlign],
      styles[this.props.verticalAlign],
      this.props.className
    );
    return (
      <div className={className} style={this.props.style}>
        {this.props.children}
      </div>
    );
  }
}
