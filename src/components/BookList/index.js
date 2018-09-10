import React, { Component } from 'react';
import BookItem from './BookItem';
import Pagination from '../common/Pagination'
import './style.css'
// var http = require('http');


// var cors_api_url = 'https://cors-anywhere.herokuapp.com/';
class BookList extends Component {
    state = {
        request: {
            searchString: 'e',
            page: 1
        },
        currentPage: null,
        totalPages: null
    }
    componentDidMount = () => {
        this.props.searchBook(this.state.request)
    }
    onSearch = (event) => {
        var request = this.state.request;
        request.page = 1;
        this.setState({ request, currentPage: 1 });

        this.state.request.searchString.trim() !== '' && this.props.searchBook(this.state.request)
    }

    onChangeText = (event) => {
        var searchString = event.target.value;
        var request = this.state.request;
        request.searchString = searchString;
        this.setState({ request });
    }
    onPageChanged = data => {
        // const { allCountries } = this.state;
        const { currentPage, totalPages } = data;
        var request = this.state.request;
        request.page = currentPage;

        this.props.searchBook(request)

        // const offset = (currentPage - 1) * pageLimit;
        // const currentCountries = allCountries.slice(offset, offset + pageLimit);

        this.setState({ request, currentPage, totalPages });
    };
    render() {

        let { bookList, loading } = this.props;

        return (<div className="page">
            <div className="search-container">
                <input type="text" name="searchBox" onChange={this.onChangeText} />
                <button onClick={this.onSearch}>search</button>
            </div>
            <div>
                <div className="d-flex flex-row py-4 align-items-center book-grid">
                    {
                        (bookList !== null && Number(bookList.search["total-results"]) > 20) &&
                        <Pagination
                            totalRecords={(bookList !== null && Number(bookList.search["total-results"]))}
                            pageLimit={20}
                            pageNeighbours={1}
                            onPageChanged={this.onPageChanged}
                            currentPage={this.state.currentPage}
                        />
                    }
                </div>
                <div>
                    {loading && <div style={{color:"white"}}>Loading...</div>}
                </div>
                <div className="book-grid">
                    {
                        bookList !== null && Number(bookList.search["total-results"]) > 0 && bookList.search.results.map((item, index) =>
                            <div className="book-container">
                                <BookItem index={index} image={item.best_book.image_url} title={item.best_book.title} />

                            </div>
                        )
                    }
                </div>
            </div>


        </div>)
    }
}

export default BookList;