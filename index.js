const title = document.querySelector("h1");

function handleTitleClick() {
  title.innerText = "Hello Mano!";
}

title.addEventListener("click", handleTitleClick);
