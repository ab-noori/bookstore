import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addBook, removeBook } from '../redux/books/booksSlice';
import BookForm from './BookForm';

const BookList = () => {
  const { books, status, error } = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [dispatch, status]);

  const handleAddBook = (book) => {
    dispatch(addBook(book));
  };

  const handleRemoveBook = (id) => {
    dispatch(removeBook(id));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
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
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          </li>
        ))}
      </ul>
      <BookForm onAdd={handleAddBook} />
    </div>
  );
};

export default BookList;
