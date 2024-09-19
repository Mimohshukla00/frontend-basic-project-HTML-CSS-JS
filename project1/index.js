const button = document.querySelectorAll(".button");
// console.log(button);
const body = document.querySelector("#mimoh");
// console.log(body);
button.forEach(function (button) {
  button.addEventListener("click", function (e) {
    console.log(e.target);
    if (e.target.id == "red") {
      body.style.backgroundColor = "red";
    } else if (e.target.id == "pink") {
      body.style.backgroundColor = "pink";
    } else if (e.target.id == "blue") {
      body.style.backgroundColor = "blue";
    } else {
      body.style.backgroundColor = "grey";
    }
  });
});
