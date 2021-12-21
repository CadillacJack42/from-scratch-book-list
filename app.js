// import functions and grab DOM elements
import { getBooks } from "./fetch-utils.js";


// let state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
const fetcher = async() => {
    let allBooks = await getBooks();
    console.log(allBooks);
};
fetcher();


console.log("I'm a book shelf");