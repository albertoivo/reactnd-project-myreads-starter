import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ListAllBookshelves from './ListAllBookshelves'
import SearchBooks from './SearchBooks'
import * as BooksAPI from './BooksAPI'

class BooksApp extends React.Component {

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then((newBooks) => {
      BooksAPI.getAll().then((books) => {
        this.setState({ myBooks: books })
      })
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListAllBookshelves update={this.update.bind(this)} />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks update={this.update.bind(this)} />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
