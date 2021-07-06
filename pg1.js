function addhuman() {
    un1 = document.getElementById("un").value;
    console.log(un1);
    localStorage.setItem("UserName", un1);
    window.location = "room.html";
}