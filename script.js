
var word = document.querySelector("h5");
var add = document.querySelector("#add");

let check = 0;
add.addEventListener("click", function () {
    if (check == 0) {
        word.innerHTML = ("Friend");
        word.style.color = ("green");
        add.innerHTML = ("Remove Friend")
        check = 1;
    } else {
        word.innerHTML = ("Strenger");
        word.style.color = ("red");
        add.innerHTML = ("Add Friend")
        check = 0;
    }
})