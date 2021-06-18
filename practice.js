// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBtCzzS4MUztnrOPdjULhEiJy0g5-dtGhg",
    authDomain: "test-f555d.firebaseapp.com",
    databaseURL: "https://test-f555d-default-rtdb.firebaseio.com",
    projectId: "test-f555d",
    storageBucket: "test-f555d.appspot.com",
    messagingSenderId: "663405833424",
    appId: "1:663405833424:web:d3f8eb79c1bb9309fc42d5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS
function adduser(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    firebase.database().ref("/").child(user_name).update({purpose:'adding user'});
}
