import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListAllBookshelves from './ListAllBookshelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
      console.log(books)
    })
  }

  render() {
    return (
      <div className="app">
        <Route path='/add-a-book' render={() => (
          <SearchBooks books={this.state.books} />
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
