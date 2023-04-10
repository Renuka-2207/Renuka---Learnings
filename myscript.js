var username = document.getElementById("username").value;

function loginMessage()
{
event.preventDefault();
document.getElementById("msg").innerHTML = 
"Welcome!" + " " + username + " " + "to our dashboard";
document.getElementById("msg").setAttribute("aria-live", "polite");
document.getElementById("form").style.display = "none";
};