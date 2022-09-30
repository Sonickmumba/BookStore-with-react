import React from "react";

const BookDetails = (props) => {
  return (
    <>
      <p>Book title: {props.book.title}</p>
      <p>Book author: {props.book.author}</p>
      <button>Remove</button>
    </>
  );
};

export default BookDetails;
