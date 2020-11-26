//ADD YOUR FIREBASE LINKS

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

var firebaseConfig = {
  apiKey: "AIzaSyCJ5M8rpniJ4MXO9AKZx2hsrF-o6p--EJY",
  authDomain: "kwitter-2d43f.firebaseapp.com",
  databaseURL: "https://kwitter-2d43f.firebaseio.com",
  projectId: "kwitter-2d43f",
  storageBucket: "kwitter-2d43f.appspot.com",
  messagingSenderId: "671779346966",
  appId: "1:671779346966:web:cf4f2a11e610fc0ee23337",
  measurementId: "G-WP6CK83QY8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location.replace = "index.html";
}