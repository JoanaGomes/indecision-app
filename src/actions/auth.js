import { firebase, googleAuthProvider, githubAuthProvider } from '../firebase/firebase';

export const login = (uid, displayName, email, photoURL) => ({
  type: 'LOG_IN',
  uid, 
  displayName,
  email,
  photoURL
});

export const startLogin = (provider) => {
  return (dispatch) => {
      switch (provider) {
        case 'google':
          firebase.auth().signInWithPopup(googleAuthProvider);
        case 'github':
          firebase.auth().signInWithPopup(githubAuthProvider);
    }
  };
};

export const logout = () => ({
  type: 'LOG_OUT'
});

export const startLogout = () => {
  return () => {
    return firebase.auth().signOut();
  };
};