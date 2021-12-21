export const renderBooks = (books) => {
    const binding = document.createElement('div');
    for (const book of books) {
        const coverEl = document.createElement('div');
        coverEl.classList.add('book-cover');
        const titleEl = document.createElement('h3');
        const authorEl = document.createElement('p');
        authorEl.classList.add('authors');

        const iamgeEl = document.createElement('img');
        const anchor = document.createElement('a');
        anchor.href = `./books/?id=${book.id}`;
        
        titleEl.textContent = book.title;
        authorEl.textContent = listAuthors(book.author);
        iamgeEl.src = book.image;
        iamgeEl.classList.add('images');
        anchor.append(iamgeEl);

        coverEl.append(titleEl, anchor, authorEl);

        binding.append(coverEl);
    }
    return binding;
};

export const renderABook = (book) => {

    const coverEl = document.createElement('div');
    const titleEl = document.createElement('h1');
    const authorEl = document.createElement('p');
    authorEl.classList.add('authors');
    const publisherEl = document.createElement('p');
    publisherEl.classList.add('authors');
    const isbnEl = document.createElement('p');
    isbnEl.classList.add('authors');
    const iamgeEl = document.createElement('img');
    const anchor = document.createElement('a');
    anchor.href = ``;

    titleEl.textContent = book.title;
    authorEl.textContent = listAuthors(book.author);
    publisherEl.textContent = `Published by: ${book.publisher}`;
    isbnEl.textContent = ` ISBN: ${book.isbn}`;
    iamgeEl.src = book.image;
    iamgeEl.classList.add('images');
    anchor.append(iamgeEl);

    coverEl.append(titleEl, anchor, authorEl, publisherEl, isbnEl);

    return coverEl;
};

const listAuthors = (authors) => {
    let authorString = 'Authored by : ';

    if (authors.length === 1) {
        authorString += authors;
    } else {
        for (const author of authors) {
            if (author === authors[authors.length - 1]) {
                authorString += author;
            } else {
                authorString += `${author}, `;
            }
        }
    }
    return authorString;
};


