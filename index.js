const title = document.querySelector("h1");

function handleTitleClick() {
  title.innerText = "Hello Mamo!";
}

title.addEventListener("click", handleTitleClick);
