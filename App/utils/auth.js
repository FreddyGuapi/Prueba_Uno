import auth, { firebase } from '@react-native-firebase/auth';
import {ToastAndroid} from 'react-native';
import firestore from '@react-native-firebase/firestore';


export const signIn = (email, password) => {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      ToastAndroid.show('Logeado', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log(err);
    });
};

export const signUp = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then((user) => {
      const fbRootRefFS = firebase.firestore();
      const userID = user.user.uid;
      console.log( 'user ID is:' ,userID);
      const userRef = fbRootRefFS.collection('users').doc(userID);
      userRef.set({
        email,
        password
      })
      ToastAndroid.show('Registrado', ToastAndroid.SHORT);
    })
    .catch(err => {
      console.log(err);
    });
};

export const signOut = () => {
  auth()
    .signOut()
    .then(() => {
      ToastAndroid.show('Finalizo la Sección', ToastAndroid.SHORT);
    });
};