import { searchBook } from '../../actions'
import { connect } from 'react-redux';
import BookList from '../../components/BookList';

const mapStateToProps = ({ goodReads }) => ({
    bookList: goodReads.bookList,
    loading:goodReads.loading
})

const mapDispatchToProps = dispatch => ({
    searchBook: (request) => dispatch(searchBook(request))
})

export default connect(mapStateToProps,mapDispatchToProps)(BookList)