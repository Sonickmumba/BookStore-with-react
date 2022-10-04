import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBook } from '../redux/books/books';

const BookDetails = ({ book }) => {
  const { id, title, author } = book;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBook(id));
  };
  return (
    <>
      <p>
        Book title:
        {title}
      </p>
      <p>
        Book author:
        {author}
      </p>
      <button type="button" onClick={handleClick}>Remove</button>
    </>
  );
};

BookDetails.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookDetails;
