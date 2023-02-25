import React from 'react';
import Book from './Book';
import Form from './Form';

const booklist = [
  {
    id: '01G',
    title: 'The Hunger Games',
    author: 'Suzanne Collins',
  },
  {
    id: '02G',
    title: 'The Hames',
    author: 'Suz lins',
  },
  {
    id: '03G',
    title: 'Thames',
    author: 'zanne Col',
  }];

const Books = () => (
  <>
    <ul>
      {
        booklist.map((book) => (<Book key={book.id} title={book.title} author={book.author} />))
      }
    </ul>
    <hr />
    <h2 className="navigation">
      ADD NEW BOOK
    </h2>
    <Form />
  </>
);

export default Books;
