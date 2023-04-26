import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const { title, author, category } = props;
  return (
    <div className="book-details">
      <div>
        <p className="category">{category}</p>
        <h2 className="book-title">{title}</h2>
        <p className="author">{author}</p>
      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default Book;
