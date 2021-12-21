export const renderBooks = (books) => {
    const binding = document.createElement('div');
    for (const book of books) {
        const coverEl = document.createElement('div');
        const titleEl = document.createElement('h3');
        const authorEl = document.createElement('p');
        const publisherEl = document.createElement('p');
        const isbnEl = document.createElement('p');
        const iamgeEl = document.createElement('img');

        titleEl.textContent = book.title;
        authorEl.textContent = book.author;
        publisherEl.textContent = book.publisher;
        isbnEl.textContent = book.isbn;
        iamgeEl.src = book.image;
        iamgeEl.classList.add('images');

        coverEl.append(titleEl, authorEl, publisherEl, isbnEl, iamgeEl);

        binding.append(coverEl);
    }
    return binding;
};