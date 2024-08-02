// book list array
let bookList = [];

// get book list element
const bookListElement = document.getElementById('book-list');

// get add book form element
const addBookFormElement = document.getElementById('add-book-form');

// get add book button element
const addBookButtonElement = document.getElementById('add-book-btn');

// function to generate book list
function generateBookList() {
    bookListElement.innerHTML = '';
    bookList.forEach((book) => {
        const bookElement = document.createElement('li');
        bookElement.textContent = `${book.title} by ${book.author} (${book.genre})`;
        bookListElement.appendChild(bookElement);
    });
}

// function to add book to list
function addBook(title, author, genre) {
    const book = {
        title,
        author,
        genre
    };
    bookList.push(book);
    generateBookList();
}

// event listener for add book button
addBookButtonElement.addEventListener('click', (e) => {
    e.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    addBook(title, author, genre);
    addBookFormElement.reset();
});

// generate book list on page load
generateBookList();