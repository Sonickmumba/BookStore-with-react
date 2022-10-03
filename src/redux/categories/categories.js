// Action Type
// Reducer Function

const checkStatus = (state = false, action) => {
  switch (action.type) {
    case 'STATUS':
      return !state;
    case 'ADD_CATEGORY':
      return [...state, action.book];

    case 'REMOVE_CATEGORY':
      return state.filter((book) => book !== action.id);

    default:
      return state;
  }
};

// Add A Book Category action

export const addBook = (book) => ({
  type: 'ADD_CATEGORY',
  book,
});

// Remove a book Category action

export const deleteBook = (id) => ({
  type: 'REMOVE_CATEGORY',
  id,
});

export default checkStatus;
