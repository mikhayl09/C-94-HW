// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCCvEAhUnFu6UbTAWZgmc6v3kVq0pNXPcg",
    authDomain: "practiceactivity-7949a.firebaseapp.com",
    databaseURL: "https://practiceactivity-7949a-default-rtdb.firebaseio.com",
    projectId: "practiceactivity-7949a",
    storageBucket: "practiceactivity-7949a.appspot.com",
    messagingSenderId: "1067143565251",
    appId: "1:1067143565251:web:599b469ce585658040b776"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addUser(){
    var user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
   }