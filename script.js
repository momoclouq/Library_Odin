let myLibrary = addBookFromStorage(localStorage.getItem('library') ? JSON.parse(localStorage.getItem('library')) : []);

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

function addBookFromStorage(importedLibrary){
    if (importedLibrary.length == 0) return [];
    else {
        let library = [];
        for (let i = 0; i < importedLibrary.length; i++){;
            library.push(new Book(importedLibrary[i].title, importedLibrary[i].author, importedLibrary[i].pages, importedLibrary[i].read));
        }
        return library;
    }
}

//display all books in the library
function showAllBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        let card = myLibrary[i].createCard(i);
        container.appendChild(card);
    }
}
//testing with data
showAllBooks();


