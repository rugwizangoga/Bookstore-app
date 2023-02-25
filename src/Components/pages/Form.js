import React from 'react';
import Button from './button';

const Form = () => (
  <form className="bookcontainer">
    <input type="text" placeholder="Book Title" />
    <input type="text" placeholder="Author" />
    <Button color="#0290ff" text="Add" />
  </form>
);

export default Form;
