import React, {Component} from 'react';
import BookList from "./shelf";
import {Link} from "react-router-dom";


class ListBooks extends Component {
    render() {
        return (
            <div className="list-books">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                          <BookList
                            key="read"
                            books={
                                this.props.books &&
                                this.props.books.filter(book => book.shelf === "read")
                            }
                            updateShelf={this.props.updateShelf}
                            title="Read"
                        />
                        <BookList
                            key="currently"
                            books={
                                this.props.books &&
                                this.props.books.filter(
                                    book => book.shelf === "currentlyReading"
                                )
                            }
                            updateShelf={this.props.updateShelf}
                            title="Currently Reading"
                        />
                        <BookList
                            key="wantToRead"
                            books={
                                this.props.books &&
                                this.props.books.filter(book => book.shelf === "wantToRead")
                            }
                            updateShelf={this.props.updateShelf}
                            title="Want to Read"
                        />
                  
                    </div>
                </div>
                <div className="open-search">
                    <Link to="/Search">Add a book</Link>
                </div>
            </div>
        );
    }
}

export default ListBooks;
