let form = document.querySelector("#addBookForm");
let button = document.querySelector("button");

button.addEventListener("click", () => {
    form.classList.toggle("isVisible");
});