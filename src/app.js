import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';

import 'normalize.css/normalize.css';
import './styles/styles.scss';

import { firebase } from './firebase/firebase';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    const { uid, displayName, email, photoURL } = user;
    store.dispatch(login(uid, displayName, email, photoURL));

    store.dispatch(startSetExpenses()).then(() => {
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