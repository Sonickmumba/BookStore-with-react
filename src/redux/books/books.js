const ADD = 'BOOKSTORE/books/ADD';
const DELETE = 'BOOKSTORE/books/DELETE';
// INITIAL STATE

export const initialState = [];

// BOOK REDUCER

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return [...state, action.payload];
    case DELETE:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

// action for adding a book

export const addBook = (book) => (
  {
    type: ADD,
    payload: book,
  }
);

// action for removing a book

export const deleteBook = (id) => (
  {
    type: DELETE,
    payload: id,
  }
);

export default bookReducer;
