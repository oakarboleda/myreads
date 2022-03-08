import React from 'react'
import BookshelfChanger from "./ChangeShelf";


const Book = props => {
    const {book, shelf } = props;
    return (
        <li key={book.id}>
            <div className="book">
                <div className="book-top">
                    <div
                        className="book-cover"
                        style={{
                            width: 128,
                            height: 193,
                            backgroundImage: `url(${book.imageLinks.thumbnail})`,
                        }}
                    />
                    <BookshelfChanger updateShelf={props.updateShelf} book={book} shelf={shelf}/>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors.join(', ')}</div>
            </div>
        </li>
    );
};
export default Book;

