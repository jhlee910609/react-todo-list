import React from 'react';
import BaseComponent from '../../BaseComponent'
import styles from './PageTemplate.scss'

export default class PageTemplate extends BaseComponent {

  constructor(props){
    super(props, styles);
  }

  render () {
      const { cx } = this;
      const children = this.props.children;

    return (
      <div className={cx('page-template')}>
      <h1>일정관리</h1>
      <div className={cx('content')}>{children}</div>
    </div>
      )
  }
}