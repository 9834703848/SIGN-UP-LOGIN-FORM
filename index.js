let re = localStorage.getItem("notes");

console.log(re);
document.getElementById("subbtn").addEventListener("click", (e) => {
  if (check() == true) {
    const link = document.createElement("a");
    link.href = "login.html";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
});
function ValidateEmail(mail) {
  return true;
}
function check() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let password = document.getElementById("password").value;
  let copassword = document.getElementById("cfpassword").value;
  console.log(name);

  let out = true;
  if (
    ValidateEmail(email) == false ||
    number.length != 10 ||
    name == "" ||
    password != copassword
  ) {
    out = false;
  }
  if (password != copassword) {
    document.getElementById("wpass").innerHTML = `<p>password must match</p>`;
  }
  if (out == true) {
    localStorage.setItem(
      email,
      JSON.stringify([name, email, number, password])
    );
  }
  return out;
}
