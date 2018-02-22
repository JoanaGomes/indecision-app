import database from '../firebase/firebase';

export const setTodos = (todos) => ({
  type: 'SET_TODOS',
  todos
});

export const startSetTodos = (todos) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database.ref(`users/${uid}/todos`).once('value')
      .then((snapshot) => {
        const todos = [];
        snapshot.forEach((childSnapshot) => {
          todos.push({
            id: childSnapshot.key,
            value: childSnapshot.val()
          });
        });
        
        dispatch(setTodos(todos));
    });
  }
};

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

export const startAddTodo = (todo) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    
    return database.ref(`users/${uid}/todos`).push(todo)
    .then((ref) => {
      dispatch(addTodo({
        id: ref.key,
        value: todo
      }));
    });
  };
};

export const removeTodo = ({ id }) => ({
  type: 'REMOVE_TODO',
  id
});

export const startDeleteTodo = ({ id }) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/todos/${id}`).remove()
      .then(() => {
        dispatch(removeTodo({ id }))
      });
    };
};

export const resetTodos = () => ({
  type: 'RESET_TODOS'
});

export const startResetTodos = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;

    return database.ref(`users/${uid}/todos`).remove()
    .then(() => {
      dispatch(resetTodos())
    });
  };
};