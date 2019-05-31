import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';
import Button from '@material-ui/core/Button';

const cx = classNames.bind(styles);

const TodoInput = ({ value, onChange, onInsert }) => {
  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      onInsert();
    }
  };

  return (
    <div className={cx('todo-input')}>
      <input onChange={onChange} value={value} onKeyPress={handleKeyPress} />
      <Button className={cx('add-button')} onClick={onInsert}>
        추가
      </Button>
    </div>
  );
};

export default TodoInput;


