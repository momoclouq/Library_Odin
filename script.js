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

Book.prototype.createCard = function(index){
    let card = document.createElement("div");
    card.setAttribute("data-key", index);

    let cTitle = document.createElement("div");
    cTitle.textContent = "Title: " + this.title;
    let cAuthor = document.createElement("div");
    cAuthor.textContent = "Author: " + this.author;
    let cPages = document.createElement("div");
    cPages.textContent = "pages: " + this.pages;
    let cRead = document.createElement("div");
    cRead.id = "read" + index;
    cRead.textContent = "Read: " + this.read;

    let removeBtn = document.createElement('button');
    removeBtn.classList.add("cardButton");
    removeBtn.id = "removeBtn" + index;
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener('click', () => {
        let currentCard = document.querySelector(`.card[data-key="${index}"]`);
        myLibrary.splice(index, 1);
        currentCard.remove();
        console.log(myLibrary);
    });

    let changeReadBtn = document.createElement('button');
    changeReadBtn.classList.add("cardButton");
    changeReadBtn.id = "changeBtn" + index;
    changeReadBtn.textContent = "Change read status";
    changeReadBtn.addEventListener('click', function(){
        let currentCard = document.querySelector(`.card[data-key="${index}"]`);
        let cRead = currentCard.querySelector(`#read${index}`);
        this.read = !this.read;
        console.log(this.read);
        cRead.textContent = "Read: " + this.read;
    });

    //create the container
    let infoSection = document.createElement("div");
    let buttonSection = document.createElement("div");
    buttonSection.classList.add("buttonSection");

    infoSection.appendChild(cTitle);
    infoSection.appendChild(cAuthor);
    infoSection.appendChild(cPages);
    infoSection.appendChild(cRead);
    buttonSection.appendChild(removeBtn);
    buttonSection.appendChild(changeReadBtn);
    card.appendChild(infoSection);
    card.appendChild(buttonSection);
    card.classList.add("card");
    return card;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

//display all books in the library
function showAllBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        let card = myLibrary[i].createCard(i);
        container.appendChild(card);
    }
}

//testing with data
let book1 = new Book("Harry potter", "the witches", 1234, false);
let book2 = new Book("Dance with the angel", "James Bond", 666, false);
let book3 = new Book("Fly me to the moon", "Frank sinatra", 555, true);
let book4 = new Book("Tame the lioness", "James Conners", 244, true);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
addBookToLibrary(book4);

showAllBooks();


