

function loginMessage()
{
event.preventDefault();
var userName = document.getElementById("username").value;
document.getElementById("msg").innerHTML = 
"Welcome!" + " " + userName + " " + "to our dashboard";
document.getElementById("msg").setAttribute("aria-live", "polite");
document.getElementById("form").style.display = "none";
};