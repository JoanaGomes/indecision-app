import React from 'react';
import { connect } from 'react-redux';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';
import { startResetTodos, startDeleteTodo, startAddTodo } from '../actions/todos';

export class IndecisionApp extends React.Component {
  state = {
    selectedOption: undefined
  };

  /*handleDeleteOptions = () => {
      dispatch(resetTodos());
  }

  handleDeleteOption = (todoToRemove) => {
      dispatch(removeTodo(todoToRemove))
      /*this.setState((prevState) => {
          return {
              options: prevState.options.filter((option) => {
                  return option != optionToRemove;
              })
          };
      });*/
  //}

  handleAddTodo = (todo) => {
    if (!todo) {
      return 'Enter valid value to add item!';
    } else if (this.props.todos.indexOf(todo) >= 0) {
      return 'This option already exists!';
    } else {
      this.props.addTodo(todo);
      /*this.setState((prevState) => {
          return {
              options: prevState.options.concat(option)
          };
      });*/

      return false;
    }
  }

  handlePick = () => {
    const pick = Math.floor(Math.random() * this.props.todos.length);
    const todo = this.props.todos[pick];
    this.setState(() => ({
      selectedOption: todo
    }));
  }

  handleClearSelectedOption = () => {
    this.setState(() => ({ selectedOption: undefined }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className='container'>
          <Action
            hasOptions={this.props.todos.length > 0}
            handlePick={this.handlePick}
          />
          <div className='widget'>
            <Options
              todos={this.props.todos}
              handleDeleteTodos={this.props.handleDeleteTodos}
              handleDeleteTodo={this.props.handleDeleteTodo}
            />
            <AddOption handleAddTodo={this.handleAddTodo} />
          </div>
        </div>
        <OptionModal
          selectedOption={this.state.selectedOption}
          handleClearSelectedOption={this.handleClearSelectedOption}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  handleDeleteTodos: () => dispatch(startResetTodos()),
  handleDeleteTodo: (todo) => dispatch(startDeleteTodo(todo)),
  addTodo: (option) => dispatch(startAddTodo(option))
});

export default connect(mapStateToProps, mapDispatchToProps)(IndecisionApp);