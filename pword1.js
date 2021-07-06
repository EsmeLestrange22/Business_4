function go() {
    pwd = "profit_earn_101"
    if (document.getElementById("iput").value== pwd) {
        window.location = "pg3.html"
    } else {
       document.getElementById("head1").innerHTML= "You are not permitted to view this page"
    }
}