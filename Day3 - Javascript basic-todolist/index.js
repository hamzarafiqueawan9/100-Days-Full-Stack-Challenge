let dipltext = document.getElementById("displ");
let btn = document.getElementById("add-btn");
let list = document.getElementById("list");
let delbtn = document.getElementById("delt");


btn.addEventListener('click', function () {

    if (dipltext.value.trim() == "") {
        alert("enter the value")
    } else
        list.innerHTML += `  <li>${dipltext.value} </li> `;
    dipltext.value = "";

}
)
