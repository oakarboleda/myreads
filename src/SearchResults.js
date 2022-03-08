import React from 'react';
import Book from './book';

const SearchResults = props => {
    const { searchBooks, books, updateShelf } = props;

    const updatedBooks = searchBooks.map(book => {
        books.map(b => {
            if (b.id === book.id) {
                book.shelf = b.shelf;
            }
            return b;
        });
        return book;
    });
    return (
        <div className="search-books-results">
            <ol className="books-grid">
                {updatedBooks.map(book => (
                    <Book
                        key={book.id}
                        book={book}
                        shelf={book.shelf ? book.shelf : 'none'}
                        updateShelf={updateShelf}
                    />
                ))}
            </ol>
        </div>
    );
};

export default SearchResults;
