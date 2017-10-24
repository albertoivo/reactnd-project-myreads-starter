import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import './App.css'

class ListAllBookshelves extends React.Component {
  render() {
    const { myBooks } = this.props
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf 
            title='Currently Reading'
            update={this.props.update}
            books={myBooks.filter((book) => book.shelf === 'currentlyReading')}
          />
          <Shelf
            title='Want to Read'
            update={this.props.update}
            books={myBooks.filter((book) => book.shelf === 'wantToRead')}
          />
          <Shelf
            title='Read'
            update={this.props.update}
            books={myBooks.filter((book) => book.shelf === 'read')}
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