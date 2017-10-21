import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import './App.css'
import Shelf from './Shelf'

class ListAllBookshelves extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {

    const { books } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            title='Currently Reading'
            books={books.filter((book) => book.shelf === 'currentlyReading')}
          />
          <Shelf
            title='Want to Read'
            books={books.filter((book) => book.shelf === 'wantToRead')}
          />
          <Shelf
            title='Read'
            books={books.filter((book) => book.shelf === 'read')}
          />
        </div>
        <div className="open-search">
          <Link to='/search'>Search</Link>
        </div>
      </div>
    )
  }
}

export default ListAllBookshelves