import Rebase from "re-base";
import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyChpNqnTpwn-zNgjQMzYBJ6ymDq91zLMu4",
    authDomain: "catch-of-the-day-92084.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-92084-default-rtdb.firebaseio.com",
});
const base = Rebase.createClass(firebaseApp.database());

//named export (ES6)
export { firebaseApp };

export default base;