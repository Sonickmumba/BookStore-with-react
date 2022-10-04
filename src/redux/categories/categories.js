// Action Type
const STATUS = 'BOOKSTORE/categories/STATUS';
const REMOVE_CATEGORY = 'BOOKSTORE/categories/REMOVE_CATEGORY';
const ADD_CATEGORY = 'BOOKSTORE/categories/ADD_CATEGORY';

// Reducer Function

const checkStatus = (state = false, action) => {
  switch (action.type) {
    case STATUS:
      return !state;
    case ADD_CATEGORY:
      return [...state, action.payload];

    case REMOVE_CATEGORY:
      return state.filter((book) => book !== action.payload);

    default:
      return state;
  }
};

// Add A Book Category action

export const addBookCategory = (book) => ({
  type: ADD_CATEGORY,
  payload: book,
});

// Remove a book Category action

export const deleteBookCategory = (id) => ({
  type: REMOVE_CATEGORY,
  payload: id,
});

export default checkStatus;
