import React from 'react'
import { Link } from 'react-router-dom'
import './App.css'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class ListAllBookshelves extends React.Component {

  state = {
    myBooks: []
  }

  componentDidMount() {
    console.log('chamou o didMount do ListAll')
    BooksAPI.getAll().then((books) => {
      this.setState({ myBooks: books })
    })
  }

  render() {
    const { myBooks } = this.state
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Shelf
            title='Currently Reading'
            books={myBooks.filter((book) => book.shelf === 'currentlyReading')}
          />
          <Shelf
            title='Want to Read'
            books={myBooks.filter((book) => book.shelf === 'wantToRead')}
          />
          <Shelf
            title='Read'
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