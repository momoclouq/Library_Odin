function addBookForm(){
    let form = document.createElement("div");

    let formTitle = document.createElement("h1");
    formTitle.textContent = "Add a new book";
     
    let inputFieldTitle = createInputField("bookTitle", "Title: ");
    let inputFieldAuthor =  createInputField("bookAuthor", "Author: ");
    let inputFieldPages = createInputField("bookPages", "Pages: ");
    let inputFieldRead = createInputField("bookRead", "Read: ");

    let submitBtn = document.createElement("button");
    submitBtn.textContent = "submit";

    form.appendChild(formTitle);
    form.appendChild(inputFieldTitle);
    form.appendChild(inputFieldAuthor);
    form.appendChild(inputFieldPages);
    form.appendChild(inputFieldRead);
    form.appendChild(submitBtn);

    form.classList.add("submit_form");

    return form;
}

function createInputField(key, value){
    //if (typeof key != string || typeof value != string) throw "no value input";

    let label = document.createElement("label");
    label.setAttribute("for", key);
    label.textContent = value;

    let textInputField = document.createElement("input");
    textInputField.setAttribute("type" ,"text");
    textInputField.setAttribute("id", key);
    textInputField.setAttribute("name", key);
    
    return label, textInputField;
}

export {addBookForm};