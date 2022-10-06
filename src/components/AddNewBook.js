import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as id4 } from 'uuid';
import { newBook } from '../redux/books/books';

const AddNewBook = () => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitleInput = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthorInput = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategoryInput = (e) => {
    setCategory(e.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    if (title !== '' && author !== '') {
      dispatch(newBook({
        item_id: id4(), title, author, category,
      }));
    }
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form>
      <input type="text" placeholder="Book title" value={title} onChange={handleTitleInput} />
      <input type="text" placeholder="Book author" value={author} onChange={handleAuthorInput} />
      <input type="text" placeholder="Book category" value={category} onChange={handleCategoryInput} />
      <button type="button" onClick={handleClick}>ADD BOOK</button>
    </form>
  );
};

export default AddNewBook;
