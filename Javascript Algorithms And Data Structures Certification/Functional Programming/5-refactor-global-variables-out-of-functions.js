// the global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


function add (listOfBooks,bookName) {
  let result=[...listOfBooks];
  result.push(bookName);
  
  return result;
  
}

/* This function should remove a book from the list and return the list */
// New parameters should come before the bookName one

// Add your code below this line
function remove (listOfBooks,bookName) {
  let result=[...listOfBooks];
  if (result.indexOf(bookName) >= 0) {
    result.splice(result.indexOf(bookName), 1);
  
  return result;
  }
}

var newBookList = add(bookList,'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

console.log(newestBookList);
