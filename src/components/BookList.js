import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

const BookList = ({ books, onDelete }) => (
  <div>
    {books.map((book) => (
      <Book key={book.id} book={book} onDelete={onDelete} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
export default BookList;
