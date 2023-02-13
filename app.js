let myLibraryArray = [];
let i = 0;

class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

const closeBtn = document.querySelector('#close');
const wrapFrom = document.querySelector('.container');
const newBookBtn = document.querySelector('#new-book-btn');
const main = document.querySelector('main');
const form = document.querySelector('#form-book');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    wrapFrom.style.display = "none";
    main.style.display = "block";
    const bookTitle = form.elements['title']['value'];
    const bookAuthor = form.elements['author']['value'];
    const bookPages = form.elements['pages']['value'];
    const readStatus = form.elements['read']['value'];

    let library = document.createElement('div');
    let wrapper = document.createElement('div');
    let BookDetails = document.createElement('ul');
    let horizontalLine = document.createElement('hr');
    let removeBtn = document.createElement('button');

    library.classList.add('library');
    library.setAttribute('data-index', i);
    main.prepend(library);

    wrapper.classList.add('wrapper');
    library.appendChild(wrapper);

    wrapper.appendChild(BookDetails);
    wrapper.appendChild(horizontalLine);

    removeBtn.classList.add('remove');
    removeBtn.textContent = "Remove";
    wrapper.appendChild(removeBtn);




    // Main Book Details: Title, Author, Number of Pages, Status

    let displayTitle = document.createElement('li');
    let displayAuthor = document.createElement('li');
    let displayPages = document.createElement('li');
    let displayStatus = document.createElement('li');

    // For Title contents to  be displayed on the card

    let breaklineForTitle = document.createElement('br');
    let containTitleText = document.createElement('span');

    containTitleText.classList.add('italic');

    displayTitle.textContent = "Title";
    displayTitle.appendChild(breaklineForTitle);
    displayTitle.appendChild(containTitleText);

    // For Author contents to  be displayed on the card

    let breaklineForAuthor = document.createElement('br');
    let containAuthorText = document.createElement('span');
    containAuthorText.classList.add('author');

    displayAuthor.textContent = "Author";
    displayAuthor.appendChild(breaklineForAuthor);
    displayAuthor.appendChild(containAuthorText);


    // For No. of page(s) contents to  be displayed on the card

    let breaklineForPages = document.createElement('br');
    let containPagesText = document.createElement('span');
    containPagesText.classList.add('pages');

    displayPages.textContent = "Pages";
    displayPages.appendChild(breaklineForPages);
    displayPages.appendChild(containPagesText);


    // For No. of status contents to  be displayed on the card

    let buttonForStatus = document.createElement('button');

    displayStatus.textContent = "Status";
    buttonForStatus.setAttribute('id', 'status');
    displayStatus.appendChild(buttonForStatus);



    let newBook = new Book(bookTitle, bookAuthor, bookPages, readStatus)
    myLibraryArray.push(newBook);

    containTitleText.textContent = myLibraryArray[i]['title'];
    containAuthorText.textContent = myLibraryArray[i]['author'];
    containPagesText.textContent = myLibraryArray[i]['pages'];
    buttonForStatus.textContent = myLibraryArray[i]['status'];

    console.log(myLibraryArray.length);
    let remove = document.querySelectorAll('.remove');


    // Remove a book from the library
    remove.forEach((btn) => btn.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.style.display = "none";
        myLibraryArray.splice(library.dataset.index, 1);
        console.log(myLibraryArray);
    }))
    i++;


    BookDetails.appendChild(displayTitle);
    BookDetails.appendChild(displayAuthor);
    BookDetails.appendChild(displayPages);
    BookDetails.appendChild(displayStatus);

})

form.onsubmit = e => {
    e.target.reset();
    return false;
}
const closeForm = () => {
    wrapFrom.style.display = "none";
    main.style.display = "block";
}
const openForm = () => {
    wrapFrom.style.display = "block";
    main.style.display = "none";
}