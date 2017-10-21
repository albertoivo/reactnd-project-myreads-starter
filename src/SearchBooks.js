import React from 'react'
import { Link } from 'react-router-dom'
//import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
//import sortBy from 'sort-by'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  state = {
    query: '',
    showingBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
    if (query) {
      // const match = new  RegExp(escapeRegExp(query), 'i')
      // showingBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
      BooksAPI.search(query, 20).then((searchedBooks) => {
        this.setState({showingBooks: searchedBooks})
      })
    } else {
      this.setState({showingBooks: []})
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
          {console.log(this.state.showingBooks)}
          <Shelf
            title='Search Results'
            books={this.state.showingBooks !== undefined ? this.state.showingBooks : []}
          />
        </div>
      </div>
    )
  }
}

export default SearchBooks