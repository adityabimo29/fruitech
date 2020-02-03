import {createStore,combineReducers,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import posts from './reducers/posts.reducer';
import home from './reducers/home.reducer';

export default createStore(
    combineReducers({posts,home}),
    applyMiddleware(thunk)
)