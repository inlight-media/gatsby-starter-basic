import React, { Component, PropTypes } from 'react';

import styles from './styles.module';

export default class ContentBlock extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const { children } = this.props;

    return (
      <div className={styles.contentBlock}>
        {children}
      </div>
    );
  }
}
