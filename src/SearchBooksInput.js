import React from 'react';



class SearchBooksInput extends React.Component {
        state = {
                value: '',
        };
        handleChange = event => {
                const val = event.target.value;
                this.setState({value:val}, () => {
                        this.props.onSearch(val);
                })
        };

        render() {
                return (
                    <div className="search-books-input-wrapper">
                            <input
                                type="text"
                                placeholder="Search by title or author"
                                onChange={this.handleChange}
                                value={this.state.value}
                            />
                    </div>
                );
        }

}

export default SearchBooksInput;
