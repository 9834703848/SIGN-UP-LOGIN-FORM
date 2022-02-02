document.getElementById("logbtn").addEventListener("click", (e) => {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("pass").value;
  let details = JSON.parse(localStorage.getItem(email));
  console.log(details[3]);
  if (details[3] == pass) {
    const link = document.createElement("a");
    link.href = "details.html";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
  } else {
    console.log("you");
    alert("wrong pass");
  }
});
