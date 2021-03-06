import { getABook } from '../fetch-utils.js';
import { renderABook } from '../render-utils.js';

const bookDisplayEl = document.getElementById('book-display');

window.addEventListener('load', async() => {
    const params = (new URL(document.location)).searchParams;
    const id = params.get('id');
    const book = await getABook(id);
    const bookDisplay = renderABook(book);
    bookDisplayEl.append(bookDisplay);
});