
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAsuYFnev3Wpw4U9UTCfGXVZEUVUn7atjU",
    authDomain: "kwitter-3ee6d.firebaseapp.com",
    databaseURL: "https://kwitter-3ee6d-default-rtdb.firebaseio.com",
    projectId: "kwitter-3ee6d",
    storageBucket: "kwitter-3ee6d.appspot.com",
    messagingSenderId: "962824679631",
    appId: "1:962824679631:web:c73d8e98bab9fae21707ba"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser(){
      user_name = document.getElementById("user_name").value;

      firebase.database().ref("/").child(user_name).update({
          purpose : "to add User name"
      });
  }