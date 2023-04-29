import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const API = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/RzRSVJp7VfEx7Ax0frwL/books';

const BookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newBook = { title, author };
    try {
      const response = await axios.post(API, newBook);
      onAdd(response.data);
      setTitle('');
      setAuthor('');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button type="submit">Add Book</button>
    </form>
  );
};

BookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default BookForm;
