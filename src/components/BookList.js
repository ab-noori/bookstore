import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from '../redux/books/booksSlice';
import BookForm from './BookForm';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = (newBook) => {
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            <span>
              {book.item_id}
              &nbsp;&nbsp;
              {book.title}
              &nbsp;&nbsp;
              by
              &nbsp;&nbsp;
              {book.author}
              &nbsp;&nbsp;
            </span>
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          </li>
        ))}
      </ul>
      <BookForm handleAddBook={handleAddBook} />
    </div>
  );
};

export default BookList;
