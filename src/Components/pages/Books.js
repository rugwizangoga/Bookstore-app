import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../../redux/books/booksSlice';
import Book from './Book';
import Form from './Form';

const Books = () => {
  const booksList = useSelector((store) => store.books.books);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);
  const books = Object.keys(booksList);
  return (
    <>
      <ul>
        {
          // eslint-disable-next-line
          books.map((book) => <Book key={book} {...booksList[book][0]} id={book} />)
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
