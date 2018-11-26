import React from 'react'
import PropTypes from 'prop-types'
import { shelves } from './helper'
import StarRatingComponent from 'react-star-rating-component'
import thumb from './icons/book-cover.jpg'

const Book = ({ book, update }) => {
  return (
    <div className="book">
      <div className="book-top">
        <a href={book.previewLink} target="_blank" rel="noopener noreferrer">
          <img className="book-cover" alt="loading cover..."
            src={book.imageLinks ? book.imageLinks.thumbnail : thumb}
          />
        </a>
        <div className="book-shelf-changer">
          <select
            value={book.shelf || 'none'}
            onChange={event => update(book, event.target.value)}
          >
            <option value="" disabled>
              Move to...
            </option>
            {shelves.map(s => (<option key={s.shelf} value={s.shelf}>{s.title}</option>))}
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <StarRatingComponent name="book-rate" value={book.averageRating} />
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors && book.authors.join(', ')}
      </div>
    </div>
  )
}

Book.propTypes = {
  book: PropTypes.shape({
    previewLink: PropTypes.string,
    imageLinks: PropTypes.object,
    averageRating: PropTypes.number,
    authors: PropTypes.array
  }).isRequired,
  update: PropTypes.func.isRequired
}

export default Book