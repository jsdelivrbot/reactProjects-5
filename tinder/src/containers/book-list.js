import React, {Component} from "react";
import {connect} from "react-redux";
import {selectBook} from "../actions/index";
import {bindActionCreators} from "redux";

class BookList extends Component {
    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        )
    }

    renderList() {
        return this.props.books.map((book) => {
            return (
                <li key={book.title} className="list-group-item"> {book.title}</li>
            );
        });
    }
}
// state içindeki propertyler içerde this.props.books şeklinde kullanılıyor
function mapStateToProps(state) {
    return {
        books: state.books
    };
}

function mapDispatchToProps(dispatch) {
    // selectBook state ine selectBook actionCreator fonksiyonunu register ediyor.
    // daha sonra ilgili reducer digest edip return ettiği objeyi selectBook state ine set etmiş olacak
    return bindActionCreators({selectBook: selectBook}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);