import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import Button from './button';
import { removeBook } from '../../redux/books/booksSlice';

// eslint-disable-next-line
const Book = ({ item_id, title, author }) => {
  const dispatch = useDispatch();
  return (
    <li className="bookcontainer">
      <div className="book">
        <div className="details">
          <h3>{title}</h3>
          <p className="author">{author}</p>
        </div>
        <Button color="red" text="Remove" Click={() => { dispatch(removeBook(item_id)); }} />
      </div>
      <Button color="#0290ff" text="UPDATE PROGRESS" />
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  item_id: PropTypes.string.isRequired,
};

export default Book;
