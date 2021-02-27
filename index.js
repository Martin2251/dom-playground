const button = document.querySelector ("#click-me");
button.addEventListener('click', (event) => {
  event.currentTarget.innerText = "please wait...";
});

const button = document.querySelector ("#moo");
button.addEventListener('click', (event) => {
  event.currentTarget.innerText = "moooooooooooo";
});

const romain = document.getElementById("romain");
romain.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.currentTarget);
});
