import React from 'react';
import { useSelector } from 'react-redux';
import BookDetails from './BookDetails';

const BookContainer = () => {
  const books = useSelector((state) => state.book);
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
