import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: '',
    todos: [
      { id: 0, text: '리액트 공부', done: true },
      { id: 1, text: '컴포넌트 스타일링', done: false },
    ]
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    })
  }

  getId = () => {
    return ++this.id;
  }

  handleInsert = (e) => {
    const { todos, input } = this.state;
    const newTodo = {
      text: input,
      id: this.getId(),
      done: false
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ''
    })
  }

  handleToggle = (id) => {
    console.log(`handleToggle: ${id}`)
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    }
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    })
  }

  handleRemove = (id) => {
    console.log(`===> ${id}`)
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  render() {
    const { input, todos } = this.state;
    const {
      handleChange,
      handleInsert,
      handleToggle,
      handleRemove
    } = this;

    return (
        <PageTemplate>
          <TodoInput onChange={handleChange} onInsert={handleInsert} value={input} />
          <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </PageTemplate>
    );
  }
}

export default App;
