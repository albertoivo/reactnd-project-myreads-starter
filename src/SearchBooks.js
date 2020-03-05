import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'
import { Debounce } from 'react-throttle'
import { SyncLoader } from 'react-spinners'

class SearchBooks extends Component {
  state = {
    query: '',
    searchedBooks: [],
    isLoading: false
  }

  clearQuery() {
    this.setState({query: '', searchedBooks: [], isLoading: false})
  }

  search = async query => {
    this.setState({query, isLoading: true})
    if (query) {
      let searchedBooks = await BooksAPI.search(query)
        if (!searchedBooks.error) {
          searchedBooks.map(book => {
            const bookOnShelf = this.props.books.find(b => b.id === book.id)
            if (bookOnShelf) {
              book.shelf = bookOnShelf.shelf
            }
            return book
          })
        }
        this.setState({searchedBooks, isLoading: false})
      } else {
      this.clearQuery()
    }
  }

  render() {
    const {searchedBooks, isLoading} = this.state
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
          {isLoading ?
            <div className="loading">
              <SyncLoader loading={true}/>
            </div>
            :
            searchedBooks && searchedBooks instanceof Array ?
              <Shelf
                title={`Search Results ( ${searchedBooks.length} )`}
                update={this.props.update}
                books={searchedBooks}
              />
              :
              <Shelf title={"Nothing's found. Sorry!"} />
          }
        </div>
      </div>
    )
  }
}

SearchBooks.propTypes = {
  books: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}

export default SearchBooks
