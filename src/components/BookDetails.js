import React from 'react';
import PropTypes from 'prop-types';

const BookDetails = (props) => {
  const { book } = props;
  return (
    <>
      <p>
        Book title:
        {book.title}
      </p>
      <p>
        Book author:
        {book.author}
      </p>
      <button type="button">Remove</button>
    </>
  );
};

BookDetails.propTypes = {
  book: PropTypes.node.isRequired,
};

export default BookDetails;
