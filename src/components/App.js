import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContainer from '../containers/TodoListContainer';

const initTodos = new Array(500)
  .fill(0)
  .map((foo, index) => ({ id: index, text: `일정 ${index}`, done: false }));
class App extends Component {
  state = {
    input: '',
    todos: initTodos
  };

  handleChange = e => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  };

  getId = () => {
    return ++this.id;
  };

  handleInsert = e => {
    const { todos, input } = this.state;
    const newTodo = {
      text: input,
      id: this.getId(),
      done: false
    };

    this.setState({
      todos: [...todos, newTodo],
      input: ''
    });
  };

  handleToggle = id => {
    console.log(`handleToggle: ${id}`);
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  };

  handleRemove = id => {
    console.log(`===> ${id}`);
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    this.setState({
      todos: [...todos.slice(0, index), ...todos.slice(index + 1, todos.length)]
    });
  };

  render() {
    const { input, todos } = this.state;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;

    return (
      <PageTemplate>
        <TodoInput
          onChange={handleChange}
          onInsert={handleInsert}
          value={input}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </PageTemplate>
    );
  }
}

export default App;
