import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookShelf from './BookShelf'
import { Redirect } from "react-router-dom"


class SearchPage extends Component {
  state = {
    redirect: null,
    query: '',
    currentlyReading: [],
    wantToRead: [],
    read: [],
    none: []
  }

  performSearch = (query, books) => {
    if (query !== ''){
      this.setState({ query: query.trim() })
      setTimeout(() => {
        BooksAPI.search(query).then((response) => {
          if(response && !response.error){
            this.updateSearchedBooks(response, books)
          }
        })  
      }, 200)
    } else {
      this.resetState()
    }
  }

  updateSearchedBooks = (response, books) => {
     const searchedBooks = response.map((book) => {
      if (!book.authors) {
        book.authors = ['']
      }
      book.shelf = 'none'
      for (let i = 0; i < books.length; i++){
        if (book.id === books[i].id){
          book.shelf = books[i].shelf
        }
      }
      return book
    })

    this.setState({
      currentlyReading: searchedBooks.filter((book) => book.shelf === 'currentlyReading'),
      wantToRead: searchedBooks.filter((book) => book.shelf === 'wantToRead'),
      read: searchedBooks.filter((book) => book.shelf === 'read'),
      none: searchedBooks.filter((book) => book.shelf === 'none')
    })
  }

  performChangeShelf = (book, shelf) => {
    this.props.onChangeShelf(book, shelf)
    this.setState({ redirect: '/' })
  }

  resetState = () => {
    this.setState({
      query: '',
      currentlyReading: [],
      wantToRead: [],
      read: [],
      none: []
    })
  }

  render(){
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className='close-search' onClick={this.clearQuery} to='/'>Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={(event) => this.performSearch(event.target.value, this.props.books)}/>
          </div>
        </div>
        <div className="search-books-results">
          {this.state.currentlyReading.length > 0 && (
            <BookShelf
              title='Currently Reading'
              books={this.state.currentlyReading}
              onChangeShelf={this.performChangeShelf}
            />
          )}
          {this.state.wantToRead.length > 0 && (
            <BookShelf
              title='Want To Read'
              books={this.state.wantToRead}
              onChangeShelf={this.performChangeShelf}
            />
          )}
          {this.state.read.length > 0 && (
            <BookShelf
              title='Read'
              books={this.state.read}
              onChangeShelf={this.performChangeShelf}
            />
          )}
          {this.state.query.length > 0 && (
            <BookShelf
              title=''
              books={this.state.none}
              onChangeShelf={this.performChangeShelf}
            />
          )}
        </div>
      </div>
    )
  }
}

export default SearchPage
