let form = document.querySelector("#addBookForm");
let showFormButton = document.querySelector("#submitBtn");
let submitBookBtn = document.querySelector("#submitBookBtn");

//show the form when the button pressed
showFormButton.addEventListener("click", () => {
    form.classList.toggle("isVisible");
});

//get the data from the form and create a book
submitBookBtn.addEventListener('click', function(){
    let titleField = document.querySelector("#bTitle");
    let title = titleField.value;

    let authorField = document.querySelector("#bAuthor");
    let author = authorField.value;

    let pagesField = document.querySelector("#bPages");
    let pages = pagesField.value;

    let readField = document.getElementsByName("readValue");
    let read = true;
    for (let i = 0; i < readField.length; i++){
        if (readField[i].checked){
            read = (readField.value === 'true');
        }
    }

    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    let card = book.createCard(myLibrary.length-1);
    container.appendChild(card);
    console.log(myLibrary);
})



