import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom';
import ListBooks from "./ListBooks";
import SearchBooks from "./bookSearch";

class BooksApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            searchBooks:[],
            bookshelves: [
                { key: 'currentlyReading', name: 'Currently Reading' },
                { key: 'wantToRead', name: 'Want to Read' },
                { key: 'read', name: 'Have Read' },
            ]
        };

    }

  componentDidMount() {
      BooksAPI.getAll().then(books => this.setState({ books }));

  }
    searchForBooks = query => {
        if (query.length > 0) {
            BooksAPI.search(query).then(books => {
                if (books.error) {
                    this.setState({ searchBooks: [] });
                } else {
                    this.setState({ searchBooks: books });
                }
            });
        } else {
            this.setState({ searchBooks: [] });
        }
    };
  updateShelf = (book, shelf) => {
        BooksAPI.update(book, shelf).then(resp => {
            book.shelf = shelf;
            this.setState(prevState => ({
                books: prevState.books
                    .filter(newBook => newBook.id !== book.id)
                    .concat(book)
            }));
        });
    };


    resetSearch = () => {
        this.setState({ searchBooks: [] });
    };



    render() {
        const { books, searchBooks } = this.state;
        return (

        <div className="app">
            <Route
                    exact
                    path="/"
                    render={() => (
                        <ListBooks
                            bookshelves={this.bookshelves}
                            books={this.state.books}
                            updateShelf={this.updateShelf}

                        />
                    )}
                />
            <Route
                exact
                path="/search"
                render={() => (
                    <SearchBooks
                        onSearch={this.searchForBooks}
                        onResetSearch={this.resetSearch}
                        searchBooks={searchBooks}
                        books={books}

                    />
                )}
            />


        </div>
    )
  }
}

export default BooksApp
