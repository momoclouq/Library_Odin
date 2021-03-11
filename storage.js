//manage localstorage of the library
let updateStorageBtn = document.querySelector("#updateStorageBtn");

//when clicked, update the current library to the storage
updateStorageBtn.addEventListener('click', () => {
    localStorage.setItem('library', JSON.stringify(myLibrary));
    alert("storage updated");
});

