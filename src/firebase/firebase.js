import * as firebase from 'firebase';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBmx7ZrGmQjYkse9pGyQwlOurdoDpOHOXo",
  authDomain: "expensify-9ddb1.firebaseapp.com",
  databaseURL: "https://expensify-9ddb1.firebaseio.com",
  projectId: "expensify-9ddb1",
  storageBucket: "expensify-9ddb1.appspot.com",
  messagingSenderId: "604023416165"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  name: "ali"
})
