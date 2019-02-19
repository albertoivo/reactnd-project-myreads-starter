import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import Header from './Header'
import Footer from './Footer'
import { shelves } from './helper'
import PropTypes from 'prop-types'

const ListAllBookshelves = React.memo(function ListAllBookshelves({ myBooks, update }) {
  return (
    <div>
      <Header />
      <div className="list-books-content">
        {shelves.map(shelf => {
          return (
            <Shelf
              key={shelf.shelf}
              title={shelf.title}
              update={update}
              books={myBooks.filter(book => book.shelf === shelf.shelf)}
            />
          )
        })}
      </div>
      <div className="open-search">
        <Link to="/search">Search</Link>
      </div>
      <Footer />
    </div>
  )
})

ListAllBookshelves.propTypes = {
  myBooks: PropTypes.array.isRequired,
  update: PropTypes.func.isRequired
}

export default ListAllBookshelves
