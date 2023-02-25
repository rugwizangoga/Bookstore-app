import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

const Book = ({ title, author }) => (
  <li className="bookcontainer">
    <div className="book">
      <div className="details">
        <h3>{title}</h3>
        <p className="author">{author}</p>
      </div>
      <Button color="red" text="Remove" />
    </div>
    <Button color="#0290ff" text="UPDATE PROGRESS" />
  </li>
);

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Book;
