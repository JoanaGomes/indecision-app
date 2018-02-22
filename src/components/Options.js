import React from 'react';
import Option from './Option';

const Options = (props) => {
  return (
    <div>
      <div className='widget-header'>
        <h3 className='widget-header__title'>Your Options</h3>
        <button
          name="remove-all"
          className='button button--link'
          onClick={props.handleDeleteTodos}
        >
          Remove all
        </button>
      </div>
      {props.todos.length === 0 &&
        <p className='widget__message'>
          Please add an option to get started
        </p>
      }
      {props.todos.map((todo, index) => (
        <Option
          key   = {todo.id}
          count = {index + 1}
          todo  = {todo}
          handleDeleteTodo={props.handleDeleteTodo}
        />)
      )}
    </div>
  );
};

export default Options;