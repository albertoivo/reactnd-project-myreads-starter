import React from 'react'
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
            shelf={books.filter((book) => book.shelf === 'currentlyReading')}
            title='Currently Reading'
          />
          <Shelf
            shelf={books.filter((book) => book.shelf === 'wantToRead')}
            title='Want to Read'
          />
          <Shelf
            shelf={books.filter((book) => book.shelf === 'read')}
            title='Read'
          />
        </div>
      </div>
    )
  }
}

export default ListAllBookshelves