import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {
    myBooks: []
  }

  update = (book, shelf) => {
    BooksAPI.update(book, shelf).then((newBooks, rej) => {
      console.log('chamou o update')
      // this.setState({ myBooks: newBooks })
      this.state = { myBooks: newBooks }
      console.log('vai sair do update')
    })
  }

  componentWillReceiveProps(props) {
    console.log('chamou o componentWillReceiveProps')
    this.setState({ myBooks: props.books })
  }

  render() {
    const { myBooks } = this.state
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {(myBooks.error || myBooks === undefined) || myBooks.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks !== undefined ? book.imageLinks.smallThumbnail : ''})` }}></div>
                    <div className="book-shelf-changer">
                      <select
                        value={book.shelf || 'none'}
                        onChange={ (event) => this.update(book, event.target.value) }
                      >
                        <option value="" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                      </select>
                    </div>
                  </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors === undefined || book.authors.join(', ')}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default Shelf