import React from 'react';
import AddNewBook from './AddNewBook';
import BookContainer from './BookContainer';

const Book = () => {
  const books = [
    {
      id: 1,
      title: 'The Good Woman',
      author: 'Daniel Steel',
    },
    {
      id: 2,
      title: 'Dead Aid',
      author: 'Dambisa Moyo',
    },
    {
      id: 3,
      title: 'Gifted Hands',
      author: 'Ben Carson',
    },
    {
      id: 4,
      title: 'The will',
      author: 'Sonick Mumba',
    },
    {
      id: 5,
      title: 'The Real',
      author: 'Robert Kiyosaki',
    },
    {
      id: 6,
      title: 'The choice',
      author: 'Henry Denker',
    },
  ];

  return (
    <>
      <BookContainer books={books} />
      <AddNewBook />
    </>
  );
};

export default Book;
