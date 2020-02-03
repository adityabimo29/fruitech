import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/posts.reducer';

export default createStore(
    combineReducers({posts}),
    applyMiddleware(thunk)
)