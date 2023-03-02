import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from './button';
import { addBook } from '../../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    const min = 1;
    const max = 100;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    const formData = { item_id: randomNum + title, title, author };
    dispatch(addBook(formData));
    setTitle('');
    setAuthor('');
  };
  return (
    <form className="bookcontainer">
      <input type="text" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <Button
        color="#0290ff"
        text="Add"
        Click={handleSubmit}
      />
    </form>
  );
};

export default Form;
