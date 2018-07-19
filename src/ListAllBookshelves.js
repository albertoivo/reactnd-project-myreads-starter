import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import { shelves } from './helper'

const ListAllBookshelves = ({ myBooks, update }) => {
  return (
    <div className="list-books">
      <header id="header" class="navbar">
        <h1 class="logo">My Reads</h1>
      </header>
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
    </div>
  )
}

export default ListAllBookshelves
