import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from './button';
import { checkStatus } from '../../redux/categories/categoriesSlice';

const Categories = () => {
  const { status } = useSelector((store) => store.status);
  const dispatch = useDispatch();
  return (
    <>
      <Button color="#0290ff" text="Check status" Click={() => { dispatch(checkStatus()); }} />
      <h5>{status}</h5>
    </>
  );
};
export default Categories;
