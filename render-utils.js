export const renderBooks = (books) => {
    const binding = document.createElement('div');
    for (const book of books) {
        console.log(book);
        const coverEl = document.createElement('div');
        const titleEl = document.createElement('h3');
        const authorEl = document.createElement('p');
        const publisherEl = document.createElement('p');
        const isbnEl = document.createElement('p');
        const iamgeEl = document.createElement('img');
        const anchor = document.createElement('a');
        anchor.href = `./books/?id=${book.id}`;
        

        titleEl.textContent = book.title;
        authorEl.textContent = book.author;
        publisherEl.textContent = book.publisher;
        isbnEl.textContent = book.isbn;
        iamgeEl.src = book.image;
        iamgeEl.classList.add('images');
        anchor.append(iamgeEl);

        coverEl.append(titleEl, anchor, authorEl, publisherEl, isbnEl);

        binding.append(coverEl);
    }
    return binding;
};

export const renderABook = (book) => {
    const coverEl = document.createElement('div');
    const titleEl = document.createElement('h3');
    const authorEl = document.createElement('p');
    const publisherEl = document.createElement('p');
    const isbnEl = document.createElement('p');
    const iamgeEl = document.createElement('img');
    const anchor = document.createElement('a');
    anchor.href = `./books/?id=${book.id}`;
    

    titleEl.textContent = book.title;
    authorEl.textContent = book.author;
    publisherEl.textContent = book.publisher;
    isbnEl.textContent = book.isbn;
    iamgeEl.src = book.image;
    iamgeEl.classList.add('images');
    anchor.append(iamgeEl);

    coverEl.append(titleEl, anchor, authorEl, publisherEl, isbnEl);

    return coverEl;
};


