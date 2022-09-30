import React from 'react';

const AddNewBook = () => {
  return (
    <form>
      <input type='text' placeholder='Book title' />
      <input type='text' placeholder='Book author' />
      <button>ADD BOOK</button>
    </form>
  )
}

export default AddNewBook;