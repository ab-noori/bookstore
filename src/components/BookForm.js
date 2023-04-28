import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BookForm = ({ handleAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = {
      item_id: `item${Math.random().toString(36).substring(7)}`,
      title: title.trim(),
      author: author.trim(),
      category: category.trim(),
    };
    handleAddBook(newBook);
    setTitle('');
    setAuthor('');
    setCategory('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">
        Title:
        <input type="text" id="title" value={title} onChange={(event) => setTitle(event.target.value)} required />
      </label>
      <label htmlFor="author">
        Author:
        <input type="text" id="author" value={author} onChange={(event) => setAuthor(event.target.value)} required />
      </label>
      <label htmlFor="category">
        Category:
        <input type="text" id="category" value={category} onChange={(event) => setCategory(event.target.value)} required />
      </label>
      <button type="submit">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  handleAddBook: PropTypes.func.isRequired,
};

export default BookForm;
