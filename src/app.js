import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter';
import LoadingPage from './components/LoadingPage';
import { login, logout } from './actions/auth';
import { startSetTodos } from './actions/todos';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';

const store = configureStore();

const jsx = (
  <Provider store={ store } >
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    hasRendered = true;
    ReactDOM.render(jsx, document.getElementById('app'));
  }
};

ReactDOM.render(<LoadingPage />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { uid, displayName, email, photoURL } = user;
    store.dispatch(login(uid, displayName, email, photoURL));

    store.dispatch(startSetTodos()).then(() => {
      renderApp();
      if(history.location.pathname === '/') {
        history.push('/dashboard');
      }
    });
  } else {
    store.dispatch(logout());

    renderApp();
    history.push('/');
  }
});