import React from 'react'
import { Route } from 'react-router-dom'
import './App.css'
import ListAllBookshelves from './ListAllBookshelves'
import SearchBooks from './SearchBooks'

class BooksApp extends React.Component {

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <ListAllBookshelves />
        )} />
        <Route path='/search' render={() => (
          <SearchBooks />
        )}
        />
      </div>
    )
  }
}

export default BooksApp
