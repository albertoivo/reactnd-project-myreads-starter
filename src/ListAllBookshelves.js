import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'

const shelves = [
  { title: 'Currently Reading', shelf: 'currentlyReading' },
  { title: 'Want to Read', shelf: 'wantToRead' },
  { title: 'Read', shelf: 'read' }
]

const ListAllBookshelves = ({ myBooks, update }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
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
