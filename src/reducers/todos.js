export default (state = [], action) => {
  switch(action.type) {
    case 'SET_TODOS':
      return action.todos;
    case 'ADD_TODO':
      return [...state, action.todo];
    case 'REMOVE_TODO':
      return state.filter(({ id }) => id !== action.id );
    case 'RESET_TODOS':
      return [];
    default:
      return state;
  }
};