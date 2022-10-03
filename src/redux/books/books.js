// INITIAL STATE

export const initialState = [];

// BOOK REDUCER

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.book];
    case 'DELETE':
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

// action for adding a book

export const addBook = (book) => (
  {
    type: 'ADD',
    book,
  }
);

// action for removing a book

export const deleteBook = (id) => (
  {
    type: 'DELETE',
    id,
  }
);

export default bookReducer;
