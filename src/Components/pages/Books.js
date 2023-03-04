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
      <div className="bookbox">
        {
          // eslint-disable-next-line
          books.map((book) => <Book key={book} {...booksList[book][0]} id={book} />)
        }
      </div>
      <hr />
      <h2 className="AddBook">
        ADD NEW BOOK
      </h2>
      <Form />
    </>
  );
};

export default Books;
