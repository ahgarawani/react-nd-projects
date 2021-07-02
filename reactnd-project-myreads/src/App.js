import React from 'react'
import { Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import SearchPage from './SearchPage'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  fetchBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  componentDidMount() {
    this.fetchBooks()
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(()=>{
      this.fetchBooks()
    })
  }

  render() {
    let currentlyReadingShelf = this.state.books.filter((book) => book.shelf === 'currentlyReading')
    let WantToReadShelf = this.state.books.filter((book) => book.shelf === 'wantToRead')
    let readShelf = this.state.books.filter((book) => book.shelf === 'read')
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title='Currently Reading'
                  books={currentlyReadingShelf}
                  onChangeShelf={this.changeShelf}
                />
                <BookShelf
                  title='Want to Read'
                  books={WantToReadShelf}
                  onChangeShelf={this.changeShelf}
                />
                <BookShelf
                  title='Read'
                  books={readShelf}
                  onChangeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <Link className="open-search-button" to='/search'>Add a book</Link>
            </div>
          </div>
        )}/>

        <Route path='/search' render={() => (
          <SearchPage books={this.state.books} onChangeShelf={this.changeShelf} history={this.props.history}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
