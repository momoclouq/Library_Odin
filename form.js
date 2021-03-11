let form = document.querySelector("#addBookForm");
let showFormButton = document.querySelector("#submitBtn");
let closeFormButton = document.querySelector("#closeFormBtn");
let submitBookBtn = document.querySelector("#submitBookBtn");

//show the form when the button pressed
showFormButton.addEventListener("click", () => {
    form.classList.toggle("isVisible");
    resetForm();
});

closeFormButton.addEventListener("click", () => {
    form.classList.remove("isVisible");
    resetForm();
});

function resetForm(){
    //initialize all the required field for input
    let titleField = document.querySelector("#bTitle");
    let authorField = document.querySelector("#bAuthor");
    let pagesField = document.querySelector("#bPages");

    authorField.value = "";
    pagesField.value = "";
    titleField.value = "";
}

//get the data from the form and create a book
submitBookBtn.addEventListener('click', function(){
    //initialize all the required field for input
    let titleField = document.querySelector("#bTitle");
    let authorField = document.querySelector("#bAuthor");
    let pagesField = document.querySelector("#bPages");
    let readField = document.getElementsByName("readValue");

    //get the value
    let title = titleField.value;
    let author = authorField.value;
    let pages = pagesField.value;

    let test = title && author && pages && 0;

    if (test !== 0) alert("data missing, please enter all the data");
    else if (isNaN(pages)) alert("pages input is not a number baka");
    else {
        let read = true;

        for (let i = 0; i < readField.length; i++){
            if (readField[i].checked){
                read = (readField[i].value === "yes");
                readField[i].checked = false;
                break;
            }
        }

        let book = new Book(title, author, pages, read);
        myLibrary.push(book);
        let card = book.createCard(myLibrary.length-1);
        container.appendChild(card);
        authorField.value = "";
        pagesField.value = "";
        titleField.value = "";
    }
});



