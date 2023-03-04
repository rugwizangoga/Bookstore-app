import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgress } from '@mui/material';
import Button from './button';
import { deleteBook } from '../../redux/books/booksSlice';

const Book = (
  {
    id,
    title,
    author,
    category,
  },
) => {
  const dispatch = useDispatch();
  return (
    <li className="bookcontainer">
      <div className="book">
        <div className="details">
          <p className="cat">{category}</p>
          <p className="tit">{title}</p>
          <p className="aut">{author}</p>
        </div>
        <div className="buttons">
          <button type="button" className="buts aut bord">Comment</button>
          <button type="button" className="buts aut bord" onClick={() => { dispatch(deleteBook({ item_id: id })); }}>Remove</button>
          <button type="button" className="buts aut">Edit</button>
        </div>
      </div>
      <div className=" circular">
        <CircularProgress size="50px" variant="determinate" value={75} />
        <div className="details">
          <p className="per">64%</p>
          <p className="author">complete</p>
        </div>
      </div>
      <div className="circularp">
        <div className="details">
          <p className="current">CURRENT CHAPTER</p>
          <p className="intro">Introduction</p>
        </div>
        <Button color="#0290ff" text="UPDATE PROGRESS" />
      </div>
    </li>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
