/* eslint-disable react/prop-types */
/* eslint-disable react/no-typos */
import React from 'react';

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

// BookDetails.propTypes = {
//   book: PropTypes.node.isRequired,
// };

export default BookDetails;
