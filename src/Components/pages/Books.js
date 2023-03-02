import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const { books } = useSelector((store) => store.books);
  return (
    <>
      <ul>
        {
        // eslint-disable-next-line react/jsx-props-no-spreading
        books.map((book) => <Book key={book.item_id} {...book} />)
        }
      </ul>
      <hr />
      <h2 className="navigation">
        ADD NEW BOOK
      </h2>
      <Form />
    </>
  );
};

export default Books;
