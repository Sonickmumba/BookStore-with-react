import React from 'react';
import PropTypes from 'prop-types';
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

BookContainer.propTypes = {
  books: PropTypes.node.isRequired,
};
export default BookContainer;
