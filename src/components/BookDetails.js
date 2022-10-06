import { PropTypes } from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteBookFromApi } from '../redux/books/books';

const BookDetails = ({ book }) => {
  const {
    // eslint-disable-next-line camelcase
    item_id, title, author, category,
  } = book;
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteBookFromApi(item_id));
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
      <p>
        Category:
        {category}
      </p>
      <button type="button" onClick={handleClick}>Remove</button>
    </>
  );
};

BookDetails.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookDetails;
