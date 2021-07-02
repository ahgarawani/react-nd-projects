import React, { Component } from 'react'

class BookShelf extends Component{
  render() {
    this.props.books.map((book) => {
      let authorsStr = book.authors[0]
      for (let i = 1; i < book.authors.length; i++){
        authorsStr += `, ${book.authors[i]}`
      }
      book.authorsStr = authorsStr
      return book
    })

    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: book.imageLinks? `url(${book.imageLinks.thumbnail})`: '' }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={(event) => this.props.onChangeShelf(book, event.target.value)}>
                          <option value="move" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authorsStr}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf