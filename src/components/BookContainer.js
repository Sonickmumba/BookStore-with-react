/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';
import BookDetails from './BookDetails';

const BookContainer = (props) => {
  const { books } = props;
  return (
    <div>
      {books.map((book) => (
        <div key={book.id}>
          <BookDetails book={book} />
        </div>
      ))}
    </div>
  );
};

export default BookContainer;
