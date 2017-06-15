import {combineReducers} from 'redux';
import BookReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

// het bir reducer ilgili key e ait bir tane application state oluşturur
const rootReducer = combineReducers({
    // BookReducer books application state ini oluşturur
    books: BookReducer,
    // activeBook redux store state olarak tutulur,
    // yani ActiveBook reducer activeBook state i oluşturur
    activeBook: ActiveBook
});

export default rootReducer;
