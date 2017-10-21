import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class SearchBooks extends React.Component {

  static propTypes = {
    books: PropTypes.array.isRequired
  }

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {

    const { books } = this.props
    const { query } = this.state

    let showingBooks
    if (query) {
      const match = new  RegExp(escapeRegExp(query), 'i')
      showingBooks = books.filter((book) => match.test(book.title) || match.test(book.authors))
      //showingBooks = BooksAPI.search(query, 20).then()
    } else {
      showingBooks = books
    }

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
              value={query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
        </div>
        <div className="search-books-results">
            <Shelf
              shelf={showingBooks}
              title={showingBooks.length}
            />
        </div>
      </div>
    )
  }
}

export default SearchBooks