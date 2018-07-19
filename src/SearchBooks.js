import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle'

class SearchBooks extends React.Component {
  state = {
    query: '',
    showingBooks: []
  }

  clearQuery() {
    this.setState({ query: '' })
    this.setState({ showingBooks: [] })
  }

  search = query => {
    this.setState({ query: query })
    if (query) {
      BooksAPI.search(query, 20).then(searchedBooks => {
        if (!searchedBooks.error) {
          searchedBooks.map(book => {
            let bookOnShelf = this.props.books.find(b => b.id === book.id)
            if (bookOnShelf) {
              book.shelf = bookOnShelf.shelf
            }
            return book
          })
        }
        this.setState({ showingBooks: searchedBooks })
      })
    } else {
      this.clearQuery()
    }
  }

  render() {
    const { query, showingBooks } = this.state
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <Debounce time="400" handler="onChange">
              <input
                type="text"
                placeholder="Search by title or author"
                onChange={event => this.search(event.target.value)}
              />
            </Debounce>
          </div>
        </div>
        <div className="search-books-results">
          {showingBooks !== undefined && showingBooks instanceof Array ? (
            <Shelf
              title={
                showingBooks.length > 0
                  ? 'Search Results'
                  : query ? 'Searching...' : ''
              }
              update={this.props.update}
              books={showingBooks}
            />
          ) : (
            <Shelf
              title={"Nothing's found. Sorry!"}
              update={this.props.update}
              books={[]}
            />
          )}
        </div>
      </div>
    )
  }
}

export default SearchBooks
