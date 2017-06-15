import {combineReducers} from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
    books: BookReducer,
    // activeBook redux store state olarak tutulur,
    // yani ActiveBook reducer activeBook state i oluşturur
    activeBook: ActiveBook
});

export default rootReducer;
