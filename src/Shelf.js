import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

const Shelf = React.memo(function Shelf({ title, books = [], update }) {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{title}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.id}>
              <Book book={book} update={update} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
})

Shelf.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}

export default Shelf
