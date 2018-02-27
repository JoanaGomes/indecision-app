import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase';
import { setTodos, startSetTodos, addTodo, startAddTodo, deleteTodo, startDeleteTodo, resetTodos, startResetTodos } from '../../actions/todos';
import todos from '../fixtures/todos';

const uid = 'testUID';
const defaultAuthState = [];
const createMockStore = configureMockStore([ thunk ]);

beforeEach((done) => {
  database
    .ref(`users/${uid}/todos`)
    .set(todos)
    .then(() => done());
})

test('should set todos', () => {
  const action = setTodos(todos);
  expect(action).toEqual({
    type: 'SET_TODOS',
    todos
  });
});

test('should start set todos', () => {
  /* mock store and get new state */
});

test('should add todo', () => {

});

test('should start add todo', () => {

});

test('should remove todo', () => {

});

test('should start remove todo', () => {

});

test('should reset todos', () => {

});

test('should start reset todos', () => {

});

