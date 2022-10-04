import React from 'react';
import { useDispatch } from 'react-redux';
import { statusCheck } from '../redux/categories/categories';

const Category = () => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(statusCheck());
  };

  return (
    <>
      <div>
        <button type="button" onClick={handleClick}>Check Status</button>
      </div>
    </>
  );
};

export default Category;
