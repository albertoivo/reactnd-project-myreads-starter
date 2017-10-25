import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ListAllBookshelves from './ListAllBookshelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'
import AlertContainer from 'react-alert'

class BooksApp extends React.Component {
  state = {
    myBooks: []
  }

  componentDidMount() {
    this.getAll()
  }

  getAll() {
    BooksAPI.getAll().then(books => {
      this.setState({ myBooks: books })
    })
  }

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then(newBooks => {
      this.getAll()
      BooksAPI.get(book.id).then(b => this.showAlert(b.title, b.shelf))
    })
  }

  alertOptions = {
    offset: 14,
    position: 'top right',
    theme: 'dark',
    time: 100,
    transition: 'scale'
  }

  showAlert = (bookTitle, newShelf) => {
    switch (newShelf) {
      case 'currentlyReading':
        newShelf = 'Currently Reading'
        break
      case 'wantToRead':
        newShelf = 'Want to Read'
        break
      case 'read':
        newShelf = 'Read'
        break
      default:
        newShelf = 'None'
    }
    let msgAlert
    if (newShelf === 'None') {
      msgAlert = `${bookTitle} is off the shelves`
    } else {
      msgAlert = `${bookTitle} is now on the shelf ${newShelf}`
    }
    this.msg.show(msgAlert, {
      time: 5000,
      type: 'success'
    })
  }

  render() {
    return (
      <div className="app">
        <AlertContainer ref={a => (this.msg = a)} {...this.alertOptions} />
        <Route
          exact
          path="/"
          render={() => (
            <ListAllBookshelves
              myBooks={this.state.myBooks}
              update={this.update.bind(this)}
            />
          )}
        />
        <Route
          path="/search"
          render={() => <SearchBooks update={this.update.bind(this)} />}
        />
      </div>
    )
  }
}

export default BooksApp
