import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      id: `item${books.length + 1}`,
      title: 'New Book',
      author: 'Unknown Author',
      category: 'Unknown Category',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (id) => {
    const bookToRemove = books.find((book) => book.id === id);
    dispatch(removeBook(bookToRemove));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>
              {book.title}
              &nbsp;
              &nbsp;
              by
              &nbsp;
              &nbsp;
              {book.author}
            </span>
            &nbsp;
            &nbsp;
            <button type="button" onClick={() => handleRemoveBook(book.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleAddBook}>Add Book</button>
    </div>
  );
};

export default BookList;
