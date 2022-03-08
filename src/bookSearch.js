import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import SearchBooksInput from "./SearchBooksInput";
import SearchResults from "./SearchResults";


class SearchBooks extends Component {

    render() {
        const {
            searchBooks,
            books,
            onSearch,
            onResetSearch
        } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <SearchBooksInput onSearch={onSearch}  />
                    <SearchResults  searchBooks={searchBooks} books={books}/>
                </div>
                <Link to="/">
                    <button className="close-search" onClick={onResetSearch}>
                        Close
                    </button>
                </Link>
            </div>
        );
    }
}

export default SearchBooks;
