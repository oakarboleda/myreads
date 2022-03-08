import React from 'react';
import Book from "./book";


const Bookshelf = (props) => {

    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{props.title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {props.books &&
                        props.books.map(book => (
                            <li key={book.id} className="book">
                                <Book book={book} updateShelf={props.updateShelf} />
                            </li>
                        ))}
                </ol>
            </div>
        </div>
    );
};


export default Bookshelf;

