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
  user_name = localStorage.getItem("un1");
room_name = localStorage.getItem("r_n");
function send_function() {
    text101 = document.getElementById("text_msg").value;
    firebase.database().ref(room_name).push({
        Name: user_name,
        Message: text101,
        Likes: 0
    })
    document.getElementById("text_msg").value = "";
}
function logout() {
    logout_html= "<h3 style= 'font-size: 28px; font-family: cursive; background-color: black; color: red; height: 125px;'>Are you sure you want to logout? If so, double click on the logout button!</h3>"
    document.getElementById("warn_logout").innerHTML = logout_html;
  }
  function logout_final() {
    localStorage.removeItem("r_n");
    localStorage.removeItem("un1");
    window.location = "start.html";
  }