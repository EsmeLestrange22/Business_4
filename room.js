var firebaseConfig = {
  apiKey: "AIzaSyD-c0U0TAcBysZTHgVrf2jtoqJXcgFcvfI",
  authDomain: "tmi-project-dcc78.firebaseapp.com",
  databaseURL: "https://tmi-project-dcc78-default-rtdb.firebaseio.com",
  projectId: "tmi-project-dcc78",
  storageBucket: "tmi-project-dcc78.appspot.com",
  messagingSenderId: "1065820344760",
  appId: "1:1065820344760:web:7ad8799b8d9a981fd57f4d",
  measurementId: "G-BR5MSWB1RB"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var user_name = localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom() {
  name_r = document.getElementById("room").value;
  firebase.database().ref("/").child(name_r).update({
    Lion2: "Open up the ledger",
    Squirrel15: "Ughhhh Ok"

  });

  localStorage.setItem("r_n", name_r);
  

}

var user_name = localStorage.getItem("UserName");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("company_r").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      console.log("Room Name - " + Room_names);
      
      //row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div;><hr>";
      row= "<div class= 'room_name' id= "+Room_names+" onclick= 'redirect_to_room_name()' style= 'background-color: red; opacity: 75%; height: 75px; font-size: 28px; color: black; font-family: cursive; '>"+Room_names+ "</div> <hr>" 
      document.getElementById("company_r").innerHTML += row;
    });
  });

}

getData();

function logout() {
  logout_html= "<h3 style= 'font-size: 28px; font-family: cursive; background-color: black; color: red; height: 125px;'>Are you sure you want to logout? If so, double click on the logout button!</h3>"
  document.getElementById("warn_logout").innerHTML = logout_html;
}
function pwd() {
  window.location= "pword.html";
}
function logout_final() {
  localStorage.removeItem("r_n");
  localStorage.removeItem("un1");
  window.location = "start.html";
}
function redirect_to_room_name () {
  window.location= "pword.html";
}
  
