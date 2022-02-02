let html = "";
for (var i = 0; i < localStorage.length; i++) {
  var a = localStorage.key(i);
  let val = JSON.parse(localStorage.getItem(a));
  console.log(a);

  html += `<div class="arrange">
     <p class="arr" id="n">Name:  ${val[0]}</p>
     <p class="arr" id="ph">Phone Number: ${val[2]}</p>
     <p class="arr" id="em">Email:  ${val[1]}</p>
     </div>`;
}

document.getElementById("view").innerHTML =` <div class="comp"> ${html}</div>`;
