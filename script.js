import {addBookForm} from "./form.js";

let myLibrary = [];

//DOM elements
let container = document.querySelector("#container");

//classes
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return this.title + " by " + this.author + ", " + this.pages + " pages, "
            + (this.read ? "already read" : "not read yet");
}

Book.prototype.createCard = function(){
    let card = document.createElement("div");
    let cTitle = document.createElement("div");
    cTitle.textContent = "Title: " + this.title;
    let cAuthor = document.createElement("div");
    cAuthor.textContent = "Author: " + this.author;
    let cPages = document.createElement("div");
    cPages.textContent = "pages: " + this.pages;
    let cRead = document.createElement("div");
    cRead.textContent = "Read: " + this.read;

    card.appendChild(cTitle);
    card.appendChild(cAuthor);
    card.appendChild(cPages);
    card.appendChild(cRead);
    card.classList.add("card");
    return card;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

//display all books in the library
function showAllBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        console.log("added");
        let card = myLibrary[i].createCard();
        container.appendChild(card);
    }
}

//testing with data
let book1 = new Book("Harry potter", "the witches", 1234, false);
let book2 = new Book("Dance with the angel", "James Bond", 666, false);
addBookToLibrary(book1);
addBookToLibrary(book2);
container.appendChild(addBookForm());

let showFormBtn = document.createElement("button");
showFormBtn.textContent = "Add a new book";
showFormBtn.addEventListener("click", change_visibility);

container.appendChild(showFormBtn);

function change_visibility(){
    let form = document.querySelector(".submit_form");
    form.style.visibility = "visible";
}
