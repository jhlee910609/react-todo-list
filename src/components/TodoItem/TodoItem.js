import React from 'react';
import styles from './TodoItem.scss';
// import classNames from 'classnames/bind';
import BaseComponent from '../../BaseComponent'

// const cx = classNames.bind(styles);

class TodoItem extends BaseComponent {

  constructor(props){
    super(props, styles);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (this.props.done !== nextProps.done)
  }


  render() {
    const { done, children, onToggle, onRemove } = this.props;
    console.log(this.props);
    const cx = this.cx;
    return (
      <div className={cx('todo-item')} onClick={onToggle}>
        <input className={cx('tick')} type="checkbox" checked={done} readOnly />
        <div className={cx('text', { done })}>{children}</div>
        <div
          className={cx('delete')}
          onClick={e => {
            onRemove();
            e.stopPropagation();
          }}
        >
          [지우기]
        </div>
      </div>
    );
  }
}

export default TodoItem;
