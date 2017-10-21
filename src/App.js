import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBookshelves from './ListAllBookshelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <SearchBooks />
        )}
        />
        <Route exact path='/' render={() => (
          <ListAllBookshelves books={this.state.books} />
        )} />
      </div>
    )
  }
}

export default BooksApp
