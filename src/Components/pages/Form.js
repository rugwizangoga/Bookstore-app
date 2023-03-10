import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import Button from './button';
import { addBooks } from '../../redux/books/booksSlice';

const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) {
      return;
    }
    const formData = {
      item_id: nanoid(),
      title,
      author,
      category: 'fiction',
    };
    dispatch(addBooks(formData));
    setTitle('');
    setAuthor('');
  };
  return (
    <form>
      <input type="text" className="bookTitle" placeholder="Book Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" className="bookAuthor" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
      <Button
        color="#0290ff"
        text="ADD BOOK"
        Click={
            handleSubmit
        }
      />
    </form>
  );
};

export default Form;
