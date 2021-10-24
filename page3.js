var firebaseConfig = {
    apiKey: "AIzaSyBbMlxKMN_PCxdVReBMbK9ODkM7jMOvzac",
    authDomain: "eager-9105f.firebaseapp.com",
    databaseURL: "https://eager-9105f-default-rtdb.firebaseio.com",
    projectId: "eager-9105f",
    storageBucket: "eager-9105f.appspot.com",
    messagingSenderId: "773948419545",
    appId: "1:773948419545:web:bf8cf94cee645a09633dc8",
    measurementId: "G-QXJ2C30N4P"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
  username=localStorage.getItem("username")
  roomname=localStorage.getItem("roomname")

  function send() {
         msg = document.getElementById("msg").value; 
         firebase.database().ref(roomname).push({ 
               name:username, 
               message:msg, 
               like:0 
          }); 
          document.getElementById("msg").value =""; 
    }

    function logout(){
          localStorage.removeItem("roomname")
          localStorage.removeItem("username")
          window.location="page1.html"      
          }

function getData() { firebase.database().ref("/"+roomname).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code
    
//End code
    } });  }); }
getData();