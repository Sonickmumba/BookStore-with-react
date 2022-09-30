import React from 'react';
import BookDetails from './BookDetails';

const BookContainer = (props) => {
  return (
    <div>
      {props.books.map(book => (
        <div key={book.id}>
          <BookDetails book={book}/>
        </div>
      ))}
    </div>
  )
}

export default BookContainer;