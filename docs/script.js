let clickHelp = document.getElementById("help"),
    getHelp = document.getElementById("resource"),
    email = document.getElementById("email"),
    emailSection = document.getElementById("emailSection");

window.onload = function() {
  getHelp.classList.toggle('hideResources');
  emailSection.classList.toggle("hideEmailSetups");
};

clickHelp.onclick = function() {
  getHelp.classList.toggle('displayResources');
};

email.onmouseover = function(){
  emailSection.classList.add("displayEmailSetups");
}
email.onmouseout = function(){
  emailSection.classList.remove("displayEmailSetups");
}
