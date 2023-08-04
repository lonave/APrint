// JavaScript source code
function addToCart() {
    var f= confirm("Are you sure you want to buy this?");
    if (f == true) {
        alert("Has been added to cart");
        // Navigate to another page
        window.location.href = "Home.html";

    } else {
        alert("Why not try another?")
    }
   

   
}
function sub() {
    var pass1 = document.myform.p1.value;
    var pass2 = document.myform.p2.value;
    if (pass1 != pass2) {
        alert("Passwords do not match!")
    } else {
        var a = document.getElementById("fname").value;
        var b = document.getElementById("lname").value;

        alert("hello " + a + " " + b);
    }
}
