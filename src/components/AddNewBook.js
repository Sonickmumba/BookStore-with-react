import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const books = useSelector((state) => state.book);

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInput = (e) => {
    setAuthor(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(addBook({ id: books.length + 1, title, author }));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <form>
      <input type="text" placeholder="Book title" value={title} onChange={handleTitleInput} />
      <input type="text" placeholder="Book author" value={author} onChange={handleAuthorInput} />
      <button type="button" onClick={handleClick}>ADD BOOK</button>
    </form>
  );
};

export default AddNewBook;
